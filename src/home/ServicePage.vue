<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <section class="page-section">
                <mq-layout mq="laptop">
                    <img src="/img/portfolio/service/service_pc.png" class="img-fluid"/>
                </mq-layout>
                <mq-layout mq="tablet">
                    <div class="col-md-8">
                        <img src="/img/portfolio/service/service_mobile_1,5x.png" class="img-fluid"/>
                    </div>
                </mq-layout>
                <div class="text-center mt-5 mr-5 ml-5">
                    <button class="btn btn-danger btn-lg js-scroll-trigger" name="goPaymentBtn">
                        <router-link to="/payment" class="btn-danger">유료서비스 신청하기</router-link>
                    </button>
                </div>
            </section>
        </div>
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
                tablet: 900,
                laptop: 1250
            }
        });
</script>

<style scoped>

</style>`
