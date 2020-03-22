<template>
    <section class="page-section">
        <div class="container text-center">
            <h5 class="mt-3 text-danger">QUANT REPORT</h5>
            <h2 class="font-weight-bold">유료 서비스 소개</h2>
            <hr class="divider my-4">
            <h6>주식 투자를 위해 수십권의 책을 사고 인터넷으로 공부를 했는데도 여전히 수익이 나지 않는다고요?</h6>
            <h6 class="mb-3 ">비싼 돈을 내고 애널리스트의 추천을 받았지만 주가는 여전히 마이너스라고요?</h6>
            <h4 class="mt-5 text-danger">당신은 지금까지 반쪽짜리 정보만 가지고 투자했습니다</h4>
            <p class="mt-4">
                주가에 영향을 주는 수많은 변수와 외부정보를 놓쳤던 당신에게
                이제 하루 커피 한잔의 값으로 주가변동의 핵심 이슈 정보를 받아보세요
            </p>
            <h4 class="text-danger font-weight-bold m-5" style="margin-bottom: 10%">당신의 성공 투자의 비결 퀀트리포트가 함께합니다</h4>
            <mq-layout mq="laptop">
                <img src="img/portfolio/service/payment_service_1,5x.png" class="img-fluid"/>
            </mq-layout>
            <mq-layout mq="tablet">
                <div class="col-md-8">
                    <img src="img/portfolio/service/payment_service_mobile.png" class="img-fluid"/>
                </div>
            </mq-layout>
            <div class="text-center mt-5">
                <button class="btn btn-danger btn-lg js-scroll-trigger col-md-4" name="goPaymentBtn">
                    <router-link to="/payment" class="btn-danger">유료서비스 이용하기</router-link>
                </button>
            </div>
        </div>
    </section>
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
                tablet: 900,
                laptop: 1250
            }
        });
</script>

<style scoped>

</style>