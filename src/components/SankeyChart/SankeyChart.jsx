import axios from 'axios';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const SankeyChart = () => {
    const [chartData, setChartData] = useState([]);
    const [nodes, setNodes] = useState([]);
    const [sourceIds, setSourceIds] = useState([])
    const [targetIds, setTargetIds] = useState([])
    const [linkArea, setLinkArea] = useState([])
    const [linkColor, setLinkColor] = useState([])

    useEffect(() => {
        axios.get('/data/landcover_canada_change_sanky_2010_2015_2020.json')
            .then((response) => {
                setChartData(response?.data)
                setNodes(response?.data?.nodes)
                setSourceIds(response?.data?.links?.source_ids)
                setTargetIds(response?.data?.links?.target_ids)
                setLinkArea(response?.data?.links?.area_km2)
                setLinkColor(response?.data?.links?.colors)
            })
            .catch((error) => {
                console.error('Error fetching JSON:', error);
            });
    }, []);

    // const indices = links?.area_km2
    //     ?.map((value, index) => ({ value, index }))
    //     .filter(item => item.value >= 1000)
    //     .map(item => item.index);

    // chartData?.links?.sourceIds?.forEach(__dirname, index => {
    //   console.log(index)  
    // })

    const onlyChangeIndex = chartData?.links?.source_ids?.map((val, index) => (val != targetIds[index] ? index : -1)).filter(index => index !== -1)
    
    // setSourceIds(sourceIds.filter((_, index) => onlyChangeIndex.includes(index)))
    // setTargetIds(targetIds.filter((_, index) => onlyChangeIndex.includes(index)))
    // setLinkArea(linkArea.filter((_, index) => onlyChangeIndex.includes(index)))
    // setLinkColor(linkColor.filter((_, index) => onlyChangeIndex.includes(index)))

    const layout = {
        // width: 3000,
        // height: 772,
        autosize: true,
        responsive: true,
        title: {
            text: "Change in Canada’s Vegetation Land Cover (2010 to 2020)"
        },
        font: {
            size: 10
        }
    }

    const config = {
        // displayModeBar: "hover", 
        displayModeBar: false,
    }

    const data = {
        type: "sankey",
        domain: {
            x: [0, 1],
            y: [0, 1]
        },
        orientation: "h",
        valueformat: ".2f",
        valuesuffix: " km<sup>2</sup>",
        node: {
            pad: 15,
            thickness: 30,
            line: {
                color: "black",
                width: 0.5
            },
            label: nodes?.labels,
            color: nodes?.colors,
            x: nodes?.x,
        },
        link: {
            source: sourceIds,
            target: targetIds,
            value: linkArea,
            color: linkColor,
            // label: links?.colors?.map((_) => "h"),
            opacity: 0.1
        }
    }

    return (
        <>
            <Box component="section" sx={{ border: '1px dashed grey' }}>
                <Plot
                    data={[data]}
                    layout={layout}
                    config={config}
                    style={{ width: "100%", height: "100vh" }}
                />
            </Box>
        </>
    );

}

export default SankeyChart;