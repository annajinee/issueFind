<template>
    <div>
        <!-- Contact Section -->
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7 text-center">
                        <h2 class="mt-0">회원가입</h2>
                        <hr class="divider my-4">
                        <p class="text-muted mb-5">유료서비스에 대해 궁금하신 분들은 상담 예약을 신청해주세요</p>
                        <div class="row  mt-3">
                            <div class="col-md-9">
                                <input type="text" class="form-control" v-model="username" name="username"
                                       placeholder="아이디를 입력하세요">
                            </div>
                            <div class="col-md-3">
                                <a class="btn btn-dark col-md-12" href="#about">아이디 중복확인</a>
                            </div>
                        </div>
                        <input type="password" class="form-control mt-3" v-model="password" name="password"
                               placeholder="비밀번호를 입력하세요"/>
                        <div class="row mt-3">
                            <div class="col-md-9">
                                <input type="password" class="form-control" v-model="passwordRe" name="passwordRe"
                                       placeholder="비밀번호를 한번 더 입력하세요">
                            </div>
                            <div class="col-md-3">
                                <a class="btn btn-dark col-md-12" style="color: white" @click="checkPassword()">비밀번호 확인</a>
                            </div>
                        </div>

                        <input type="text" class="form-control mt-3" v-model="email" name="email"
                               placeholder="이름"/>

                        <input disabled type="number" class="form-control mt-3" placeholder="생년월일"/>
                        <p class="text-muted text-left">Ex) 1982년 3월 1일 생의 경우 : ‘19820301’ 입력</p>
                        <input disabled type="text" class="form-control mt-3" placeholder="성별"/>
                        <input type="number" class="form-control mt-3" placeholder="전화번호를 숫자만 입력하세요"/>
                        <div class="row mt-3">
                            <div class="col-md-9">
                                <input type="text" class="form-control" placeholder="인증번호 입력"/>
                            </div>
                            <div class="col-md-3">
                                <a class="btn btn-dark col-md-12" href="#about">인증번호 받기</a>
                            </div>
                        </div>
                        <button class="btn btn-danger btn-lg js-scroll-trigger col-lg-12 mt-5"
                                style="margin-top: 20px" @click="reqSignup()">가입하기
                        </button>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {userService} from '../_services/user.service';
    import {router} from "../_helpers";

    export default {
        name: "SignUp",
        data() {
            return {
                username: '',
                password: '',
                passwordRe: '',
                email: '',
                passwordCheck:false
            }
        },
        methods: {
            reqSignup() {
                const {username} = this;
                const {password} = this;
                const {email} = this;

                if (username === '') {
                    alert('아이디를 입력해주세요');
                } else if (password === '') {
                    alert('비밀번호를 입력해주세요');
                } else if (!this.passwordCheck) {
                    alert('비밀번호 확인을 해주세요');
                } else if (email === '') {
                    alert('이름을 입력해주세요');
                } else {
                userService.signup(username, password, email).then(response => {
                    if (response === 200) {
                        alert('회원가입 완료 하였습니다');
                        router.push('/login');
                    } else {
                        alert('일시적 오류가 발생했습니다. 관리자에게 문의 해주세요');
                    }
                });
            }
            },
            checkPassword(){
                const {password} = this;
                const {passwordRe} = this;

                if(password === passwordRe){
                    alert('비밀번호가 일치합니다.');
                    this.passwordCheck=true;
                } else {
                    alert('비밀번호가 다릅니다. 다시 입력 해주세요');
                    this.passwordCheck=false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
