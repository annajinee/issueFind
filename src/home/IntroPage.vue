<template>
    <div style="background-image: url('img/portfolio/service/intro_phone.png');" class="d-block w-100">
        <section class="page-section">
            <div class="container" style="margin-top: 10%;">
                <mq-layout mq="laptop">
                    <h1 class="text-danger mt-5 font-weight-bold">Social Issue Tracking Service</h1>
                    <h2 class="text-dark mt-3 mb-3">국내 2,300여 상장기업의 핵심정보를 내 손안에!</h2>
                    <h5>빅데이터 이슈 분석리포트로 기업의 현재/미래 가치를 확인하세요</h5>
                    <h5>투자의 핵심 지표가 되는 이슈를 가장 빠르고 간단하게 전달합니다</h5>
                    <h5>기업 이슈와 가치에 대한 분석, 이제 <h3 class="d-inline font-weight-bold text-dark">퀀트리포트</h3>를 만나보세요</h5>
                    <div class="mt-5">
                        <h6 class="mt-3 font-weight-normal"> BIG DATA – 데이터 마이닝이 중요한 시대입니다.</h6>
                        <h6 class="font-weight-normal">빅데이터는 어렵다고 막연하게 생각하지 않았나요?</h6>
                        <h6 class="font-weight-normal"> 이제 퀀트리포트로 시장 트랜드와 기업가치를 한눈에 확인해 보세요.</h6>
                        <h6 class="font-weight-normal">진정한 빅데이터를 통한 투자가 당신의 눈앞에 펼쳐집니다.</h6>
                        <h6 class="font-weight-normal">퀀트리포트는 다양한 경로의 인터넷 키워드를 수집하고 분석해 고객에게 쉽고 직관적인 그래픽으로 정리된 최상의 리포트를
                            제공합니다.</h6>
                        <h6 class="mt-4 font-weight-normal"> 창업을 앞두고 시장조사가 필요한가요?</h6>
                        <h6 class="font-weight-normal">개인투자를 고민하고 있나요?</h6>
                        <h6 class="mt-4 font-weight-normal">국내 유명 대형 포털과 커뮤니티, 뉴스, 기업공시의 모든 트랜드를 분석해 한눈에 수치로 확인 할 수
                            있습니다.</h6>
                        <h5 class="text-danger font-weight-bold">당신의 성공적인 투자 파트너 퀀트리포트와 함께하세요</h5>
                    </div>
                    <div class="text-center mt-5">
                        <btn class="btn btn-danger btn-lg js-scroll-trigger col-md-4">
                            <router-link to="/service" class="btn-danger">서비스 소개 보기</router-link>
                        </btn>
                    </div>
                </mq-layout>
                <mq-layout mq="tablet">
                    <h5 class="text-danger mt-5 font-weight-bold">Social Issue Tracking Service</h5>
                    <h5 class="text-dark mt-3 mb-3">국내 2,300여 상장기업의 핵심정보를 <br/>내 손안에!</h5><br/>
                    <p>빅데이터 이슈 분석리포트로 기업의 현재/미래 가치를 확인하세요</p>
                    투자의 핵심 지표가 되는 이슈를 가장 빠르고 간단하게 전달합니다
                    기업 이슈와 가치에 대한 분석, 이제 <h5 class="d-inline font-weight-bold text-dark">퀀트리포트</h5>를 만나보세요
                    <div class="mt-5">
                        <p class="mt-3 font-weight-normal"> BIG DATA – 데이터 마이닝이 중요한 시대입니다
                       빅데이터는 어렵다고 막연하게 생각하지 않았나요?
                        <p class="font-weight-normal"> 이제 퀀트리포트로 시장 트랜드와 기업가치를 한눈에 확인해 보세요.</p>
                        <p class="font-weight-normal">진정한 빅데이터를 통한 투자가 당신의 눈앞에 펼쳐집니다.</p>
                        <p class="font-weight-normal">퀀트리포트는 다양한 경로의 인터넷 키워드를 수집하고 분석해 고객에게 쉽고 직관적인 그래픽으로 정리된 최상의 리포트를
                            제공합니다.</p>
                        <p class="mt-4 font-weight-normal"> 창업을 앞두고 시장조사가 필요한가요?</p>
                        <p class="font-weight-normal">개인투자를 고민하고 있나요?</p>
                        <p class="mt-4 font-weight-normal">국내 유명 대형 포털과 커뮤니티, 뉴스, 기업공시의 모든 트랜드를 분석해 한눈에 수치로 확인 할 수
                            있습니다.</p>
                        <h5 class="text-danger font-weight-bold">당신의 성공적인 투자 파트너 <br/> 퀀트리포트와 함께하세요</h5>
                    </div>
                    <div class="text-center mt-5">
                        <button class="btn btn-danger btn-lg js-scroll-trigger col-md-4">
                            <router-link to="/service" class="btn-danger">서비스 소개 보기</router-link>
                        </button>
                    </div>
                </mq-layout>
            </div>
        </section>
    </div>
</template>
<script>
    import VueMq from 'vue-mq'
    import Vue from "vue";

    export default {
        components: {
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