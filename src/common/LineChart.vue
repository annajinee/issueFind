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
                series: [{
                    name: this.closingPrice,
                    type: 'line',
                    data: [0, 0]
                },
                    {
                        name: '거래금액',
                        type: 'line',
                        data: [0, 0]
                    },
                    {
                        name: '공감',
                        type: 'line',
                        data: [15, 0]
                    },
                    {
                        name: '비공감',
                        type: 'line',
                        data: [1, 0]
                    },
                    {
                        name: '게시글 스코어',
                        type: 'line',
                        data: [2245, 0]
                    },
                    {
                        name: '게시글 뷰',
                        type: 'line',
                        data: [2085, 0]
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
                    labels: this.getDate(),
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
            this.getDate();
        },
        watch: {
            // 라우트가 변경되면 메소드를 다시 호출됩니다.
            '$route': 'getChartData'
        },
        methods: {
            getChartData() {
                let obj;
                this.closingPrice = [];
                this.volume =[];
                this.views =[];
                this.sympathy =[];
                this.unsympathy=[];
                this.score=[];
                this.date=[];
                let dataObj =chartService.getChartInfo().then(response => {
                    obj = JSON.parse(response);
                    console.log('data:'+obj['data']);
                    let dataArr = obj['data'];
                    for(var i=0; i<dataArr.length; i++) {
                        console.log(dataArr[i]['companyCode']);
                        this.closingPrice.push(dataArr[i]['closingPrice']);
                        this.date.push(dataArr[i]['date']);
                    }
                    console.log('closingPrice'+this.date);
                    return this.date;
                });
            console.log('closingPrice'+this.closingPrice);
            },
            getDate(){
                this.getChartData();
                console.log('this.getdate'+ this.getChartData());
                return this.date;
            }


        }
    };
</script>

<style scoped>

</style>
