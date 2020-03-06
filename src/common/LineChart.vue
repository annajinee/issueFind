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
    let date=[];
    let closingPrice = [];
    let volume =[];
    let views =[];
    let sympathy =[];
    let unsympathy=[];
    let score=[];
    let test='asdasd';
    export default {
        data() {
            return {
                series: [{
                    name: test,
                    type: 'line',
                    data: closingPrice
                },
                    {
                        name: '거래금액',
                        type: 'line',
                        data: volume
                    },
                    {
                        name: '공감',
                        type: 'line',
                        data: sympathy
                    },
                    {
                        name: '비공감',
                        type: 'line',
                        data: unsympathy
                    },
                    {
                        name: '게시글 스코어',
                        type: 'line',
                        data: score
                    },
                    {
                        name: '게시글 뷰',
                        type: 'line',
                        data: views
                    }],
                chartOptions: {
                    colors: ['#B40404', '#DF7401', '#0174DF', '#585858', '#0B6121', '#380B61'],
                    chart: {
                        height: ['100%', 100],
                        type: 'line',
                    },
                    stroke: {
                        width: [2, 2, 2, 2, 2, 2, 2]
                    },
                    title: {
                    },
                    dataLabels: {
                        enabled: true,
                        enabledOnSeries: []
                    },
                    labels: date,
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
                let obj;
                let dataObj =chartService.getChartInfo().then(response => {
                    obj = JSON.parse(response);
                    console.log('data:'+obj['data']);
                    let dataArr = obj['data'];
                    for(var i=0; i<dataArr.length; i++) {
                        closingPrice[i]=dataArr[i]['closingPrice'];
                        date[i] = dataArr[i]['date'];
                        sympathy[i]=dataArr[i]['sympathy'];
                        unsympathy[i]=dataArr[i]['unsympathy'];
                        score[i]=dataArr[i]['score'];
                        volume[i]=dataArr[i]['volume'];
                    }
                    console.log('closingPrice-----:::::::::'+date);
                });
                console.log('closingPrice'+test);
                this.test='테스트트트';
                console.log('closingPrice'+this.test);
                Vue.$set();
            }
        }
    };
</script>

<style scoped>

</style>
