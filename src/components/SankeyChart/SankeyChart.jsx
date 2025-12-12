import axios from 'axios';
import Plot from 'react-plotly.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import InfoButton from '../InfoButton/InfoButton';
import SectionBox from '../SectionBox/SectionBox';

const SankeyChart = () => {

    const nodes = useSelector((state) => state.sankey.nodes)
    const sourceIds = useSelector((state) => state.sankey.links.source_ids)
    const targetIds = useSelector((state) => state.sankey.links.target_ids)
    const linkAreas = useSelector((state) => state.sankey.links.area_km2)
    const linkColors = useSelector((state) => state.sankey.links.colors)

    const maxArea = Math.max(...linkAreas)
    const minArea = Math.max(...linkAreas)

    const [showChangeOnly, setShowChangeOnly] = useState(false)

    // const dispatch = useDispatch()


    console.log(sourceIds?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index]))
    console.log(targetIds?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index]))
    console.log(linkAreas?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index]))

    var annotations = []
    for (const [index, year] of ["2010","2015","2020"].entries()) {
        annotations.push({
            font: {
                size: 20
            },
            showarrow: false,
            text: "Year:" + year,
            x: 0.12 + (0.19 * index * 2),
            y: 1
        })
    }

    const layout = {
        // width: 3000,
        // height: 772,
        autosize: true,
        responsive: true,
        margin: { l: 30, r: 30, t: 30, b: 30 },
        title: {
            text: "Change in Canada’s Vegetation Land Cover (2010 to 2020)",
            font: {
                size: 30
            },
            x: 0.5,      // center horizontally
            y: 0.99,
            yanchor: "top",
        },
        font: {
            size: 12
        },
        annotations: annotations,
        updatemenus: [
            {
                type: "dropdown",
                direction: "down",
                showactive: true,
                x: 0.0,
                y: 1.0,
                xanchor: "left",
                yanchor: "top",
                buttons: [
                    {
                        label: "Show ALL Change",
                        method: "restyle",
                        args: [{
                            'link': {
                                source: [...sourceIds],
                                target: [...targetIds],
                                value: [...linkAreas],
                                color: [...linkColors],
                            }
                        }]
                    },
                    {
                        label: "Show ONLY Change",
                        method: "restyle",
                        args: [{
                            'link': {
                                source: [...sourceIds?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index])],
                                target: [...targetIds?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index])],
                                value: [...linkAreas?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index])],
                                color: [...linkColors?.filter((val, index) => sourceIds[index] + 20 !== targetIds[index])],
                            }
                        }]
                    }
                ]
            }
        ],
    }

    const config = {
        // displayModeBar: "hover", 
        displayModeBar: false,
    }

    const data = {
        type: "sankey",
        domain: {
            x: [0, 1],
            y: [0, 0.95]
        },
        orientation: "h",
        valueformat: ".2f",
        valuesuffix: " km<sup>2</sup>",
            xaxis:{
        "tickangle" : 90
    },
        node: {
            pad: 10,
            thickness: 10,
            align: "left",
            line: {
                color: "black",
                width: 1
            },
            hoverinfo: 'all',
            label: [...nodes?.labels],
            color: [...nodes?.colors],
            x: [...nodes?.x],
            y: [...nodes?.y],
        },
        link: {
            source: [...sourceIds],
            target: [...targetIds],
            value: [...linkAreas],
            color: [...linkColors],
            // colorscale : [
            //     [...nodes?.colors],
            //     [...nodes?.colors]
            // ],
            // label: links?.colors?.map((_) => "h"),
            opacity: 0.1
        }
    }

    return (
        <>
            <SectionBox>
                <InfoButton />
                <Plot
                    data={[data]}
                    layout={layout}
                    config={config}
                    style={{ width: "100%", height: "calc(100vh - 16px - 37px)" }}
                />
            </SectionBox>
        </>
    );

}

export default SankeyChart;