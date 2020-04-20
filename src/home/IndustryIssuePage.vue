<template>
    <section class="page-section" id="contact">
        <div class="container">
            <div class="justify-content-center">
                <div class="row mt-2">
                    <div class="col-md-12 mb-2">
                        <div class="row">
                        <div class="col-lg-6">
                        <p class="font-weight-bolder">실시간 이슈 [종목분석]</p>
                        </div>
                        <div class="col-lg-6">
                            <mq-layout mq="laptop">
                                종목검색
                                <i class="fas fa-search mb-2 ml-1"></i>
                                <input type="text" placeholder="종목명 or 종목코드를 입력하세요" v-model="eventname" name="eventname"
                                       class="form-control-sm col-md-6 mb-2 mr-2"/>
                                <button class="btn-sm btn-dark js-scroll-trigger col-md-3 btn-sm mb-2"
                                        @click="getChartInfo()">검색하기
                                </button>
                            </mq-layout>
                            <mq-layout mq="tablet">
                                <table class="w-100">
                                    <td style="width: 20%">
                                        종목검색
                                        <i class="fas fa-search mb-2 ml-1"></i>
                                    </td>
                                    <td style="width: 40%;">
                                        <input type="text" placeholder="종목명 or 종목코드를 입력하세요" v-model="eventname"
                                               name="eventname"
                                               class="form-control-sm col-md-6 mb-2 mr-2"/>
                                    </td>
                                    <td style="width: 20%;">
                                        <button class="btn-sm btn-dark js-scroll-trigger col-md-3 btn-sm mb-2"
                                                @click="getChartInfo()">검색하기
                                        </button>
                                    </td>
                                </table>
                            </mq-layout>
                        </div>
                        <hr class="dropdown-divider">
                    </div>
                    </div>
                </div>
                <hr class="dropdown-divider">
                <div class="row mt-3">
                    <div class="col-lg-8">
                        <ChartHeader/>
                    </div>
                    <div class="col-lg-4">
                        <div class="row ml-1">
                            <button class="btn btn-outline-info js-scroll-trigger col-sm-10 mt-2 mr-2">관심업종 편집하기
                            </button>
                            <button class="btn btn-outline-info js-scroll-trigger col-sm-10 mt-2 mr-2">관심업종 등록하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center mt-3">
                    <!--                    <LineChart/>-->
                    <div id="chart">
                        <apexchart type="candlestick" height="290" :options="chartOptions" :series="series"></apexchart>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-12">
                        <table class="table table-bordered small text-left">
                            <thead class="border">
                            <tr>
                                <th colspan="8">종목정보</th>
                            </tr>
                            </thead>
                            <tbody class="border">
                            <tr>
                                <th class="font-weight-normal">시가</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">고가</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">저가</th>
                                <td class="bg-light text-right text-danger font-weight-bolder">721</td>
                                <th class="font-weight-normal">종가</th>
                                <td class="bg-light text-right text-info font-weight-bolder">701</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">거래량</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">거래대금</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">52주최고</th>
                                <td class="bg-light text-right text-danger font-weight-bolder">721</td>
                                <th class="font-weight-normal">52주최저</th>
                                <td class="bg-light text-right text-info font-weight-bolder">701</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">시가총액</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">상장주식</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">액면가</th>
                                <td class="bg-light text-right text-danger font-weight-bolder" colspan="3">721</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">EPS</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">PER</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">BPS</th>
                                <td class="bg-light text-right text-danger font-weight-bolder">721</td>
                                <th class="font-weight-normal">PBR</th>
                                <td class="bg-light text-right text-info font-weight-bolder">701</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">업종</th>
                                <td class="bg-light text-right font-weight-bolder" colspan="3">IT서비스</td>
                                <th class="font-weight-normal">배당수익률</th>
                                <td class="bg-light text-right font-weight-bolder" colspan="3">-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import MixedChart from "../common/MixedChart";
    import ChartHeader from "../common/ChartHeader";
    import YAxisChart from "../common/YAxisChart";
    import LineChart from "../common/LineChart";
    import {chartService} from '../_services/chart.service';
    import VueApexCharts from "vue-apexcharts";
    import VueMq from 'vue-mq'
    import Vue from "vue";

    export default {
        name: 'IndustryIssue',
        data() {
            return {
                eventname:'',
                series: [{
                }],
                chartOptions: {
                    chart: {
                        type: 'candlestick',
                        height: 350
                    },
                    title: {
                        align: 'left'
                    },
                    // xaxis: {
                    //     type: 'datetime'
                    // },
                    yaxis: {
                        tooltip: {
                            enabled: true
                        }
                    }
                }
            }
        },
        methods: {
            getChartInfo() {
                const {eventname} = this;
                if (eventname === '') {
                    alert('종목명 or 종목코드를 입력하세요');
                } else {
                    let dataObj = chartService.getChartInfo(eventname).then(response => {
                        let dataArr = JSON.parse(response)['data'];
                        if (dataArr.length > 0) {
                            console.log('dataArr:'+dataArr);
                            let resultArr=[];
                            for (let i = 0; i < dataArr.length; i++) {
                                let jsonObj=dataArr[i];
                                let data = {
                                    x: '',
                                    y:[]
                                };
                                let y_data = [];
                                data.x = jsonObj['collectDay'];
                                y_data.push(jsonObj['openPrice']);
                                y_data.push(jsonObj['highPrice']);
                                y_data.push(jsonObj['lowPrice']);
                                y_data.push(jsonObj['tradePrice']);
                                data.y = y_data;
                                console.log('obj:'+data.toString());
                                resultArr.push(data);
                            }
                            this.$set(this.series[0], 'data', resultArr);

                        } else {
                            alert('검색된 데이터가 없습니다.');
                        }
                    });
                }
            }
        },
        components: {
            MixedChart,
            YAxisChart,
            LineChart,
            ChartHeader,
            apexchart: VueApexCharts,
            vueMq: VueMq
        }
    };

    Vue.use(
        VueMq, {
            breakpoints: {
                tablet: 500,
                laptop: 1250
            }
        }
    );

</script>

<style scoped>

</style>
`