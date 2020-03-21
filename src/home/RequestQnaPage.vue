<template>
    <section class="page-section m-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 text-center">
                    <h2 class="mt-0">상담예약</h2>
                    <hr class="divider my-4">
                    <h4 class="m-4">무엇이 궁금하세요?</h4>
                    <p class="text-muted mb-4">퀀트리포트에 대한 궁금증을 빠르게 해결해 드리겠습니다.<br>
                        성함과 전화번호를 남기시고 전화를 받으실 수 있는 시간대를 남겨주세요<br>
                        전문 상담사가 회원님의 문의사항을 빠르게 처리해드립니다</p>
                    <input type="text" class="form-control" placeholder="이름을 입력하세요"
                           style="margin-bottom: 10px"/>
                    <input type="text" class="form-control" placeholder="전화번호를 숫자만 입력하세요"
                           style="margin-bottom: 10px"/>
                    <div class="row">
                        <div class="col-md-8">
                            <input type="text" class="form-control mt-2" placeholder="인증번호 입력"/>
                        </div>
                        <div class="col-md-4">
                            <a class="btn btn-dark col-md-12 mt-2" href="#about">인증번호 받기</a>
                        </div>
                    </div>
                    <div class="m-3">
                        <input type="checkbox" name="chk_info" value="agreePrivate">개인정보 제공 및 이용동의
                        <a class="js-scroll-trigger ml-3" href="#about">자세히 보기 ></a>
                    </div>
                    <a class="btn btn-danger btn-lg js-scroll-trigger col-lg-12 mt-1" href="#about">문의하기</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "RequestQna"
    }
</script>

<style scoped>

</style>