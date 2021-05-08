import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {// Manter estado no componente | Hook: useState
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    //Executar algo na instanciação ou destruição do componente, observar estado
    //Hook: useEffect
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // } FEITO PARA TESTAR O FRONT-END COM DADOS IMAGINÁRIOS

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: chartData.labels }} // pega todo mundo porém vc pode adicionar mais coisas
            series={chartData.series}
            type="donut"
            height="500"
            width="500"
        />
    );
}

export default DonutChart;
