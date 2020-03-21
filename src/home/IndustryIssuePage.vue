<template>
    <section class="page-section" id="contact">
        <div class="container">
            <div class="justify-content-center">
                <div class="row mt-2">
                    <div class="col-md-12 mb-2">
                        <p class="font-weight-bolder">실시간 이슈 [종목분석]</p>
                        <hr class="dropdown-divider">
                    </div>
                    <div class="col-lg-3">
                        <button class="btn btn-danger js-scroll-trigger col-md-8 btn-sm mb-2">이슈/테마 검색</button>
                    </div>
                    <div class="col-lg-4">
                        <button class="btn btn-outline-danger js-scroll-trigger col-md-2 mr-1 btn-sm mb-2">일</button>
                        <button class="btn btn-outline-danger js-scroll-trigger col-md-2 mr-1 btn-sm mb-2">주</button>
                        <button class="btn btn-outline-danger js-scroll-trigger col-md-2 mr-1 btn-sm mb-2">1개월</button>
                        <button class="btn btn-outline-danger js-scroll-trigger col-md-2 btn-sm mb-2">최대</button>
                    </div>
                    <div class="col-lg-5">
                        종목검색
                        <i class="fas fa-search mb-2 ml-1"></i>
                        <input type="text" placeholder="종목명 or 종목코드를 입력하세요" v-model="eventname" name="eventname"
                               class="form-control-sm col-md-6 mb-2 mr-2"/>
                        <button class="btn-sm btn-dark js-scroll-trigger col-md-3 btn-sm mb-2"
                                @click="getChartInfo()">검색하기
                        </button>
                    </div>
                </div>
                <hr class="dropdown-divider">
                <div class="row mt-3">
                    <div class="col-lg-7">
                        <ChartHeader/>
                    </div>
                    <div class="col-lg-5">
                        <div class="row mt-2 ml-1">
                            <button class="btn-sm btn-dark js-scroll-trigger col-sm-3 mr-2 mt-1">기업뉴스</button>
                            <button class="btn-sm btn-dark js-scroll-trigger col-sm-3 mr-2 mt-1">기업공시</button>
                            <button class="btn-sm btn-dark js-scroll-trigger col-sm-3 mr-2 mt-1">이슈분석</button>
                        </div>
                        <div class="row ml-1">
                            <button class="btn btn-outline-info js-scroll-trigger col-sm-10 mt-3 mr-2">관심업종 등록하기
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center mt-3">
                    <!--                    <LineChart/>-->
                    <div id="chart">
                        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-4">
                        <table class="table table-borderless small text-left">
                            <thead class="border">
                            <tr>
                                <th colspan="4">종목정보</th>
                            </tr>
                            </thead>
                            <tbody class="border">
                            <tr>
                                <th class="font-weight-normal">전일</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                                <th class="font-weight-normal">시가</th>
                                <td class="bg-light text-right font-weight-bolder">718</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">고가</th>
                                <td class="bg-light text-right text-danger font-weight-bolder">721</td>
                                <th class="font-weight-normal">저가</th>
                                <td class="bg-light text-right text-info font-weight-bolder">701</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">거래량</th>
                                <td class="bg-light text-right font-weight-bolder">349,619</td>
                                <th class="font-weight-normal">거래대금</th>
                                <td class="bg-light text-right font-weight-bolder">249백</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">52주최고</th>
                                <td class="bg-light text-right text-danger font-weight-bolder">1,235</td>
                                <th class="font-weight-normal">52주최저</th>
                                <td class="bg-light text-right text-info font-weight-bolder">515</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal small">외인보유비중</th>
                                <td class="bg-light text-right font-weight-bolder">3.52%</td>
                                <th class="font-weight-normal">시가총액</th>
                                <td class="bg-light text-right font-weight-bolder">1,134억원</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">액면가</th>
                                <td class="bg-light text-right font-weight-bolder">500원</td>
                                <th class="font-weight-normal">상장주식</th>
                                <td class="bg-light text-right font-weight-bolder">158,418,281주</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">EPS*</th>
                                <td class="bg-light text-right font-weight-bolder">-89원</td>
                                <th class="font-weight-normal">PER*</th>
                                <td class="bg-light text-right font-weight-bolder">-5.3배</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">BPS*</th>
                                <td class="bg-light text-right font-weight-bolder">680원</td>
                                <th class="font-weight-normal">PBR*</th>
                                <td class="bg-light text-right font-weight-bolder">1.1배</td>
                            </tr>
                            <tr>
                                <th class="font-weight-normal">업종</th>
                                <td class="bg-light text-right font-weight-bolder">IT서비스</td>
                                <th class="font-weight-normal small">배당수익률</th>
                                <td class="bg-light text-right font-weight-bolder">-</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <table class="table table-borderless small text-left table-hover">
                            <thead class="border">
                            <tr>
                                <th colspan="5">연관이슈 종목</th>
                            </tr>
                            </thead>
                            <tbody class="border">
                            <tr class="font-weight-bolder">
                                <th>순위</th>
                                <td>업체명</td>
                                <td>산업</td>
                                <td>이슈점수</td>
                                <td>등락</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>삼성전자</td>
                                <td>제조</td>
                                <td>89</td>
                                <td>+5.8%</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-lg-4">
                        <table class="table table-borderless small text-left table-hover">
                            <thead class="border">
                            <tr class="border-bottom">
                                <th colspan="4">시뮬레이션 수익률</th>
                            </tr>
                            <tr class=bg-light>
                                <th colspan="4" class="font-weight-normal">기준일 - 2019.02.03 &nbsp;수익률 <p
                                        class="text-danger d-inline-block m-0 font-weight-bolder">135.4%(보유중)</p></th>
                            </tr>
                            </thead>
                            <tbody class="border">
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
                            </tr>
                            <tr>
                                <td>2019.08.08 00:00</td>
                                <td>매수</td>
                                <td>103,000</td>
                                <td>100%</td>
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

    export default {
        name: 'IndustryIssue',
        data() {
            return {
                eventname: '',
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
                    title: {},
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
        methods: {
            // getChartInfo() {
            //     const {eventname} = this;
            //     if (eventname) {
            //         console.log('chartinfo in page : ' + eventname);
            //         chartService.getChartInfo(eventname);
            //     }
            // },
            getChartInfo() {
                const {eventname} = this;
                let dataObj = chartService.getChartInfo(eventname).then(response => {
                    
                    let date = [];
                    let closingPrice = [];
                    let volume = [];
                    let views = [];
                    let sympathy = [];
                    let unsympathy = [];
                    let score = [];
                    let obj;

                    obj = JSON.parse(response);
                    console.log('data:' + obj['data']);
                    let dataArr = obj['data'];
                    let target_closingPrice = {
                        name: '종가',
                        type: 'line',
                        data: closingPrice
                    };
                    let target_volume = {
                        name: '거래금액',
                        type: 'line',
                        data: volume
                    };
                    let target_sympath = {
                        name: '공감',
                        type: 'line',
                        data: sympathy
                    };
                    let target_unsympathy = {
                        name: '비공감',
                        type: 'line',
                        data: unsympathy
                    };
                    let target_socre = {
                        name: '게시글 스코어',
                        type: 'line',
                        data: score
                    };
                    let target_views = {
                        name: '게시글 뷰',
                        type: 'line',
                        data: views
                    };

                    if (dataArr.length > 0) {
                        console.log('======price!!!!!!!!'+closingPrice);
                        for (let i = 0; i < dataArr.length; i++) {
                            closingPrice.push(dataArr[i]['closingPrice']);
                            date.push(dataArr[i]['date']);
                            sympathy.push(dataArr[i]['sympathy']);
                            unsympathy.push(dataArr[i]['unsympathy']);
                            score.push(dataArr[i]['score']);
                            volume.push(dataArr[i]['volume']);
                        }
                        target_closingPrice.data = closingPrice;
                        target_volume.data = volume;
                        target_sympath.data = sympathy;
                        target_unsympathy.data = unsympathy;
                        target_socre.data = score;
                        target_views.data = views;
                        this.series.push(target_closingPrice);
                        this.series.push(target_volume);
                        this.series.push(target_sympath);
                        this.series.push(target_unsympathy);
                        this.series.push(target_socre);
                        this.series.push(target_views);
                        this.$set(this.chartOptions, 'labels', date);
                    } else {
                        alert('검색된 데이터가 없습니다.');
                    }
                });
            }
        },
        components: {
            MixedChart,
            YAxisChart,
            LineChart,
            ChartHeader,
            apexchart: VueApexCharts
        }
    };
</script>

<style scoped>

</style>
`