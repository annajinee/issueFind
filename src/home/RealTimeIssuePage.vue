<template>
    <section class="page-section" id="contact">
        <div class="container">
            <div class="justify-content-center">
                <div class="row mt-2">
                    <div class="col-md-12 mb-2">
                        <p class="font-weight-bolder">실시간 이슈</p>
                        <hr class="dropdown-divider">
                    </div>
                    <div class="col-lg-4">
                        <mq-layout mq="laptop">
                            <button class="btn btn-dark js-scroll-trigger col-md-5 btn-sm mb-2 mr-1">
                                <router-link to="/notfound" class="btn-dark">이슈/테마 검색</router-link></button>
                            <button class="btn btn-dark js-scroll-trigger col-md-5 btn-sm mb-2">
                                <router-link to="/issue/industry" class="btn-dark">종목 검색</router-link>
                            </button>
                        </mq-layout>
                        <mq-layout mq="tablet">
                            <table class="text-center w-100">
                                <tr>
                                    <td class="w-50">
                                        <button class="btn btn-dark js-scroll-trigger col-md-5 btn-sm mb-2 mr-1">이슈/테마
                                            검색
                                        </button>
                                    </td>
                                    <td class="w-50">
                                        <button class="btn btn-dark js-scroll-trigger col-md-5 btn-sm mb-2">종목 검색
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </mq-layout>
                    </div>
                    <div class="col-lg-5">
                        <mq-layout mq="laptop">
                            <button class="btn btn-danger js-scroll-trigger col-sm-2 mr-1 btn-sm mb-2">일
                            </button>
                            <button class="btn btn-danger js-scroll-trigger col-sm-2 mr-1 btn-sm mb-2">주
                            </button>
                            <button class="btn btn-danger js-scroll-trigger col-sm-2 mr-1 btn-sm mb-2">1개월
                            </button>
                            <button class="btn btn-danger js-scroll-trigger col-sm-2 btn-sm mb-2">최대</button>
                        </mq-layout>
                        <mq-layout mq="tablet">
                            <table class="text-center w-100">
                                <tr>
                                    <td class="w-25">
                                        <button class="btn btn-danger js-scroll-trigger col-sm-5 mr-1 btn-sm mb-2">
                                            일
                                        </button>
                                    </td>
                                    <td class="w-25">
                                        <button class="btn btn-danger js-scroll-trigger col-sm-5 mr-1 btn-sm mb-2">
                                            주
                                        </button>
                                    </td>
                                    <td class="w-25">
                                        <button class="btn btn-danger js-scroll-trigger col-sm-5 mr-1 btn-sm mb-2">
                                            1개월
                                        </button>
                                    </td>
                                    <td class="w-25">
                                        <button class="btn btn-danger js-scroll-trigger col-sm-5 btn-sm mb-2">최대
                                        </button>
                                    </td>
                                </tr>
                            </table>
                        </mq-layout>
                    </div>
                </div>
                <hr class="dropdown-divider">
                <div class="row mt-4">
                    <div class="col-sm-8 col-md-push-3">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="font-weight-bolder d-inline-block">코스피</h6>
                                    </div>
                                    <div class="text-right col-sm-9">
                                        <h6 class="color-blue d-inline-block">1,535.35</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">▼25.5</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">-0.56%</h6>
                                    </div>
                                </div>
                                <div class="border">
                                    <candle-stick-chart/>
                                </div>
                                <div class="text-sm-center small mt-3 font-weight-bolder">
                                    <p class="d-inline-block">뉴스 +508</p>&nbsp; |
                                    <p class="d-inline-block">커뮤니티 +1,330</p>&nbsp; |
                                    <p class="d-inline-block">공시 -20</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="font-weight-bolder d-inline-block">코스닥</h6>
                                    </div>
                                    <div class="text-right col-sm-9">
                                        <h6 class="color-blue d-inline-block">1,535.35</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">▼25.5</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">-0.56%</h6>
                                    </div>
                                </div>
                                <div class="border">
                                    <candle-stick-chart/>
                                </div>
                                <div class="text-sm-center small mt-3 font-weight-bolder">
                                    <p class="d-inline-block">뉴스 +508</p>&nbsp; |
                                    <p class="d-inline-block">커뮤니티 +1,330</p>&nbsp; |
                                    <p class="d-inline-block">공시 -20</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <h6 class="font-weight-bolder d-inline-block">코스피 이슈</h6>
                                    </div>
                                    <div class="text-right col-sm-8">
                                        <h6 class="color-blue d-inline-block">1,535.35</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">▼25.5</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">-0.56%</h6>
                                    </div>
                                </div>
                                <div class="border">
                                    <candle-stick-chart/>
                                </div>
                                <div class="text-sm-center small mt-3 font-weight-bolder">
                                    <p class="d-inline-block">뉴스 +508</p>&nbsp; |
                                    <p class="d-inline-block">커뮤니티 +1,330</p>&nbsp; |
                                    <p class="d-inline-block">공시 -20</p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <h6 class="font-weight-bolder d-inline-block">코스닥 이슈</h6>
                                    </div>
                                    <div class="text-right col-sm-8">
                                        <h6 class="color-blue d-inline-block">1,535.35</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">▼25.5</h6>&nbsp;
                                        <h6 class="color-blue d-inline-block">-0.56%</h6>
                                    </div>
                                </div>
                                <div class="border">
                                    <candle-stick-chart/>
                                </div>
                                <div class="text-sm-center small mt-3 font-weight-bolder">
                                    <p class="d-inline-block">뉴스 +508</p>&nbsp; |
                                    <p class="d-inline-block">커뮤니티 +1,330</p>&nbsp; |
                                    <p class="d-inline-block">공시 -20</p>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-lg-6">
                                <table class="table table-borderless small text-left table-hover">
                                    <thead class="border">
                                    <tr>
                                        <th colspan="4">코스피 종합이슈 상위 TOP 10</th>
                                        <th class="text-right font-weight-normal">
                                            <router-link to="/signup">더보기 ></router-link>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="border">
                                    <tr class="font-weight-bolder">
                                        <td>순위</td>
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
                            <div class="col-lg-6">
                                <table class="table table-borderless small text-left table-hover">
                                    <thead class="border">
                                    <tr>
                                        <th colspan="4">코스닥 종합이슈 상위 TOP 10</th>
                                        <th class="text-right font-weight-normal">
                                            <router-link to="/signup">더보기 ></router-link>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="border">
                                    <tr class="font-weight-bolder">
                                        <th></th>
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
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-pull-9">
                        <p class="font-weight-bolder d-inline-block m-0">전일 주요 업종/소스별 이슈</p>
                        <p class="text-right font-weight-normal small">
                            <router-link to="/signup">더보기 ></router-link>
                        </p>
                        <div class="text-sm-center">
                            <mq-layout mq="laptop">
                            <button class="btn btn-dark js-scroll-trigger col-md-3 mr-2 btn-sm mb-2">웹 이슈</button>
                            <button class="btn btn-dark js-scroll-trigger col-md-3 mr-2 btn-sm mb-2">뉴스 이슈</button>
                            <button class="btn btn-dark js-scroll-trigger col-md-3 btn-sm mb-2">공시 이슈</button>
                            </mq-layout>
                            <mq-layout mq="tablet">
                                <table class="text-center w-100">
                                    <tr>
                                        <td class="w-25">
                                            <button class="btn btn-dark js-scroll-trigger col-md-3 mr-2 btn-sm mb-2">웹 이슈</button>
                                        </td>
                                        <td class="w-25">
                                            <button class="btn btn-dark js-scroll-trigger col-md-3 mr-2 btn-sm mb-2">뉴스 이슈</button>
                                        </td>
                                        <td class="w-25">
                                            <button class="btn btn-dark js-scroll-trigger col-md-3 btn-sm mb-2">공시 이슈</button>
                                        </td>
                                    </tr>
                                </table>
                            </mq-layout>
                        </div>
                        <hr class="dropdown-divider">
                        <table class="table table-borderless small text-left table-hover">
                            <tbody class="bg-light">
                            <tr class="font-weight-bolder">
                                <td>순위</td>
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
    import CandleStickChart from "../common/CandleStickChart";
    import VueMq from 'vue-mq'
    import Vue from "vue";

    export default {
        components: {
            vueMq: VueMq,
            MixedChart,
            YAxisChart,
            LineChart,
            ChartHeader,
            CandleStickChart
        }
    };
    Vue.use(
        VueMq, {
            breakpoints: {
                tablet: 300,
                laptop: 1250
            }
        }
    );

</script>

<style scoped>
    .color-blue {
        color: #045FB4;
    }
</style>
`