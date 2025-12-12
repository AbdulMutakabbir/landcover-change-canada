import { useSelector } from "react-redux";
import SectionBox from "../SectionBox/SectionBox";
import Plot from "react-plotly.js";
import InfoButton from "../InfoButton/InfoButton";

const DonutGrowth = () => {
    const donutChartsData = useSelector((state) => state.donutGrowth)

    var data = []
    for (const [index, chartName] of Object.keys(donutChartsData).entries()) {
        console.log(chartName)
        data.push({
            type: 'pie',
            hole: .4,
            name: chartName,
            text: chartName,
            textposition: 'inside',
            textinfo: "label+percent",
            insidetextorientation: "radial",
            domain: {
                row: 0,
                column: index
            },
            marker: {
                colors: donutChartsData[chartName]['colors']
            },
            values: donutChartsData[chartName]['area_km2'],
            labels: donutChartsData[chartName]['labels'],
        })

    }

    var annotations = []
    for (const [index, chartName] of Object.keys(donutChartsData).entries()) {
        annotations.push({
            font: {
                size: 20
            },
            showarrow: false,
            text: chartName,
            x: 0.12 + (0.19 * index * 2),
            y: 0.5
        })
    }

    const layout = {
        // width: 3000,
        // height: 772,
        autosize: true,
        responsive: true,
        margin: { l: 30, r: 30, t: 30, b: 30 },
        title: {
            text: "Grown Vegetation Land Cover Percentage after Historical Fire (2010 to 2020)",
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
        grid: {
            rows: 1,
            columns: 3
        },
        legend: {
            orientation: "h",     // horizontal legend
            y: 0,              // move below the plot
            x: 0.5,               // center it horizontally
            xanchor: "center",
        },
        annotations: annotations,
    }

    const config = {
        // displayModeBar: "hover", 
        displayModeBar: false,
    }

    return (
        <>
            <SectionBox>
                <InfoButton />
                <Plot
                    data={data}
                    layout={layout}
                    config={config}
                    style={{ width: "100%", height: "calc(100vh - 16px - 37px)" }}
                />
            </SectionBox>
        </>
    )
}

export default DonutGrowth;