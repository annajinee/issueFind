<template>
    <div class="text-center">
        <apexchart type="bar" height="150" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'

    export default {
        data() {
            return {
                series: [{
                    name: '거래량',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, -37, 21, 44, 22, 30]
                }],
                chartOptions:
                    {
                        chart: {
                            height: 200,
                            type:
                                'column',
                            stacked:
                                false,
                        }
                        ,

                        plotOptions: {
                            bar: {
                                columnWidth: '50%'
                            }
                        }
                        ,
                        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                        ],
                        markers:
                            {
                                size: 0
                            }
                        ,
                        xaxis: {
                            type: 'datetime'
                        }
                        ,
                        yaxis: {
                            title: {
                                text: '거래량',
                            }
                            ,
                            min: 0
                        }
                        ,
                        tooltip: {
                            shared: true,
                            intersect:
                                false,
                            y:
                                {
                                    formatter: function (y) {
                                        if (typeof y !== "undefined") {
                                            return y.toFixed(0) + " points";
                                        }
                                        return y;

                                    }
                                }
                        }
                    }
            }
        },
        components: {
            apexchart: VueApexCharts
        }
    };
</script>

<style scoped>

</style>
