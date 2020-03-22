<template>
    <div>
        <!-- About Section -->
        <section class="text-white mt-5" id="about">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="bg-danger text-center align-middle">
                        <h4 class="mt-1 text-white ml-3 mr-3">유료 서비스팩 이용 시 최신 정보 및 추이 그래프를 받아 보실 수 있습니다. <i class="fas fa-comment-dollar"></i></h4>
                    </div>
                    </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-6">
                        <h2 class="mt-0">상담예약</h2>
                        <hr class="divider my-4">
                        <p class="text-muted mb-5">유료서비스에 대해 궁금하신 분들은 상담 예약을 신청해주세요</p>
                        <input type="text" class="form-control" placeholder="이름을 입력하세요"
                               style="margin-bottom: 10px"/>
                        <input type="text" class="form-control" placeholder="전화번호를 숫자만 입력하세요"
                               style="margin-bottom: 10px"/>
                        <div class="row">
                            <div class="col-md-8">
                                <input type="text" class="form-control mt-2" placeholder="인증번호 입력"/>
                            </div>
                            <div class="col-md-4">
                                <button class="btn btn-dark col-md-12 mt-2">
                                    <router-link to="/notfound" class="btn-dark">인증번호 받기</router-link></button>
                            </div>
                        </div>
                        <div class="m-3">
                            <input type="checkbox" name="chk_info" value="agreePrivate">개인정보 제공 및 이용동의
                            <a class="js-scroll-trigger ml-3" href="#about">자세히 보기 ></a>
                        </div>
                        <button class="btn btn-danger btn-lg js-scroll-trigger mt-2 col-md-5">
                            <router-link to="/notfound" class="btn-danger">문의하기</router-link></button>
                    </div>
                    <div class="col-lg-6">
                        <mq-layout mq="laptop">
                        <img src="img/portfolio/quantimg/office.jpg" class="img-fluid" style="overflow: hidden; margin-top: 8%; opacity: 0.25">
                        <div class="card-img-overlay" style="margin-top: 10%">
                        <h2 class="mt-5 font-weight-bolder" style="color: #3B240B">하루 한잔의 커피값이면</h2>
                        <h4 class="mb-3" style="color: #61380B">국내 2,300여개의 기업정보를 한눈에!</h4>
                        <h2 class="mt-1 color-red font-weight-bold">1DAY – 3,950원</h2>
                        <p class="mb-">(1년 이용 시 할인가)</p>
                        <a class="btn btn-dark btn-lg js-scroll-trigger text-center mt-2">
                            <router-link to="/service/pay" class="btn-dark">유료 서비스 기능 소개</router-link></a>
                        </div>
                        </mq-layout>
                        <mq-layout mq="tablet">
                            <img src="img/portfolio/quantimg/office.jpg" class="img-fluid" style="overflow: hidden; margin-top: 8%; opacity: 0.25">
                            <div class="card-img-overlay" style="margin-top: 10%">
                                <h4 class="mt-2 font-weight-bolder" style="color: #3B240B">하루 한잔의 커피값이면</h4>
                                <h5 class="mb-2" style="color: #61380B">국내 2,300여개의 기업정보를 한눈에!</h5>
                                <h4 class="mt-1 color-red font-weight-bold">1DAY – 3,950원</h4>
                                <p class="mb-">(1년 이용 시 할인가)</p>
                                <a class="btn btn-dark btn-lg js-scroll-trigger text-center mt-2">
                                    <router-link to="/service/pay" class="btn-dark">유료 서비스 기능 소개</router-link></a>
                            </div>
                        </mq-layout>
                    </div>
                </div>
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
    .bg-color-red {
        background: #DF0101;
    }
    .color-red {
        color: #DF0101;
    }
</style>