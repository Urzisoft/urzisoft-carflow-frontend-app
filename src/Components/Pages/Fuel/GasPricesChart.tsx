import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

interface GasPricesChartProps {
    data1: number[];
    data2: number[];
    data3: number[];
}

const GasPricesChart: React.FC<GasPricesChartProps> = ({ data1, data2, data3 }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<Chart>();

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                if (chartRef.current) {
                    chartRef.current.destroy();
                }

                const config: ChartConfiguration = {
                    type: 'line',
                    data: {
                        labels: [
                            '01-21', '02-21', '03-21', '04-21', '05-21', '06-21', '07-21', '08-21', '09-21', '10-21', '11-21', '12-21',
                            '01-22', '02-22', '03-22', '04-22', '05-22', '06-22', '07-22', '08-22', '09-22', '10-22', '11-22', '12-22',
                            '01-23', '02-23', '03-23'
                        ],
                        datasets: [
                            {
                                label: 'Petrol Prices',
                                data: data1,
                                fill: false,
                                borderColor: 'red',
                                tension: 0.1,
                            },
                            {
                                label: 'Diesel Prices',
                                data: data2,
                                fill: false,
                                borderColor: 'green',
                                tension: 0.1,
                            },
                            {
                                label: 'GPL Prices',
                                data: data3,
                                fill: false,
                                borderColor: 'black',
                                tension: 0.1,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                min: 3,
                                max: 9.5,
                                ticks: {
                                    stepSize: 0.5,
                                },
                            },
                            x: {
                                type: 'category',
                            },
                        },
                    },
                };

                chartRef.current = new Chart(ctx, config);
            }
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [data1, data2, data3]);

    return <canvas ref={canvasRef} />;
};

export default GasPricesChart;
