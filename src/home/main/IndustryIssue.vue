<!--
메인 페이지 - 업종별 이슈
-->
<template>
    <div class="container">
        <section class="page-item" id="services">
            <h3 class="font-weight-bolder mt-5 pb-3 text-danger">Social Index</h3>
            <div class="row">
                <div class="col-lg-4">
                    <h6 class="font-weight-bolder mt-0 pb-3">지난주 업체별 급등 이슈</h6>
                </div>
                <div class="col-lg-4">
                    <h6 class="font-weight-bolder mt-0 pb-3">월별 업체별 급등 이슈와 주가</h6>
            </div>
                <div class="col-lg-4">
                </div>
                <div class="col-lg-4">
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
                    <div>
                        <candle-stick-chart/>
                        <chart-header/>
                    </div>
                    <div>
                        <candle-stick-chart/>
                        <chart-header/>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div>
                        <candle-stick-chart/>
                        <chart-header/>
                    </div>
                    <div>
                        <candle-stick-chart/>
                        <chart-header/>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import MixedChart from "../../common/MixedChart";
    import YAxisChart from "../../common/YAxisChart";
    import CandleStickChart from "../../common/CandleStickChart";
    import ChartHeader from "../../common/ChartHeader";
    import TOSAgree from "../../login/SignUpAgree";

    export default {
        name: "IndustryIssue",
        components: {
            TOSAgree,
            MixedChart,
            YAxisChart,
            CandleStickChart,
            ChartHeader
        }
    };
</script>

<style scoped>

</style>