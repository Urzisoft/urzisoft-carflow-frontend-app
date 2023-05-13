import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale);

interface GasPricesChartProps {
    petrolPrices: number[];
    dieselPrices: number[];
    gplPrices: number[];
    dateLabels: string[];
}

const GasPricesChart: React.FC<GasPricesChartProps> = ({ petrolPrices, dieselPrices,
                                                           gplPrices, dateLabels }) => {
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
                        labels: dateLabels,
                        datasets: [
                            {
                                label: 'Petrol Prices',
                                data: petrolPrices,
                                fill: false,
                                borderColor: 'green',
                                tension: 0.1,
                            },
                            {
                                label: 'Diesel Prices',
                                data: dieselPrices,
                                fill: false,
                                borderColor: 'black',
                                tension: 0.1,
                            },
                            {
                                label: 'GPL Prices',
                                data: gplPrices,
                                fill: false,
                                borderColor: 'red',
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [petrolPrices, dieselPrices, gplPrices]);

    return <canvas ref={canvasRef} />;
};

export default GasPricesChart;
