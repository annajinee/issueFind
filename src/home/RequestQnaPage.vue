<template>
    <section class="page-section m-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9 text-center">
                    <mq-layout mq="laptop">
                        <h2 class="mt-0">상담예약</h2>
                        <hr class="divider my-4">
                        <h5 class="m-4">무엇이 궁금하세요?</h5>
                        <p class="text-muted mb-4">퀀트리포트에 대한 궁금증을 빠르게 해결해 드리겠습니다.<br>
                            성함과 전화번호를 남기시고 전화를 받으실 수 있는 시간대를 남겨주세요<br>
                            전문 상담사가 회원님의 문의사항을 빠르게 처리해드립니다</p>
                    </mq-layout>
                    <mq-layout mq="tablet">
                        <h3 class="mt-0">상담예약</h3>
                        <hr class="divider my-4">
                        <h5 class="m-4">무엇이 궁금하세요?</h5>
                            <p class="text-muted mb-4 small">퀀트리포트에 대한 궁금증을 빠르게 해결해 드리겠습니다.<br>
                                성함과 전화번호를 남기시고 전화를 받으실 수 있는 시간대를 남겨주세요<br>
                                전문 상담사가 회원님의 문의사항을 빠르게 처리해드립니다</p>
                    </mq-layout>
                    <input type="text" class="form-control" placeholder="이름을 입력하세요"
                           style="margin-bottom: 10px"/>
                    <input type="text" class="form-control" placeholder="전화번호를 숫자만 입력하세요"
                           style="margin-bottom: 10px"/>
                    <div class="row">
                        <div class="col-md-8">
                            <input type="text" class="form-control mt-2" placeholder="인증번호 입력"/>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-dark col-md-12 mt-2"><router-link to="/notfound" class="btn-dark">인증번호 받기</router-link></button>
                        </div>
                    </div>
                    <div class="m-3">
                        <mq-layout mq="laptop">
                            <input type="checkbox" name="chk_info" value="agreePrivate">&nbsp;개인정보 제공 및 이용동의
                            <a class="js-scroll-trigger ml-2" href="#about">자세히 보기 ></a>
                        </mq-layout>
                        <mq-layout mq="tablet">
                            <div class="small">
                                <input type="checkbox" name="chk_info" value="agreePrivate">&nbsp;개인정보 제공 및 이용동의
                                <a class="js-scroll-trigger ml-2" href="#about">자세히 보기 ></a>
                            </div>
                        </mq-layout>
                    </div>
                    <button class="btn btn-danger btn-lg js-scroll-trigger col-lg-12 mt-1">
                        <router-link to="/notfound" class="btn-danger">문의하기</router-link></button>
                </div>
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
                tablet: 500,
                laptop: 1250
            }
        });
</script>

<style scoped>

</style>