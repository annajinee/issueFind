<!--
메인 페이지 - 슬라이드 이미지
-->
<template>
    <div id="demo" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner"> <!-- 슬라이드 쇼 -->

            <div class="carousel-item active"> <!--가로-->
                <mq-layout mq="laptop">
                    <img src="img/portfolio/slidebanner/Banner1_last_1,5x.png" class="d-block w-100" alt="First slide">
                </mq-layout>
                <mq-layout mq="tablet">
                    <img src="img/mobile/slidebanner/m-banner1.png" class="d-block w-100" alt="First slide">
                </mq-layout>
            </div>

            <div class="carousel-item">
                <mq-layout mq="laptop">
                    <img src="img/portfolio/slidebanner/Banner2_1,5x.png" class="d-block w-100"
                         alt="Second slide">
                </mq-layout>
                <mq-layout mq="tablet">
                    <img src="img/mobile/slidebanner/m-banner2.png" class="d-block w-100" alt="Second slide">
                </mq-layout>
            </div>


            <div class="carousel-item">
                    <mq-layout mq="laptop">
                        <img src="img/portfolio/slidebanner/Banner3_last_1,5x.png" class="d-block w-100"
                             alt="Second slide">
                    </mq-layout>
                    <mq-layout mq="tablet">
                        <img src="img/mobile/slidebanner/m-banner3.png" class="d-block w-100" alt="Second slide">
                    </mq-layout>
            </div>

            <div class="carousel-item">
                    <mq-layout mq="laptop">
                        <img src="img/portfolio/slidebanner/Banner4_last_1,5x.png" class="d-block w-100"
                             alt="Third slide">
                    </mq-layout>
                    <mq-layout mq="tablet">
                        <img src="img/mobile/slidebanner/m-banner4.png" class="d-block w-100" alt="Third slide">
                    </mq-layout>
            </div> <!-- / 슬라이드 쇼 끝 -->

            <!-- 왼쪽 오른쪽 화살표 버튼 -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev"> <span
                    class="carousel-control-prev-icon" aria-hidden="true"></span> <!-- <span>Previous</span> -->
            </a> <a class="carousel-control-next" href="#demo" data-slide="next"> <span
                    class="carousel-control-next-icon" aria-hidden="true"></span> <!-- <span>Next</span> --> </a>
            <!-- / 화살표 버튼 끝 -->

            <!-- 인디케이터 -->
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li> <!--0번부터시작-->
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul> <!-- 인디케이터 끝 -->

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
                tablet: 700,
                laptop: 1250
            }
        }
    );
</script>

<style>
</style>