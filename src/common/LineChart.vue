<template>
    <div>
        <div id="chart">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import {chartService} from '../_services/chart.service';

    export default {
        data() {
            return {
                series: [],
                chartOptions: {
                    colors: ['#B40404', '#DF7401', '#0174DF', '#585858', '#0B6121', '#380B61'],
                    chart: {
                        height: ['350%', 100],
                        type: 'line',
                    },
                    stroke: {
                        width: [1, 1, 1, 1, 1, 1, 1]
                    },
                    title: {
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: []
                    },
                    // labels: [],
                    xaxis: {
                        type: 'text'
                    },
                    yaxis: [{
                        title: {
                            text: '종가',
                        },
                        showAlways: true,
                        logarithmic: false
                    },
                        {
                            opposite: true,
                            title: {}
                        }
                    ]
                },
            }
        },
        components: {
            apexchart: VueApexCharts
        },
        created() {
            // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
            this.getChartData();
        },
        watch: {
            // 라우트가 변경되면 메소드를 다시 호출됩니다.
            '$route': 'getChartData'
        },
        methods: {
            getChartData() {
                let date=[];
                let closingPrice = [];
                let volume =[];
                let views =[];
                let sympathy =[];
                let unsympathy=[];
                let score=[];

                let obj;
                let dataObj =chartService.getChartInfo().then(response => {
                    obj = JSON.parse(response);
                    console.log('data:'+obj['data']);
                    let dataArr = obj['data'];
                    for(var i=0; i<dataArr.length; i++) {
                        closingPrice.push(dataArr[i]['closingPrice']);
                        date.push(dataArr[i]['date']);
                        sympathy.push(dataArr[i]['sympathy']);
                        unsympathy.push(dataArr[i]['unsympathy']);
                        score.push(dataArr[i]['score']);
                        volume.push(dataArr[i]['volume']);
                    }
                    var target_closingPrice = {
                        name: '종가',
                        type: 'line',
                        data: closingPrice
                    };
                    var target_volume = {
                        name: '거래금액',
                        type: 'line',
                        data: volume
                    };
                    var target_sympath= {
                        name: '공감',
                        type: 'line',
                        data: sympathy
                    };
                    var target_unsympathy= {
                        name: '비공감',
                        type: 'line',
                        data: unsympathy
                    };
                    var target_socre= {
                        name: '게시글 스코어',
                        type: 'line',
                        data: score
                    };
                    var target_views= {
                        name: '게시글 뷰',
                        type: 'line',
                        data: views
                    };
                    this.series.push(target_closingPrice);
                    this.series.push(target_volume);
                    this.series.push(target_sympath);
                    this.series.push(target_unsympathy);
                    this.series.push(target_socre);
                    this.series.push(target_views);
                    this.$set(this.chartOptions, 'labels', date);
                    });
            }
        }
    };
</script>

<style scoped>

</style>
