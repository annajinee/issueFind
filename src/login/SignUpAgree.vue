<template>
    <!-- Contact Section -->
    <section class="page-section" id="contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 text-center">
                    <img class="mt-1" src="img/portfolio/quantimg/bi_width.png" style="width: 45%"/>
                    <hr class="divider my-4">
                    <input type="checkbox" name="chk_agree_all" v-model="chk_agree_all" @click="checkedAll()">&nbsp; <p
                        class="font-weight-bold d-inline text-danger">전체 동의</p>
                    <p class="mt-2"><u>이용약관, 개인정보 수집 및 이용, 프로모션 안내 문자수신(선택)에 모두 동의합니다</u></p>
                    <br/>
                    <input type="checkbox" name="chk_agree_service" class="mb-3" v-model="chk_agree_service">&nbsp; <p
                        class="font-weight-bold d-inline">퀀트리포트 서비스 이용약관 동의(필수)</p>
                    <div style="overflow:scroll; width:100%; height:250px;" class="bg-transparent border">

                        <div class=WordSection1>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
4.5pt;margin-left:48.0pt;text-align:left;text-indent:-18.0pt;line-height:15.0pt;
mso-pagination:widow-orphan;mso-outline-level:3;mso-list:l0 level1 lfo1;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
9.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'> </span></span></span><![endif]><b><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>제<span lang=EN-US> 1 </span>조<span lang=EN-US> (</span>총칙<span
                                    lang=EN-US>)</span></span></b></p>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(</span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>주<span lang=EN-US>)</span></span><span lang=EN-US
                                                             style='font-size:9.0pt'> </span><span style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>퀀트리포트 <span
                                    lang=EN-US>(</span>이하 “회사”<span lang=EN-US>)</span>의 이용약관은 다음과 같고<span
                                    lang=EN-US>, </span>회사는 퀀트리포트<span lang=EN-US>(QUANTREPORT)</span>라는 명칭의 웹 사이트<span
                                    lang=EN-US>(http://www.quantreport.co.kr), </span>모바일 사이트<span lang=EN-US>(http://m.quantreport.co.kr),
</span>동명의 어플리케이션을 운영하고 있습니다<span lang=EN-US>(</span>이하 회사를 통칭하여 “퀀트리포트”라 함<span
                                    lang=EN-US>). </span>퀀트리포트는 각종 기업이슈와 트렌드<span lang=EN-US>, </span>유가증권 및 기업분석 등의
콘텐츠를 제공하는 사이트로 해당 콘텐츠를 유<span lang=EN-US> / </span>무료로 제공하고 있습니다<span
                                        lang=EN-US>.<br>
</span>당사에서 제공하는 콘텐츠는 자사에서 개발한 시스템에 의해 웹상에서 자동으로 수집<span lang=EN-US>, </span>분석<span
                                        lang=EN-US>, </span>가공<span lang=EN-US>, </span>예측이 이뤄지며 이를 통해 이용자에게 제공되는 정보는 부정확성을
내포하고 있습니다<span lang=EN-US>. </span>해당 정보는 오로지 정보제공만을 목적으로 하며<span lang=EN-US>, </span>이를
근거로 유가증권 매매하는 과정에서 기대이익을 얻지못하거나 발생한 손해 등에 대한 최종 책임은 서비스 이용자 본인에게 있습니다<span
                                        lang=EN-US>.<br>
</span>본 이용약관은 퀀트리포트가 제공하는 서비스 및 정책에 따라 내용이 변경될 수 있으니<span lang=EN-US>, </span>본
페이지를 정기적으로 방문하여 추가되거나 혹은 수정된 내용을 확인하여 이용하여야 합니다<span lang=EN-US>.</span></span></p>

                            <ul type=disc>
                                <li class=MsoNormal style='color:#666666;mso-margin-top-alt:auto;margin-bottom:
     4.5pt;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:3;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 2 </span>조<span
                                        lang=EN-US> (</span>목적<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>이 약관은 회사가 제공하는 웹사이트<span lang=EN-US>, </span>모바일
사이트<span lang=EN-US>, </span>어플리케이션 관련 제반 서비스의 이용과 관련하여 회사와 회원과의 권리<span
                                        lang=EN-US>, </span>의무 및 책임사항<span
                                        lang=EN-US>, </span>기타 필요한 사항을 규정함을 목적으로 합니다<span
                                        lang=EN-US>. </span></span></p>

                            <ul type=disc>
                                <li class=MsoNormal style='color:#666666;mso-margin-top-alt:auto;margin-bottom:
     4.5pt;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:3;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 3 </span>조<span
                                        lang=EN-US> (</span>정의<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>이 약관에서 사용하는 용어는 다음과 같이 정의합니다<span
                                    lang=EN-US>.<br>
<br>
(1) </span>서비스<span lang=EN-US> : </span>“서비스<span lang=EN-US>&quot;</span>라 함은
구현되는 단말기<span lang=EN-US>(PC, TV, </span>휴대형단말기 등의 각종 유무선 장치를 포함<span
                                        lang=EN-US>)</span>와 상관없이 회원이 이용할 수 있는 퀀트리포트 및 퀀트리포트 관련 제반 서비스를 의미합니다<span
                                        lang=EN-US>.<br>
<br>
(2) </span>회원<span lang=EN-US> : &quot;</span>회원<span lang=EN-US>&quot;</span>이라
함은 회사의<span lang=EN-US> &quot;</span>서비스<span lang=EN-US>&quot;</span>에 접속하여 이 약관에
따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다<span lang=EN-US>.<br>
<br>
(3) </span>아이디<span lang=EN-US>(ID) : &quot;</span>아이디<span lang=EN-US>(ID)&quot;</span>라
함은<span lang=EN-US> &quot;</span>회원<span lang=EN-US>&quot;</span>의 식별과 서비스 이용을 위하여
회원이 정하고 회사가 승인하거나 회사가 승인하여 회원에게 부여하는 문자와 숫자<span lang=EN-US>, </span>특수문자 등의 조합을
의미합니다<span lang=EN-US>.<br>
<br>
(4) </span>비밀번호<span lang=EN-US> : &quot;</span>비밀번호<span lang=EN-US>&quot;</span>라
함은 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀보호를 위해 회원 자신이 정하여 회사가 승인하거나 “회사”가 생성하여 부여한 문자
또는 숫자<span lang=EN-US>, </span>특수문자 등의 조합을 의미합니다<span lang=EN-US>.<br>
<br>
(5) </span>이용계약<span lang=EN-US> : </span>“이용계약”이라 함은 이 약관을 포함하여 서비스 이용을 위하여 회사와
회원간에 체결하는 모든 계약을 의미합니다<span lang=EN-US>.<br>
<br>
(6) </span>운영자<span lang=EN-US> : </span>“운영자”라 함은 서비스의 전반적인 관리와 원활한 운영을 위하여 회사에서
선정한 사람을 의미합니다<span lang=EN-US>.<br>
<br>
(7) </span>유료서비스<span lang=EN-US> : </span>“유료 서비스”라 함은 회사가 제공하는 결제 방식을 통해 유료로 구매
후 사용할 수 있는 서비스를 의미합니다<span lang=EN-US>.<br>
<br>
(8) </span>게시물<span lang=EN-US> : &quot;</span>게시물<span lang=EN-US>&quot;</span>이라
함은 회원이 서비스를 이용함에 있어 서비스상에 게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글<span lang=EN-US>, </span>사진<span
                                        lang=EN-US>, </span>동영상 및 각종 파일과 링크 등을 의미합니다<span lang=EN-US>.<br>
<br>
(9) </span>해지<span lang=EN-US> : </span>회사 또는 회원이 이용계약을 해약하는 것을 의미합니다<span
                                        lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 4 </span>조<span
                                        lang=EN-US> (</span>약관의 게시와 개정<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1)</span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다<span
                                    lang=EN-US>.<br>
<br>
(2)</span>회사는<span lang=EN-US> &quot;</span>약관의 규제에 관한 법률<span lang=EN-US>&quot;,
&quot;</span>정보통신망 이용촉진 및 정보보호 등에 관한 법률<span lang=EN-US>(</span>이하<span
                                    lang=EN-US> &quot;</span>정보통신망법<span lang=EN-US>&quot;)&quot; </span>등 관련법을 위배하지
않는 범위에서 이 약관을 개정할 수 있습니다<span lang=EN-US>.<br>
<br>
(3)</span>회원은 정기적으로 사이트를 방문하여 약관의 변경사항을 확인하여야 합니다<span lang=EN-US>. </span>변경된 약관에
대한 정보를 알지 못해 발생하는 회원의 피해는 회사에서 책임지지 않습니다<span lang=EN-US>.<br>
<br>
(4)</span>회원은 변경된 약관에 동의하지 않으면 언제든지 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다<span
                                        lang=EN-US>. </span>회원이 변경된 약관의 효력발생일부터<span lang=EN-US> 30</span>일이내 의사표현을 하지 않고
서비스를 이용하는 경우에는 당해 회원은 약관의 변경사항에 동의한 것으로 간주됩니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 5 </span>조<span
                                        lang=EN-US> (</span>약관외 준칙<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>회사는 필요한 경우 서비스 내의 개별항목에 대하여 개별약관 또는 운영원칙<span
                                    lang=EN-US>(</span>이하<span lang=EN-US> '</span>서비스별 안내<span lang=EN-US>'</span>라
합니다<span lang=EN-US>)</span>를 정할 수 있으며<span lang=EN-US>, </span>이 약관과 서비스별 안내의 내용이
상충되는 경우에는 서비스별 안내의 내용을 우선하여 적용합니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 6 </span>조<span
                                        lang=EN-US> (</span>이용계약 체결<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>이용계약은 회원이 되고자 하는 자<span lang=EN-US>(</span>이하<span
                                    lang=EN-US> &quot;</span>가입신청자<span lang=EN-US>&quot;)</span>가 약관의 내용에 대하여 동의를 한
다음 회원가입신청을 하고 회사가 이러한 신청에 대하여 승낙함으로써 체결됩니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 7 </span>조<span
                                        lang=EN-US> (</span>이용신청<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원으로 가입하여 서비스를 이용하고자 하는 이용자는 회사의 웹사이트<span lang=EN-US>(http://www.quantreport.co.kr),
</span>모바일사이트<span lang=EN-US>(http://m.quantreport.co.kr), </span>어플리케이션의<span
                                    lang=EN-US> '</span>회원가입<span lang=EN-US>' </span>메뉴에서 약관 동의 절차를 거친 후 회사 소정의 가입신청양식에
요구하는 사항을 기재하고<span lang=EN-US> '</span>가입<span lang=EN-US>' </span>버튼을 누름으로써 이용을
신청합니다<span lang=EN-US>.<br>
<br>
(2) </span>온라인 가입신청양식에 기재하는 모든 회원정보는 실제와 일치하는 데이터인 것으로 간주됩니다<span lang=EN-US>. </span>고객이
가입신청양식에 실명이나 실제정보를 입력하지 않은 경우에는 법적인 보호를 받을 수 없으며<span lang=EN-US>, </span>회사는 당해
고객에 대하여 서비스의 이용을 제한할 수 있습니다<span lang=EN-US>.<br>
<br>
(3) </span>퀀트리포트는 건전한 서비스제공을 위하여 만<span lang=EN-US>19</span>세 미만 이용자의 회원가입을 허용하지
않습니다<span lang=EN-US>.<br>
<br>
(4) </span>회사는 가입신청고객이 관계 법령에서 규정하는 미성년자일 경우에 서비스별 안내에서 정하는 바에 따라 승낙을 보류할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(5) </span>회사는 서비스관련설비의 여유가 없거나<span lang=EN-US>, </span>기술상 또는 업무상 문제가 있는 경우에는
승낙을 유보할 수 있습니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 8 </span>조<span
                                        lang=EN-US> (</span>이용 신청의 승낙의 제한 및 보류<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>회사는 제<span lang=EN-US>7</span>조에 따른 회원 가입
절차 완료 이후라도 다음의 어느 하나에 따른 사유가 발견된 경우<span lang=EN-US>, </span>언제든지 이용 승낙을 철회할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(1) </span>가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우<span lang=EN-US>, </span>단 회사의
회원 재가입 승낙을 얻은 경우에는 예외로 합니다<span lang=EN-US>.<br>
<br>
(2) </span>실명이 아니거나 타인의 명의를 이용한 경우<span lang=EN-US><br>
<br>
(3) </span>허위의 정보를 기재하거나<span lang=EN-US>, </span>회사가 제시하는 내용을 기재하지 않은 경우<span
                                        lang=EN-US><br>
<br>
(4) </span>부정한 의도나 영리를 목적으로 본 서비스를 이용하고자 하는 것으로 판단되는 경우<span lang=EN-US><br>
<br>
(5) </span>가입신청자가 선량한 풍속 및 기타 사회질서를 저해할 목적으로 신청한 경우<span lang=EN-US><br>
<br>
(6) 19</span>세 미만의 가입신청자일 경우<span lang=EN-US><br>
<br>
(7) </span>회사의 설비의 여유가 없거나 기술상 또는 업무수행상 지장이 있는 경우<span lang=EN-US><br>
<br>
(8) </span>기타 규정한 제반 사항을 위반하며 신청한 경우<span lang=EN-US></span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 9 </span>조<span
                                        lang=EN-US> (</span>이용계약 사항의 변경<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원은 이용 신청 시 기재한 사항이 변경되었을 경우에는 이를 웹사이트<span lang=EN-US>, </span>모바일
사이트<span lang=EN-US>, </span>어플리케이션을 통해 수정하여야 합니다<span lang=EN-US>.<br>
<br>
(2) </span>회원이 제<span lang=EN-US>1</span>항의 수정을 하지 않음으로 인하여 발생되는 문제에 대한 책임은 회원 본인에게
있습니다<span lang=EN-US>.<br>
<br>
(3) </span>아이디<span lang=EN-US>(ID)</span>는 원칙적으로 변경이 불가하며 부득이한 사유로 인하여 변경 하고자 하는
경우에는 해당 아이디<span lang=EN-US>(ID)</span>를 해지하고 재가입하거나 회사에서 정한 “운영자”에게 문의해야 합니다<span
                                        lang=EN-US>.<br>
<br>
(4)</span>사이트 아이디<span lang=EN-US>(ID)</span>는 회원 본인의 동의 하에 회사 또는 자회사가 운영하는 사이트의
회원 아이디<span lang=EN-US>(ID)</span>와 연결될 수 있습니다<span lang=EN-US>.<br>
<br>
(5) </span>아이디<span lang=EN-US>(ID)</span>는 다음 각 호에 해당하는 경우에는 회원의 요청 또는 회사의 직권으로
변경 또는 이용을 정지할 수 있습니다<span lang=EN-US>.<br>
<br>
- </span>타인의 명의 또는 휴대폰 등으로 등록되어 사생활 침해가 우려되는 경우<span lang=EN-US><br>
- </span>타인에게 혐오감을 주거나 미풍양속에 어긋나는 경우<span lang=EN-US><br>
- </span>영리적인 목적으로 이용되거나 회사에 피해를 유발할 수 있다고 판단되는 경우<span lang=EN-US><br>
- </span>회사<span lang=EN-US>, </span>회사의 서비스 또는 서비스 운영자 등의 명칭과 동일하거나 오인 등의 우려가 있는
경우<span lang=EN-US><br>
- </span>기타 합리적인 사유가 있는 경우<span lang=EN-US><br>
<br>
(6) </span>아이디<span lang=EN-US>(ID) </span>및 비밀번호의 관리책임은 회원에게 있습니다<span
                                        lang=EN-US>. </span>이를 소홀이 관리하여 발생하는 서비스 이용상의 손해 또는 제<span lang=EN-US>3</span>자에
의한 부정이용 등에 대한 책임은 회원에게 있으며 회사는 그에 대한 책임을 지지 않습니다<span lang=EN-US>.<br>
<br>
(7) </span>기타회원 개인정보 관리 및 변경 등에 관한 사항은 서비스 별 안내에 정하는 바에 의합니다<span lang=EN-US></span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 10 </span>조<span
                                        lang=EN-US> (</span>회사의 의무<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사는 이 약관이 정하는 바에 따라 지속적이고 안정적인 서비스를 제공하는 데 최선을 다해야 합니다<span
                                    lang=EN-US>.<br>
<br>
(2) </span>회사는 계속적이고 안정적인 서비스의 제공을 위하여 설비에 장애가 생기거나 멸실된 때에는 부득이한 사유가 없는 한 지체 없이
이를 수리 또는 복구합니다<span lang=EN-US>.<br>
<br>
(3) </span>회사는 개인정보 보호를 위해 보안시스템을 구축하며 개인정보 보호정책을 공시하고 준수합니다<span lang=EN-US>.<br>
<br>
(4) </span>회사는 서비스이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다<span
                                        lang=EN-US>.<br>
<br>
(5) </span>회사는 이용계약의 체결<span lang=EN-US>, </span>변경 및 해지 등 회원과의 계약 관련 절차에 있어 회원에게
편의를 제공하도록 노력합니다<span lang=EN-US>.<br>
<br>
(6) </span>천재지변<span lang=EN-US>, </span>법령 또는 정부 정책의 변경<span lang=EN-US>, </span>감독당국
등 외부기관의 개입<span lang=EN-US>, </span>회사의 경영상<span lang=EN-US> / </span>재무상의 문제 및
기타 이와 유사한 사유로 인해 회사가 서비스의 전부 또는 일부를 유지할 수 없을 경우 회사는 최종 확정일로부터<span lang=EN-US>
2</span>개월 이내에 회원에게 이를 통보하며<span lang=EN-US>, </span>회사의 귀책사유라고 볼 수 없는 사유로 인하여 서비스
제공이 불가능한 경우<span lang=EN-US>, </span>회사는 그에 대한 책임을 부담하지 않습니다<span lang=EN-US>.<br>
<br>
(7) </span>회사의 서비스 중 제<span lang=EN-US>10</span>조 제<span lang=EN-US>6</span>항에 열거한
사유로 인해 일부 서비스의 유지가 불가한 상황이 발생하여도 회사는 서비스 제공이 가능한 범위 내에서 서비스를 이어갑니다<span
                                        lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 11 </span>조<span
                                        lang=EN-US> (</span>회원의 의무<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원은 회원가입 신청 또는 회원정보 변경 시 모든 사항을 사실에 근거하여 본인의 진정한 정보로 작성하여야
하며<span lang=EN-US>, </span>허위 또는 타인의 정보를 등록할 경우 이와 관련된 모든 권리를 주장할 수 없습니다<span
                                        lang=EN-US>.<br>
<br>
(2) </span>회원은 약관에서 규정하는 사항과 기타 회사가 정한 제반 규정<span lang=EN-US>, </span>공지사항 등 회사가
공지하는 사항 및 관계 법령을 준수하여야 하며<span lang=EN-US>, </span>기타 회사의 업무에 방해가 되는 행위<span
                                        lang=EN-US>, </span>회사의 명예를 손상시키는 행위<span lang=EN-US>, </span>타인에게 피해를 주는 행위를 해서는
안됩니다<span lang=EN-US>.<br>
<br>
(3) </span>회원은 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제 또는 유통시키거나 상업적으로 이용하는 행위를 하여서는 안됩니다<span
                                        lang=EN-US>.<br>
<br>
(4) </span>회원은 다량의 정보를 전송하거나 동일 또는 유사한 내용의 정보를 반복적으로 게시하여 서비스의 안정적인 운영을 방해하는 행위를
하여서는 안됩니다<span lang=EN-US>.<br>
<br>
(5) </span>회원은 회사의 사전 서면동의 없이 서비스를 이용하여 영리적인 목적의 영업행위를 하여서는 안됩니다<span
                                        lang=EN-US>. </span>이를 위반한 영업행위의 결과에 대하여 회사는 책임을 지지 않으며<span
                                        lang=EN-US>, </span>이와
같은 영업행위의 결과로 회사에 손해가 발생한 경우 회원은 회사에 대하여 손해배상의 의무를 집니다<span lang=EN-US>.<br>
<br>
(6) </span>회원은 회사의 명시적 동의가 없는 한 서비스의 이용권한<span lang=EN-US>, </span>기타 이용계약상의 지위를
타인에게 양도<span lang=EN-US>, </span>증여할 수 없으며 이를 담보로 제공할 수 없습니다<span lang=EN-US>.<br>
<br>
(7) </span>회원은 자신에게 부여된 아이디<span lang=EN-US>(ID) </span>및 비밀번호를 제<span
                                        lang=EN-US>3</span>자가 이용하게 하여서는 안됩니다<span lang=EN-US>. </span>아이디<span
                                        lang=EN-US>(ID) </span>및 비밀번호의 관리소홀<span lang=EN-US>, </span>부정사용에 의하여 발생하는 결과에
대한 책임은 회사의 고의 또는 과실이 없는 한 회원에게 있습니다<span lang=EN-US>. </span>회원은 자신의 아이디<span
                                        lang=EN-US>(ID) </span>또는 비밀번호가 부정하게 사용된 경우 반드시 회사에 그 사실을 통보하여야 합니다<span
                                        lang=EN-US>.<br>
<br>
(8)</span>회원은 다음 행위를 하여서는 안 됩니다<span lang=EN-US>.<br>
<br>
1. </span>서비스 신청 또는 변경 시 허위내용의 등록<span lang=EN-US><br>
2. </span>타인의 정보도용<span lang=EN-US><br>
3. </span>회사가 게시한 정보의 변경<span lang=EN-US><br>
4. </span>회사가 정한 정보 이외의 정보<span lang=EN-US>(</span>컴퓨터 프로그램 등<span lang=EN-US>)
</span>등의 송신 또는 게시<span lang=EN-US><br>
5. </span>회사와 기타 제<span lang=EN-US>3</span>자의 저작권 등 지적재산권에 대한 침해<span
                                        lang=EN-US><br>
6. </span>회사 및 기타 제<span lang=EN-US>3</span>자의 명예를 손상시키거나 업무를 방해하는 행위<span
                                        lang=EN-US><br>
7. </span>외설 또는 폭력적인 메시지<span lang=EN-US>, </span>화상<span lang=EN-US>, </span>음성<span
                                        lang=EN-US>, </span>기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위<span lang=EN-US><br>
8. </span>회사의 동의 없이 영리를 목적으로 서비스를 사용하는 행위<span lang=EN-US><br>
9. </span>기타 불법적이거나 부당한 행위<span lang=EN-US><br>
<br>
(9) </span>회원은 관계법<span lang=EN-US>, </span>이 약관의 규정<span lang=EN-US>, </span>이용안내
및 서비스와 관련하여 공지한 주의사항<span lang=EN-US>, </span>회사가 통지하는 사항 등을 준수하여야 하며<span
                                        lang=EN-US>, </span>기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다<span
                                        lang=EN-US>.</span></span>
                            </p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 12 </span>조<span
                                        lang=EN-US> (</span>서비스의 이용 범위<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원은 회사를 통한 가입 시 발급된 아이디<span lang=EN-US>(ID)</span>로 퀀트리포트
웹사이트<span lang=EN-US>(http://www.quantreport.co.kr), </span>모바일 사이트<span
                                        lang=EN-US>(http://m.quantreport.co.kr), </span>어플리케이션의 서비스를 이용할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(2) </span>회사는 무료회원과 유료회원을 구분하여 이용시간<span lang=EN-US>, </span>이용횟수<span
                                        lang=EN-US>, </span>서비스 메뉴 등을 세분화하여 이용에 차등을 둘 수 있습니다<span lang=EN-US>.<br>
<br>
1. </span>무료회원<span lang=EN-US> : </span>회사는 최근<span lang=EN-US> 1</span>개월 이내 로그인<span
                                        lang=EN-US>, </span>회원가입 기록이 있는 무료회원에게 제한적으로 <span lang=EN-US>1</span>주일 전 이슈관련
데이터를 제공합니다<span lang=EN-US>. </span>이는 별도의 발송 및 전달은 이루어 지지 않으며<span lang=EN-US>,
</span>사이트에서 회원이 직접 확인해야 합니다<span lang=EN-US>. </span>무료서비스 제공 범위는 회사의 사정에 따라 변경
될 수 있습니다<span lang=EN-US>.<br>
2. </span>유료회원<span lang=EN-US> : </span>결제한 기간 내 유료 서비스를 회사로부터 제공 받을 수 있습니다<span
                                        lang=EN-US>. </span>추가로 그 외 부가 콘텐츠 및 기타 서비스를 제공받을 수 있습니다<span
                                        lang=EN-US>. </span>다만
부가 콘텐츠 및 기타 서비스는 회사 사정에 따라 없거나 변경<span lang=EN-US>, </span>축소될 수 있습니다<span
                                        lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 13 </span>조<span
                                        lang=EN-US> (</span>서비스의 이용 시간<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴<span lang=EN-US>,
1</span>일<span lang=EN-US> 24</span>시간 운영을 원칙으로 합니다<span lang=EN-US>. </span>단<span
                                    lang=EN-US>, </span>회사는 시스템 정기점검<span lang=EN-US>, </span>증설 및 교체를 위해 회사가 정한 날이나
시간에 서비스를 일시 중단할 수 있으며<span lang=EN-US>, </span>예정되어 있는 작업으로 인한 서비스 일시 중단은 사이트를 통해
사전에 공지합니다<span lang=EN-US>.<br>
<br>
(2) </span>회사는 긴급한 시스템 점검<span lang=EN-US>, </span>증설 및 교체<span lang=EN-US>, </span>설비의
장애<span lang=EN-US>, </span>서비스 이용의 폭주<span lang=EN-US>, </span>국가비상사태<span
                                        lang=EN-US>, </span>정전 등 부득이한 사유가 발생한 경우 사전 예고 없이 일시적으로 서비스의 전부 또는 일부를 중단할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(3) </span>회사는 서비스 개편 등 서비스 운영 상 필요한 경우 회원에게 사전 예고 후 서비스의 전부 또는 일부의 제공을 중단할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(4) </span>위<span lang=EN-US> (1)~(3)</span>항의 사유로 인해 부득이하게 서비스를 일시 중단하는 경우<span
                                        lang=EN-US>, </span>별도의 보상이나 반환은 이루어지지 않습니다<span lang=EN-US>.</span></span>
                            </p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 14 </span>조<span
                                        lang=EN-US> (</span>서비스의 변경<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사는 상당한 이유가 있는 경우에 운영상<span lang=EN-US>, </span>기술상의 필요에 따라
제공하고 있는 전부 또는 일부<span lang=EN-US> &quot;</span>서비스<span lang=EN-US>&quot;</span>를
변경할 수 있습니다<span lang=EN-US>.<br>
<br>
(2) </span>서비스의 내용<span lang=EN-US>, </span>이용방법<span lang=EN-US>, </span>이용시간에
대하여 변경이 있는 경우에는 변경사유<span lang=EN-US>, </span>변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 해당 서비스
초기화면에 게시하여야 합니다<span lang=EN-US>.<br>
<br>
(3) </span>회사는 무료로 제공되는 서비스의 일부 또는 전부를 회사의 정책 및 운영의 필요상 수정<span lang=EN-US>, </span>중단<span
                                        lang=EN-US>, </span>변경할 수 있으며<span lang=EN-US>, </span>이에 대하여 관련법에 특별한 규정이 없는 한
회원에게 별도의 보상을 하지 않습니다<span lang=EN-US></span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 15 </span>조<span
                                        lang=EN-US> (</span>정보의 제공 및 광고의 게재<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나<span lang=EN-US>
SMS, e-mail </span>및 서신우편<span lang=EN-US>, </span>전화상담 등의 방법으로 회원에게 제공할 수 있습니다<span
                                    lang=EN-US>. </span>회원은 동 정보의 제공을 원하지 않는 경우 정보수신 거부를 할 수 있습니다<span lang=EN-US>.<br>
<br>
(2) </span>회사는 서비스의 운영과 관련하여 홈페이지<span lang=EN-US>, </span>서비스 화면<span
                                    lang=EN-US>, SMS, e-mail</span>등에 광고 등을 게재할 수 있습니다<span lang=EN-US>.<br>
<br>
(3) </span>회사는 업무제휴로 인해 회사의 제휴사에 회원의 정보를 제공할 수 있습니다<span lang=EN-US>. </span>이 경우
기본적인 정보만 제공됩니다<span lang=EN-US>.<br>
<br>
(4) </span>회원이 회사의 제휴사에서 제공하는 서비스를 이용할 경우<span lang=EN-US>, </span>회원은 제휴사에서 서비스
이용에 대하여 별도의 서비스 이용 절차를 필요로 하는 경우 서비스이용 신청을 하고 해당 서비스를 이용할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
1. </span>서비스제공<span lang=EN-US>(</span>각종 마케팅서비스를 포함합니다<span lang=EN-US>)</span>과
회원관리<span lang=EN-US><br>
2. </span>회사의 제휴 회사와의 업무제휴로 인한 회원의 정보 제공 및 활용<span lang=EN-US><br>
(5) </span>회사는 본 서비스상에 게재되어 있거나 본 서비스를 통한 광고주의 판촉활동에 회원이 참여하거나 교신 또는 거래의 결과로서 발생하는
모든 손실 또는 손해에 대해 책임을 지지 않습니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 16 </span>조<span
                                        lang=EN-US> (</span>게시물의 관리<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>게시물이라 함은 회원이 서비스를 이용하면서 게시한 글<span lang=EN-US>, </span>사진<span
                                    lang=EN-US>, </span>각종 파일과 링크 등을 말합니다<span lang=EN-US>.<br>
<br>
(2) </span>회원이 서비스에 등록하는 게시물 등으로 인하여 회사 또는 타인에게 손해나 기타 문제가 발생하는 경우 회원은 이에 대한 책임을
지게 되며<span lang=EN-US>, </span>회사는 특별한 사정이 없는 한 이에 대하여 책임을 지지 않습니다<span
                                        lang=EN-US>.<br>
<br>
(3) </span>회사는 다음 각 호에 해당하는 게시물 등을 회원의 사전 동의 없이 임시게시 중단<span lang=EN-US>, </span>수정<span
                                        lang=EN-US>, </span>삭제<span
                                        lang=EN-US>, </span>이동 또는 등록 거부 등의 관련 조치를 취할 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
1. </span>회사<span lang=EN-US>, </span>회원 또는 제<span lang=EN-US>3</span>자를 비속어나 욕설을
사용하며 인신공격을 하거나 명예를 손상시키는 게시물<span lang=EN-US><br>
2. </span>공공질서 및 미풍양속을 해치거나 기타 현행법규를 위반하는 게시물<span lang=EN-US><br>
3. </span>허위사실 및 유언비어 등을 담고있는 게시물<span lang=EN-US><br>
4. </span>소프트웨어<span lang=EN-US>, </span>만화<span lang=EN-US>, </span>영화<span
                                        lang=EN-US>, </span>동영상의 불법복제 유통 또는 해킹을 조장하는 게시물<span lang=EN-US><br>
5. </span>타인의 자료<span lang=EN-US>(</span>아이디<span lang=EN-US>(ID), </span>필명<span
                                        lang=EN-US>, </span>성명 등<span lang=EN-US>)</span>를 무단으로 도용하여 작성한 내용이거나<span
                                        lang=EN-US>, </span>타인이 입력한 정보를 무단으로 위조<span lang=EN-US>/</span>변조한 내용의 게시물<span
                                        lang=EN-US><br>
6. </span>상업적<span lang=EN-US>, </span>비상업적인 광고성 게시물<span lang=EN-US><br>
7. </span>저작권자의 동의를 구하지 않은 자료를 권유하거나 바이러스를 담고 있는 게시물<span lang=EN-US><br>
8. </span>비방을 목적으로 게시판 분위기를 저해하고 해당 게시판의 주제에 맞지 않는 게시물<span lang=EN-US><br>
9. </span>회사에서 제공하는 서비스와 관련 없는 내용의 게시물<span lang=EN-US><br>
(</span>음란물<span lang=EN-US>, </span>사행심리 조장성 내용<span lang=EN-US>, </span>상품<span
                                        lang=EN-US>, </span>외부사이트소개<span lang=EN-US>, </span>대출 등<span lang=EN-US>)<br>
10. </span>동일 또는 유사한 내용이 반복적으로 게시된 게시물<span lang=EN-US><br>
11. </span>개인이나 회사에 대해 비방하며 권리를 침해한 게시물<span lang=EN-US><br>
12. </span>타업체의 홍보성 글 또는 비교식 문구를 사용하여 게시판 분위기를 저해하며 피해를 주는 게시물<span lang=EN-US><br>
13. </span>범죄와 결부된다고 객관적으로 인정되는 내용의 게시물<span lang=EN-US><br>
14. </span>타인의 권리를 침해할 목적으로 정치적<span lang=EN-US>, </span>종교적<span lang=EN-US>, </span>사회적
분쟁을 야기하는 게시물<span lang=EN-US><br>
15. </span>데이터의 손상으로 내용을 알아볼 수 없는 게시물<span lang=EN-US><br>
16. </span>회사의 서비스에 대한 주관적인 의견으로 서비스 전체의 명예를 훼손시키는 게시물<span lang=EN-US><br>
17. </span>회사와 기타 제<span lang=EN-US>3</span>자의 지적재산권 등 권리를 침해하거나 업무 방해로 판단되는 게시물<span
                                        lang=EN-US><br>
18. </span>기타 관계법령에 위배된다고 판단되는 게시물<span lang=EN-US><br>
</span>※<span lang=EN-US> 3</span>회이상 게시판 이용원칙을 위반한 회원의 경우 운영자에 의해 게시물 등록 제한 조치
시행<span lang=EN-US><br>
(</span>고객센터 혹은 사이트를 통해 원칙준수에 대한 의사가 전달될 시 최초<span lang=EN-US> 1</span>회에 한해 시정조치
가능<span lang=EN-US>)<br>
(4) </span>회사는 게시물 등에 대하여 제<span lang=EN-US>3</span>자로부터 명예훼손<span lang=EN-US>,
</span>지적재산권 등의 권리 침해를 이유로 게시중단 요청을 받은 경우 이를 임시로 게시중단<span lang=EN-US>(</span>전송중단<span
                                        lang=EN-US>)</span>할 수 있으며<span lang=EN-US>, </span>게시중단 요청자와 게시물 등록자 간에 소송<span
                                        lang=EN-US>, </span>합의 기타 이에 준하는 관련기관의 결정 등이 이루어져 회사에 접수된 경우 이에 따릅니다<span
                                        lang=EN-US>.<br>
<br>
(5) </span>해당 게시물 등에 대해 임시게시 중단이 된 경우<span lang=EN-US>, </span>게시물을 등록한 회원은 재게시<span
                                        lang=EN-US>(</span>전송재개<span lang=EN-US>)</span>를 회사에 요청할 수 있으며<span
                                        lang=EN-US>, </span>게시 중단일로부터<span lang=EN-US> 3</span>개월 내에 재게시를 요청하지 아니한 경우 회사는
이를 삭제할 수 있습니다<span lang=EN-US>.<br>
<br>
</span><b>제<span lang=EN-US> 17 </span>조<span lang=EN-US> (</span>게시물의 저작권 및 보존<span
                                        lang=EN-US>)</span></b></span></p>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사가 작성한 게시물 또는 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다<span
                                    lang=EN-US>.<br>
<br>
(2) </span>회원이 서비스 내에 게시한 게시물의 저작권은 게시한 회원에게 귀속됩니다<span lang=EN-US>. </span>회사는
해당 게시물<span lang=EN-US>, </span>자료 등을 게재한 회원의 동의 없이 이를 영리적인 목적으로 사용하지 아니합니다<span
                                        lang=EN-US>. </span>단<span lang=EN-US>, </span>회사는 회원이 게재한 게시물<span lang=EN-US>,
</span>자료 등에 대하여 서비스<span lang=EN-US>(</span>회사와 업무 제휴관계에 있는 제<span lang=EN-US>3</span>자의
인터넷 사이트를 포함<span lang=EN-US>) </span>내에 게재할 수 있는 권리를 가집니다<span lang=EN-US>.<br>
<br>
(3) </span>회원이 이용계약 해지를 한 경우 본인 계정으로 기록된 게시물 일체는 회원으로부터 별도의 삭제 요청이 있기 전까지 저장 보관됩니다<span
                                        lang=EN-US>. </span>단<span lang=EN-US>, </span>타인에 의해 보관<span
                                        lang=EN-US>, </span>담기
등으로 게시 되거나 복제된 게시물과 타인의 게시물과 결합되어 제공되는 게시물<span lang=EN-US>, </span>공용 게시판에 등록된
게시물 등은 회원의 삭제 요청이 있더라도 관리 정책에 의해 보관 될 수 있습니다<span lang=EN-US>.<br>
<br>
(4) </span>회사가 보유하고 있는 게시물과 콘텐츠 등 모든 정보는 별도의 보존기간 없이 모두 저장 관리 하는 것을 원칙으로 합니다<span
                                        lang=EN-US>. </span>단<span lang=EN-US>, </span>서버 시스템의 원할한 운영상의 어려움이 있을 경우 회사의 판단
하에 다음 보존 기간 동안 보관할 수 있습니다<span lang=EN-US>.<br>
<br>
1. </span>회원 게시글<span lang=EN-US> : </span>최소<span lang=EN-US> 1</span>년간<span
                                        lang=EN-US><br>
2. </span>수익률 정보<span lang=EN-US> : </span>최소<span lang=EN-US> 1</span>년간<span
                                        lang=EN-US><br>
3. </span>공지글 및 텍스트 콘텐츠<span lang=EN-US> : </span>최소<span lang=EN-US> 1</span>년간<span
                                        lang=EN-US><br>
<br>
(5) </span>게시물에 대해 회사가 지급 내역이 있는 게시물의 저작권 및 지적 재산권은 회사에 귀속됩니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 18 </span>조<span
                                        lang=EN-US> (</span>계약해지<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원은 이용계약을 해지하고자 하는 경우에는 언제든지 탈퇴신청을 할 수 있습니다<span
                                    lang=EN-US>. </span>회사는 회원의 탈퇴신청을 빠른 시간 내에 처리하여야 합니다<span lang=EN-US>.<br>
<br>
(2) </span>회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 서비스 내의<span lang=EN-US> [</span>마이페이지<span
                                    lang=EN-US>] </span>메뉴를 이용해 회원탈퇴를 해야 합니다<span lang=EN-US>.<br>
<br>
(3) </span>회원이 이용계약을 해지하는 경우<span lang=EN-US>, </span>회사는 사이트 개인정보보호정책에 따라 회원 기록은
삭제하며<span lang=EN-US>, </span>복구 및 이용이 불가합니다<span lang=EN-US>. </span>또한 회사가 직권으로
이용계약을 해지하고자 하는 경우에는 말소 전에 회원에게 소명의 기회를 부여합니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 19 </span>조<span
                                        lang=EN-US> (</span>유료 서비스<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>유료 서비스의 종류<span lang=EN-US><br>
<br>
1) </span>정액제<span lang=EN-US> : </span>일정 기간을 기준으로 하여 회사가 미리 책정한 요금을 지불하고<span
                                    lang=EN-US>, </span>해당 요금에 해당하는 기간만큼 이용할 수 있는 서비스<span lang=EN-US><br>
2) </span>종량제<span lang=EN-US> : </span>사용량 등 일정 단위에 비례하여 회사가 책정한 요금을 지불하고<span
                                    lang=EN-US>, </span>해당 요금에 해당 하는 단위만큼 이용할 수 있는 서비스<span lang=EN-US><br>
<br>
(2) </span>회사에서 제공하는 유료서비스 이용회원은 특별한 사유가 없는 한 서비스 중도 해지 또는 중지를 할 수 없습니다<span
                                    lang=EN-US>. </span>만약<span lang=EN-US>, </span>부득이한 사정으로 인해 해지 또는 중지를 요청할 경우 회원은
명확한 근거서류를<span lang=EN-US> FAX </span>또는 우편으로 회사에 서면 제출해야 하며<span lang=EN-US>, </span>회사는
이를 검토 후 승낙 또는 자료가 명확하지 않을 경우 거부할 수 있습니다<span lang=EN-US>.<br>
<br>
(3) </span>회사는 평생 유료회원 유치일로부터<span lang=EN-US> 3</span>년이 지난 이후에<span
                                        lang=EN-US>, </span>정상적인 서비스 운영이 어려울 만큼 운영 비용<span lang=EN-US>(</span>시스템<span
                                        lang=EN-US>, </span>네트워크<span lang=EN-US>, </span>문자발송 비용 등<span
                                        lang=EN-US>)</span>이
상승할 경우<span lang=EN-US>, </span>해당 유료회원에게 제공되는 서비스의 내용을 변경하거나 회원들에게 추가비용을 요청할 수
있습니다<span lang=EN-US>.<br>
<br>
(5) </span>회사가 회원<span lang=EN-US>(</span>유료<span lang=EN-US>/</span>무료 등 모든 회원<span
                                        lang=EN-US>)</span>에게 제공하는 모든 정보는 해당 사이트<span lang=EN-US>, </span>통신사<span
                                        lang=EN-US>, </span>문자발송업체<span lang=EN-US>, </span>제휴업체<span
                                        lang=EN-US>, </span>기타
다양한 문제 등을 이유로 코스콤에서 제공하는 증권정보와 다를 수 있습니다<span lang=EN-US>. </span>이를 최종적으로 확인해야하는
책임은 회원에게 있으며 이로 인해 발생하는 피해에 대한 책임 또한 회원 본인에게 있습니다<span lang=EN-US>.<br
                                        style='mso-special-character:line-break'>
<![if !supportLineBreakNewLine]><br style='mso-special-character:line-break'>
<![endif]><b></b></span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제 <span lang=EN-US>20 </span>조<span
                                        lang=EN-US> (</span>캐시 정책<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-spacerun:yes'> </span>(1) </span><span style='font-size:9.0pt;
mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:
"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>상법 제<span
                                    lang=EN-US> 64</span>조 상사시효에 근거하여 캐시 서비스의 최종 이용일로부터 이용내역 없이<span
                                    lang=EN-US> 60</span>개월이
경과한 경우 잔여 캐시는 자동으로 소멸됩니다<span lang=EN-US>.<br>
<br>
(2) </span>직접 결제한 캐쉬의 경우 캐시 잔액에서<span lang=EN-US> 10%</span>의 수수료를 공제한 금액을 환불해 드리며<span
                                        lang=EN-US> (</span>단<span lang=EN-US>, 10,000</span>원 미만인 경우<span lang=EN-US>,
1,000</span>원의 환불 수수료를 공제합니다<span lang=EN-US>.) </span>캐시 잔액이<span lang=EN-US>
1,000</span>원 이하인 경우에는 환불이 불가능합니다<span lang=EN-US>. </span>또 마일리지를 전환하거나<span
                                        lang=EN-US>, </span>유료 서비스 결제<span lang=EN-US>, </span>이벤트 등을 통해 적립된 캐시는 현금화 및 환불이
불가능 합니다<span lang=EN-US>.<br>
<br>
(3) </span>캐시 사용시 직접 결제한 캐시부터 우선 차감되고<span lang=EN-US>, </span>이후 부족분을 유료 서비스 결제<span
                                        lang=EN-US>, </span>이벤트 등을 통해 적립된 캐시로 차감됩니다<span lang=EN-US>.<br>
<br>
(4) </span>부정하게 캐시를 취득한 경우 회원은 캐시를 사용할 수 없으며 회사는 이를 회수할 수 있습니다<span lang=EN-US>.<br>
<br>
(5) </span>캐시는 본인의 거래에 대해서만 사용할 수 있으며<span lang=EN-US>, </span>어떠한 경우라도 타인에게 매매
또는 양도하거나<span lang=EN-US>, </span>실질적으로 매매 또는 양도와 동일하게 볼 수 있는 행위를 하여서는 안됩니다<span
                                        lang=EN-US>.<br>
<br>
(6) </span>직접 결제한 캐시를 제외한 이벤트 등을 통해 적립된 캐시의 유효기간은 적립일로부터<span lang=EN-US> 24</span>개월이며<span
                                        lang=EN-US>, </span>사용하지 않은 캐시는<span lang=EN-US> 24</span>개월이 경과되면 자동 소멸됩니다<span
                                        lang=EN-US>. </span>개정 이용약관 이전 캐시 적립 회원은 이용약관 효력이 발생하고<span
                                        lang=EN-US> 24</span>개월이
지나면 공지 후 자동 소멸됩니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 21 </span>조<span
                                        lang=EN-US> (In-App </span>결제<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) In-App </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>결제는 어플리케이션에 기능 구현된<span lang=EN-US> In-App</span>아이템 구매 기능을
통한 유료결제를 의미합니다<span lang=EN-US>.<br>
<br>
(2) </span>회원은 단말기의 비밀번호 설정 기능<span lang=EN-US>, </span>오픈마켓에서 제공하는 비밀번호 설정 기능 등을
이용하여 제<span lang=EN-US>3</span>자의<span lang=EN-US> In-App</span>결제를 방지하여야 하며<span
                                        lang=EN-US>, </span>회사는 이를 위하여 방송통신위원회의 권고 및 “오픈마켓 모바일콘텐츠 결제 가이드라인”에 따라 오픈마켓이 제공하는
인증절차 등이 적용된<span lang=EN-US> In-App</span>결제를 위한 모듈<span lang=EN-US>, </span>라이브러리
등을 어플리케이션에 적용합니다<span lang=EN-US>.<br>
<br>
(3) </span>회원이 단말기 및 오픈마켓의 비밀번호 설정 기능 등을 이용하지 않거나 부주의하게 노출하여 발생하는 제<span
                                        lang=EN-US>3</span>자의<span lang=EN-US> In-App</span>결제에 대하여는 회사가 어떠한 책임도 부담하지 않습니다<span
                                        lang=EN-US>.<br>
<br>
(4) </span>회원이 이동통신사의 청소년 요금제에 가입한 경우<span lang=EN-US>, </span>해당 단말기에서의<span
                                        lang=EN-US> In-App</span>결제를 하면 그 내용은 법정대리인의 동의가 있는 것으로 간주합니다<span
                                        lang=EN-US>.<br>
<br>
(5) </span>회원은<span lang=EN-US> In-App</span>결제 대금을 성실히 납부하여야 할 책임이 있습니다<span
                                        lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 23 </span>조<span
                                        lang=EN-US> (</span>대금결제<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>유료 서비스와 콘텐츠에 대한 구매 대금은 원칙적으로 이동통신사와 어플리케이션 스토어<span
                                    lang=EN-US>, </span>온라인사이트에서 정하는 방법<span lang=EN-US>, </span>정책 등에 따라 부과되며 납부 방법
역시 정해진 방법에 따라 납부해야 합니다<span lang=EN-US>.<br>
<br>
(2) </span>회사의 정책 및 결제업체<span lang=EN-US> (</span>이동통신사<span lang=EN-US>, </span>오픈마켓
스토어<span lang=EN-US>, </span>어플리케이션 스토어 등<span lang=EN-US>)</span>의 정책<span
                                        lang=EN-US>, </span>정부의 방침 등에 따라 각 결제 수단별로 결제 한도가 부여될 수 있습니다<span
                                        lang=EN-US>.<br>
<br>
(3) </span>회사의 유료 서비스 중 일부는 자동연장결제 방식으로 결제가 가능합니다<span lang=EN-US>. </span>자동연장결제는
회원의 핸드폰 소액결제<span lang=EN-US>, </span>신용카드 결제<span lang=EN-US>, </span>계좌이체 결제 등의
방법으로 이용이 가능하며<span lang=EN-US>, </span>회원이 유료 서비스 결제 시 자동연장결제에 동의하면 서비스가 종료되는 시점에
자동으로 핸드폰 소액결제<span lang=EN-US>, </span>신용카드 결제<span lang=EN-US>, </span>계좌이체 결제가
이루어지는 방식입니다<span lang=EN-US>. </span>자동연장결제 방식은 결제 시 자세한 안내가 이루어지며<span
                                        lang=EN-US>, </span>결제 후 동의하지 않을 시 언제든지 해지가 가능한 방식으로 운영되고 있습니다<span
                                        lang=EN-US>.</span></span>
                            </p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 24 </span>조<span
                                        lang=EN-US> (</span>이용요금 등의 환불 및 기타<span lang=EN-US>)</span></span></b>
                                </li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>유료 서비스의 해지를 원하실 경우<span lang=EN-US>, </span>아래의<span
                                    lang=EN-US> [</span>환불 규정<span lang=EN-US>] </span>또는<span lang=EN-US> [</span>어플리케이션<span
                                    lang=EN-US> IN-APP</span>결제 환불 규정<span lang=EN-US>]</span>에 따라 전화 등의 방법으로 해지 신청하실
수 있습니다<span lang=EN-US>. </span>단<span lang=EN-US>, </span>정액제 서비스를 정상 금액에서 할인 받아
결제한 경우<span lang=EN-US>, </span>환불 시 정상금액<span lang=EN-US>(</span>할인전 금액<span
                                        lang=EN-US>-1</span>개월<span lang=EN-US>)</span>을 기준으로 이용 요금이 산정됩니다<span
                                        lang=EN-US>.<br>
<br>
[</span>환불규정<span lang=EN-US>]<br>
</span>환불액<span lang=EN-US> = </span>결제금액<span lang=EN-US> - (</span>사용 월 수<span
                                        lang=EN-US> x </span>월 정상금액<span lang=EN-US>)<br>
</span>서비스 환불 요청 시 사용하신 기간의 이용요금<span lang=EN-US>(</span>결제금액의 일할 계산<span
                                        lang=EN-US>)</span>을 제외한 잔여분을 본인 확인 절차를 득한 후 처리해 드립니다<span lang=EN-US>.<br>
<br>
[</span>어플리케이션<span lang=EN-US> IN-APP</span>결제 환불 규정<span lang=EN-US>]<br>
</span>환불액<span lang=EN-US> = </span>결제금액<span lang=EN-US> - (</span>사용 월 수<span
                                        lang=EN-US> x </span>월 정상금액<span lang=EN-US>)<br>
</span>서비스 환불 요청시 사용하신 기간의 이용요금<span lang=EN-US>(</span>결제금액의 일한 계산<span
                                        lang=EN-US>)</span>을 제외한 잔여분을 본인 확인 절차를 득한 후 처리해 드립니다<span lang=EN-US>.<br>
</span>어플리케이션<span lang=EN-US> IN-APP</span>결제 환불 요청시에는 결제한 구글 계정을 통해 거래<span
                                        lang=EN-US>ID </span>확인 필요합니다<span lang=EN-US>.<br>
<br>
(2) </span>환불 시 회원은 환불 받을 통장의 사본<span lang=EN-US>(</span>회원 가입자 명의와 일치<span
                                        lang=EN-US>)</span>을 회사 팩스로 보낸 후 고객센터<span lang=EN-US> (****-****)</span>로 연락해야
하며<span lang=EN-US>, </span>회사는<span lang=EN-US> [</span>환불 규정<span lang=EN-US>]</span>에
따라 본인확인 절차를 거친 후 환불을 진행합니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 25</span>조<span
                                        lang=EN-US> (</span>서비스 이용제한<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";
mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>회사는 회원이 서비스 이용내용에 있어서 다음 각 호에 해당하는 경우 서비스
이용 제한<span lang=EN-US>, </span>초기화<span lang=EN-US>, </span>이용계약 해지 및 기타 해당 조치를
할 수 있습니다<span lang=EN-US>.<br>
<br>
(1) </span>회원정보에 부정한 내용을 등록하거나 타인의 아이디<span lang=EN-US>(ID), </span>비밀번호<span
                                        lang=EN-US>, </span>기타 개인정보를 도용하는 행위 또는 아이디<span lang=EN-US>(ID)</span>를 타인과 거래하거나
제공하는 행위<span lang=EN-US><br>
<br>
(2) </span>공공질서 및 미풍양속에 위반되는 저속<span lang=EN-US>, </span>음란한 내용 또는 타인의 명예나 프라이버시를
침해할 수 있는 내용의 정보<span lang=EN-US>, </span>문장<span lang=EN-US>, </span>도형<span
                                        lang=EN-US>, </span>음향<span lang=EN-US>, </span>동영상을 전송<span
                                        lang=EN-US>, </span>게시<span
                                        lang=EN-US>, </span>전자우편 또는 기타의 방법으로 타인에게 유포하는 행위<span lang=EN-US><br>
<br>
(3) </span>다른 이용자를 희롱 또는 위협하거나<span lang=EN-US>, </span>특정 이용자에게 지속적으로 고통 또는 불편을
주는 행위<span lang=EN-US><br>
<br>
(4) </span>회사로부터 특별한 권리를 부여 받지 않고 회사의 클라이언트 프로그램을 변경하거나<span lang=EN-US>, </span>회사의
서버를 해킹하거나<span lang=EN-US>, </span>웹사이트 또는 게시된 정보의 일부분 또는 전체를 임의로 변경하는 행위<span
                                        lang=EN-US><br>
<br>
(5) </span>서비스를 통해 얻은 정보를 회사의 사전 승낙 없이 서비스 이용 외의 목적으로 복제하거나<span lang=EN-US>, </span>이를
출판 및 방송 등에 사용하거나<span lang=EN-US>, </span>제<span lang=EN-US> 3</span>자에게 제공하는 행위<span
                                        lang=EN-US><br>
<br>
(6) </span>회사의 운영진<span lang=EN-US>, </span>직원 또는 관계자를 사칭하거나 고의로 서비스를 방해하는 등 정상적인
서비스 운영에 방해가 될 경우<span lang=EN-US><br>
<br>
(7) </span>정보통신 윤리위원회 등 관련 공공기관의 시정 요구가 있는 경우<span lang=EN-US><br>
<br>
(8) </span>이 약관을 포함하여 회사가 정한 제반 규정을 위반하거나 범죄와 결부된다고 객관적으로 판단되는 등 제반 법령을 위반하는 행위<span
                                        lang=EN-US></span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 26 </span>조<span
                                        lang=EN-US> (</span>손해배상<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사와 이용자는 서비스 이용과 관련하여 고의 또는 과실로 상대방에게 손해를 끼친 경우에는 이를 배상하여야
합니다<span lang=EN-US>.<br>
<br>
(2) </span>회사는 무료로 제공하는 서비스의 이용과 관련하여 개인정보보호정책에서 정하는 내용에 위반하지 않는 한 어떠한 손해도 책임을 지지
않습니다<span lang=EN-US>.<br>
<br>
(3) </span>유료로 제공하는 서비스의 경우 천재지변<span lang=EN-US>, </span>감독당국 등 외부기관의 개입<span
                                        lang=EN-US>, </span>법령이나 정부 정책의 변경 및 이와 유사한 사유 등 회사의 귀책사유라고 볼 수 없는 사유로 인하여 서비스 제공이
불가능한 경우에 회사는 그에 대한 책임을 부담하지 않습니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 27 </span>조<span
                                        lang=EN-US> (</span>면책<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사는 천재지변<span lang=EN-US>, </span>전쟁<span lang=EN-US>, </span>기간통신사업자의
서비스 중지 및 법령이나 정부 정책의 변경 등 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이
면제됩니다<span lang=EN-US>.<br>
<br>
(2) </span>회사는 서비스용 설비의 보수<span lang=EN-US>, </span>교체<span lang=EN-US>, </span>정기점검<span
                                        lang=EN-US>, </span>공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다<span lang=EN-US>.<br>
<br>
(3) </span>회사는 회원의 컴퓨터 오류에 의해 손해가 발생한 경우<span lang=EN-US>, </span>또는 회원이 신상정보 및
전자우편 주소를 부실하게 기재하여 손해가 발생한 경우 책임을 지지 않습니다<span lang=EN-US>.<br>
<br>
(4) </span>회사는 회원이 서비스를 이용하여 기대하는 수익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않으며<span
                                        lang=EN-US>, </span>서비스를 이용하면서 얻은 자료로 인한 손해에 대하여 책임을 지지 않습니다<span
                                        lang=EN-US>.<br>
<br>
(5) </span>회사는 회원이 서비스에 게재한 각종 정보<span lang=EN-US>, </span>자료<span lang=EN-US>,
</span>사실의 신뢰도<span lang=EN-US>, </span>정확성 등 내용에 대하여 책임을 지지 않으며<span
                                        lang=EN-US>, </span>회원 상호간 및 회원과 제<span lang=EN-US> 3</span>자 상호 간에 서비스를 매개로 발생한
분쟁에 대해 개입할 의무가 없고<span lang=EN-US>, </span>이로 인한 손해를 배상할 책임도 없습니다<span
                                        lang=EN-US>.<br>
<br>
(6) </span>회사는 회원의 게시물을 등록 전에 사전심사 하거나 상시적으로 게시물의 내용을 확인 또는 검토하여야 할 의무가 없으며<span
                                        lang=EN-US>, </span>그 결과에 대한 책임지지 않습니다<span lang=EN-US>.<br>
<br>
(7) </span>회사는 회사의 사이트에 연결되거나 제휴한 업체<span lang=EN-US>(</span>타 온라인사이트<span
                                        lang=EN-US>)</span>에 포함되어 있는 내용의 유효성<span lang=EN-US>, </span>적합성<span
                                        lang=EN-US>, </span>법적 합리성<span lang=EN-US>, </span>저작권 준수 여부 등에 책임을 지지 않으며<span
                                        lang=EN-US>, </span>이로 인한 어떠한 손해에 대하여도 책임을 지지 않습니다<span lang=EN-US>.<br>
<br>
(8) </span>회사가 회원<span lang=EN-US>(</span>유료<span lang=EN-US>, </span>무료 등 모든 회원<span
                                        lang=EN-US>)</span>에게 제공하는 모든 분석조합<span lang=EN-US>(</span>무료조합 포함<span
                                        lang=EN-US>)</span>은 회원 본인에게 확인 의무가 있으며<span lang=EN-US>, </span>통신사 사정 등으로 분석조합이
정상적으로 제공되지 못할 경우에는 회원 본인이 사이트나 고객센터를 통해 직접 확인해야 하며<span lang=EN-US>, </span>이로 인해
발생하는 피해에 대한 책임은 회사가 지지 않습니다<span lang=EN-US>.</span></span></p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>제<span lang=EN-US> 28 </span>조<span
                                        lang=EN-US> (</span>분쟁의 해결<span lang=EN-US>)</span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>(1) </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 필요한 모든 노력을 하여야 합니다<span
                                    lang=EN-US>.<br>
<br>
(2) </span>회사의 정액 서비스 회원 및 기타 유료 서비스 이용 회원의 경우 당해 서비스와 관련하여서는 회사가 별도로 정한 약관 및 정책에
따릅니다<span lang=EN-US>.<br>
<br>
(3) </span>제<span lang=EN-US>1</span>항의 규정에도 불구하고 회사와 회원간에 소송이 제기될 경우<span
                                        lang=EN-US>, </span>소송은 회사의 본점 소재지를 관할하는 법원을 관할 법원으로 합니다<span
                                        lang=EN-US>.</span></span>
                            </p>

                            <ul style='margin-top:0cm' type=disc>
                                <li class=MsoNormal style='color:#666666;margin-top:22.5pt;mso-margin-bottom-alt:
     auto;text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;
     mso-outline-level:4;mso-list:l0 level1 lfo1;tab-stops:list 36.0pt;
     background:white;text-autospace:ideograph-numeric;
     word-break:keep-all'><b><span style='font-size:9.0pt;mso-ascii-font-family:
     "맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
     mso-bidi-font-family:굴림;mso-font-kerning:0pt'>부칙<span lang=EN-US></span></span></b></li>
                            </ul>

                            <p class=MsoNormal align=left style='mso-margin-top-alt:auto;margin-bottom:
11.25pt;margin-left:36.0pt;text-align:left;line-height:15.0pt;mso-pagination:
widow-orphan;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><span lang=EN-US style='font-size:9.0pt;mso-ascii-font-family:
"맑은 고딕";mso-fareast-font-family:"맑은 고딕";mso-hansi-font-family:"맑은 고딕";
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>1. </span><span
                                    style='font-size:9.0pt;mso-ascii-font-family:"맑은 고딕";mso-fareast-font-family:
"맑은 고딕";mso-hansi-font-family:"맑은 고딕";mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>이 약관은<span lang=EN-US> 2020</span>년 <span lang=EN-US>1</span>월
<span lang=EN-US>10</span>일부터 적용됩니다<span lang=EN-US>.<br>
2. </span>종전의 약관은 본 약관으로 대체합니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal><span lang=EN-US style='font-size:9.0pt;line-height:107%'>&nbsp;</span>
                            </p>

                        </div>

                    </div>
                    <br/>
                    <input type="checkbox" name="chk_agree_privacy" class="mb-3" v-model="chk_agree_privacy">&nbsp; <p
                        class="font-weight-bold d-inline">개인정보 수집 및 이용에 대한 안내(필수)</p>
                    <br/>
                    <div style="overflow:scroll; width:100%; height:250px;" class="bg-transparent border">
                        <div class="WordSection1 ml-3">
                            <p class=MsoNormal align=left style='margin-bottom:12.75pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;mso-outline-level:2;background:
white;text-autospace:ideograph-numeric;word-break:keep-all'><b><span
                                    lang=EN-US style='font-size:11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#333333;mso-font-kerning:0pt'>1. </span></b><b><span style='font-size:
11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#333333;
mso-font-kerning:0pt'>개인정보 수집 및 이용 목적<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l0 level1 lfo1;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>가<span
                                    lang=EN-US>. </span>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<span
                                    lang=EN-US></span></span></b>
                            </p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:15.0pt;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>컨텐츠 제공<span lang=EN-US>, </span>특정 맞춤 서비스 제공<span
                                    lang=EN-US>, </span>본인인증<span lang=EN-US>, </span>구매 및 요금 결제<span
                                    lang=EN-US>, </span>요금추심<span
                                    lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l0 level1 lfo1;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>나<span
                                    lang=EN-US>. </span>회원관리<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:15.0pt;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>회원제 서비스 이용<span lang=EN-US>, </span>개인식별<span lang=EN-US>,
</span>불량회원의 부정 이용방지와 비인가 사용방지<span lang=EN-US>, </span>가입의사 확인<span
                                    lang=EN-US>, </span>가입 및 가입횟수 제한<span lang=EN-US>, </span>분쟁 조정을 위한 기록보존<span
                                    lang=EN-US>, </span>불만처리 등 민원처리<span lang=EN-US>, </span>고지사항 전달<span
                                    lang=EN-US>, </span>회원탈퇴 의사의 확인<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-bottom:12.75pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;mso-outline-level:2;background:
white;text-autospace:ideograph-numeric;word-break:keep-all'><b><span
                                    lang=EN-US style='font-size:11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#333333;mso-font-kerning:0pt'>2. </span></b><b><span style='font-size:
11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#333333;
mso-font-kerning:0pt'>수집하는 개인정보 항목 및 수집 방법<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>가<span
                                    lang=EN-US>. </span>수집하는 개인정보의 항목<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:15.0pt;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>첫째<span lang=EN-US>, </span>회사는 회원가입<span lang=EN-US>, </span>원활한
고객상담<span lang=EN-US>, </span>각종 서비스의 제공을 위해 최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로
수집하고 있습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>일반 회원가입<span lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>:&nbsp;</span><span
                                                style='border:none windowtext 1.0pt;mso-border-alt:none windowtext 0cm;
  padding:0cm'>아이디<span lang=EN-US>, </span>비밀번호<span lang=EN-US>, </span>휴대폰번호<span
                                                lang=EN-US>, </span>닉네임<span lang=EN-US>(</span>필명<span
                                                lang=EN-US>), </span>생년월일<span
                                                lang=EN-US>, </span>성별</span><span lang=EN-US></span></span>
                                        </p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>휴대폰 번호 회원가입<span lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>휴대폰 번호<span
                                                lang=EN-US>, </span>이름<span lang=EN-US>, </span>닉네임<span
                                                lang=EN-US>(</span>필명<span
                                                lang=EN-US>), </span>비밀번호<span lang=EN-US>, </span>성별<span
                                                lang=EN-US></span></span>
                                        </p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담 및 휴대폰
  번호 아이디 생성<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>네이버<span lang=EN-US> ID </span>회원가입<span
                                    lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>이름<span
                                                lang=EN-US>, </span>생년월일<span lang=EN-US>, </span>성별<span
                                                lang=EN-US>, </span>휴대폰
  번호<span lang=EN-US>, CI/DI, </span>고유키 값<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:11.25pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l2 level1 lfo2;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>- </span><span style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>네이버 아이디로 가입 시 상기 항목 이외에 저장되는 항목은 없습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>다음<span lang=EN-US> ID </span>회원가입<span
                                    lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>이름<span
                                                lang=EN-US>, </span>생년월일<span lang=EN-US>, </span>성별<span
                                                lang=EN-US>, </span>휴대폰
  번호<span lang=EN-US>, CI/DI, </span>고유키 값<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:11.25pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l2 level1 lfo2;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>- </span><span style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>다음 아이디로 가입 시 상기 항목 이외에 저장되는 항목은 없습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>페이스북<span lang=EN-US> ID </span>회원가입<span
                                    lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>이름<span
                                                lang=EN-US>, </span>생년월일<span lang=EN-US>, </span>성별<span
                                                lang=EN-US>, </span>휴대폰
  번호<span lang=EN-US>, CI/DI, </span>고유키 값<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:11.25pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l2 level1 lfo2;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>- </span><span style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>페이스북 아이디로 가입 시 상기 항목 이외에 저장되는 항목은 없습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:22.5pt;margin-right:0cm;
margin-bottom:0cm;margin-left:0cm;margin-bottom:.0001pt;text-align:left;
text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:
4;mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt;
mso-bidi-font-weight:bold'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><b><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>&lt; SNS </span></b><b><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>계정<span lang=EN-US>(</span>네이버<span
                                    lang=EN-US>, </span>다음<span lang=EN-US>, </span>페이스북<span lang=EN-US>) </span>개인정보
변경<span lang=EN-US> &gt;</span></span></b></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:left;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>비밀번호<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>퀀트리포트</span></span><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'> 서비스 제공<span lang=EN-US>, </span>고객상담<span
                                                lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:8.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:11.25pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l2 level1 lfo2;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    lang=EN-US style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#666666;mso-font-kerning:0pt'>* </span><span style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>기타 네이버<span lang=EN-US>, </span>다음<span lang=EN-US>, </span>페이스북 계정으로 가입 시
상기 항목 이외에 저장되는 항목은 없습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>둘째<span lang=EN-US>,
</span>서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로 생성되어 수집될 수 있습니다<span lang=EN-US>.<br>
- IP Address, </span>쿠키<span lang=EN-US>, </span>방문 일시<span lang=EN-US>, </span>서비스
이용 기록<span lang=EN-US>, </span>불량 이용 기록<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>셋째<span lang=EN-US>,
</span>유료 서비스 이용 과정에서 아래와 같은 결제 정보들이 수집될 수 있습니다<span lang=EN-US>.<br>
- </span>신용카드 결제 시<span lang=EN-US>: </span>주문번호<span lang=EN-US>, </span>결제승인번호<span
                                    lang=EN-US><br>
- </span>휴대전화 결제 시<span lang=EN-US>: </span>주문번호<span lang=EN-US>, </span>결제승인번호<span
                                    lang=EN-US><br>
- </span>계좌이체 시<span lang=EN-US>: </span>결제승인번호<span lang=EN-US><br>
- ARS</span>결제 시<span lang=EN-US>: </span>주문번호<span lang=EN-US>, </span>결제승인번호<span
                                    lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l2 level1 lfo2;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>나<span
                                    lang=EN-US>. </span>개인정보 수집방법<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-bottom:0cm;margin-bottom:.0001pt;
text-align:left;line-height:15.0pt;mso-pagination:widow-orphan;background:white;
text-autospace:ideograph-numeric;word-break:keep-all'><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>회사는 다음과 같은 방법으로 개인정보를 수집합니다<span
                                    lang=EN-US>.<br>
- </span>홈페이지 회원가입<span lang=EN-US>, </span>유료서비스 결제 시<span lang=EN-US>, </span>팩스<span
                                    lang=EN-US>, </span>전화<span lang=EN-US>, </span>상담 게시판<span lang=EN-US>, </span>이벤트
응모<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-bottom:12.75pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;mso-outline-level:2;background:
white;text-autospace:ideograph-numeric;word-break:keep-all'><b><span
                                    lang=EN-US style='font-size:11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#333333;mso-font-kerning:0pt'>3. </span></b><b><span style='font-size:
11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#333333;
mso-font-kerning:0pt'>개인정보의 보유 및 이용기간<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span class=SpellE><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>퀀트리포트는</span></span><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'> 이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다<span
                                    lang=EN-US>. </span>단<span
                                    lang=EN-US>, </span>다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다<span
                                    lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>가<span
                                    lang=EN-US>. </span>회사 내부 방침에 의한 정보보유 사유<span lang=EN-US></span></span></b>
                            </p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>1) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>회원가입 정보<span
                                    lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>서비스 제공<span lang=EN-US>, </span>회원가입<span
                                    lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: </span>회원 탈퇴 시까지<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:4.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-outline-level:3;mso-list:
l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt;mso-bidi-font-weight:bold'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><b><span style='font-size:8.0pt;font-family:
"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>나<span
                                    lang=EN-US>. </span>관련법령에 의한 정보보유 사유<span lang=EN-US></span></span></b>
                            </p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:15.0pt;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>상법<span lang=EN-US>, </span>전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의
규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다<span lang=EN-US>. </span>이
경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>1) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>계약 또는 청약철회 등에 관한 기록<span
                                    lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>전자상거래 등에서의 소비자보호에 관한 법률<span
                                    lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 5</span>년<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>2) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>대금결제 및 재화 등의 공급에 관한
기록<span lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>전자상거래 등에서의 소비자보호에 관한 법률<span
                                        lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 5</span>년<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>3) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>전자금융 거래에 관한 기록<span
                                    lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>전자금융거래법<span lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 5</span>년<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>4) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>소비자의 불만 또는 분쟁처리에 관한
기록<span lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>전자상거래 등에서의 소비자보호에 관한 법률<span
                                        lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 3</span>년<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>5) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>본인확인에 관한 기록<span
                                    lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>정보통신망 이용촉진 및 정보보호 등에 관한 법률<span
                                    lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 6</span>개월<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin:0cm;margin-bottom:.0001pt;
text-align:left;text-indent:-18.0pt;line-height:15.0pt;mso-pagination:widow-orphan;
mso-list:l1 level1 lfo3;tab-stops:list 36.0pt;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><![if !supportLists]><span
                                    lang=EN-US style='mso-bidi-font-size:8.0pt;font-family:Symbol;mso-fareast-font-family:
Symbol;mso-bidi-font-family:Symbol;color:#666666;mso-font-kerning:0pt'><span
                                    style='mso-list:Ignore'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span></span><![endif]><span lang=EN-US style='font-size:8.0pt;
font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:
0pt'>6) </span><span style='font-size:8.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>웹사이트 방문기록<span
                                    lang=EN-US><br>
- </span>보존 이유<span lang=EN-US>: </span>통신비밀보호법<span lang=EN-US><br>
- </span>보존 기간<span lang=EN-US>: 3</span>개월<span lang=EN-US></span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:11.25pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l1 level1 lfo3;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
8.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    style='font-size:8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>단<span lang=EN-US>, 1</span>년간 이용 거래 기록이 없을
시<span lang=EN-US>(</span>휴면계정<span lang=EN-US>) </span>「정보통신망 이용촉진 및 정보보호 등에 관한
법률」 제<span lang=EN-US>29</span>조에 근거하여 이용자에게 사전에 통지하고 개인정보를 파기하거나 별도로 분리하여 저장<span
                                        lang=EN-US>, </span>관리합니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-bottom:12.75pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;mso-outline-level:2;background:
white;text-autospace:ideograph-numeric;word-break:keep-all'><b><span
                                    lang=EN-US style='font-size:11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:
굴림;color:#333333;mso-font-kerning:0pt'>4. </span></b><b><span style='font-size:
11.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#333333;
mso-font-kerning:0pt'>개인정보 수집 및 이용동의 거부에 대한 안내<span lang=EN-US></span></span></b></p>

                            <p class=MsoNormal align=left style='margin-bottom:11.25pt;text-align:left;
line-height:normal;mso-pagination:widow-orphan;background:white;text-autospace:
ideograph-numeric;word-break:keep-all'><span style='font-size:
8.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;color:#666666;
mso-font-kerning:0pt'>최소한의 정보 외 개인정보 수집에 동의하지 않아도 재화나 서비스 제공이 가능합니다<span
                                    lang=EN-US>.</span></span></p>

                            <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>
                        </div>
                    </div>
                    <br/>
                    <input type="checkbox" name="chk_agree_marketing" class="mb-3" v-model="chk_agree_marketing">&nbsp;
                    <p
                            class="font-weight-bold d-inline">마케팅 정보 수신동의(선택)</p>
                    <br/>
                    <div style="overflow:scroll; width:100%; height:250px;" class="bg-transparent border">

                        <div class="WordSection1 ml-3">

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:7.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l0 level1 lfo1;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
9.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    class=SpellE><span style='font-size:9.0pt;font-family:"돋움",sans-serif;
mso-bidi-font-family:굴림;color:#666666;mso-font-kerning:0pt'>퀀트리포트는</span></span><span
                                    style='font-size:9.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'> 전자적 전송매체<span lang=EN-US>(</span>이메일<span
                                    lang=EN-US>, SMS, TM, APP-PUSH)</span>를 통한 상품 및 이벤트 정보 전송을 위하여 아래와 같이 개인정보를 <span
                                    class=SpellE>수집·이용합니다</span><span lang=EN-US>. </span>상품 및 이벤트 정보 전송에 대한 내용을 자세히
읽어보신 후 동의 여부를 결정하여 주시길 바랍니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:7.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l0 level1 lfo1;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
9.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    style='font-size:9.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>▶개인정보 <span class=SpellE>수집·이용</span> 내역<span
                                    lang=EN-US></span></span></p>

                            <table class=MsoNormalTable border=1 cellspacing=0 cellpadding=0 width=447
                                   style='width:447.0pt;border-collapse:collapse;border:none;mso-border-top-alt:
 solid #222222 .75pt;mso-border-bottom-alt:solid #222222 .75pt;mso-yfti-tbllook:
 1184;mso-padding-alt:0cm 0cm 0cm 0cm'>
                                <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>항목<span lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #DDDDDD 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #DDDDDD .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>수집<span lang=EN-US>·</span>이용 목적<span
                                                lang=EN-US></span></span></b></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #DDDDDD 1.0pt;mso-border-bottom-alt:
  solid #DDDDDD .75pt;padding:7.5pt 0cm 7.5pt 0cm'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><b><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>보유기간<span lang=EN-US></span></span></b></p>
                                    </td>
                                </tr>
                                <tr style='mso-yfti-irow:1;mso-yfti-lastrow:yes'>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>필수<span lang=EN-US>: </span>휴대폰 번호<span
                                                lang=EN-US>, </span>성명<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border-top:none;border-left:none;border-bottom:solid #222222 1.0pt;
  border-right:solid #EEEEEE 1.0pt;mso-border-bottom-alt:solid #222222 .75pt;
  mso-border-right-alt:solid #EEEEEE .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>상품 및 이벤트 정보 전송<span lang=EN-US></span></span></p>
                                    </td>
                                    <td style='border:none;border-bottom:solid #222222 1.0pt;mso-border-bottom-alt:
  solid #222222 .75pt;padding:6.0pt 7.5pt 6.0pt 7.5pt'>
                                        <p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;
  text-align:center;line-height:normal;mso-pagination:widow-orphan;text-autospace:
  ideograph-numeric;word-break:keep-all'><span
                                                style='font-size:9.0pt;font-family:"굴림",sans-serif;mso-bidi-font-family:굴림;
  color:#666666;mso-font-kerning:0pt'>회원탈퇴 또는 수신거부 시까지<span lang=EN-US></span></span></p>
                                    </td>
                                </tr>
                            </table>

                            <p class=MsoNormal align=left style='margin-top:0cm;margin-right:0cm;
margin-bottom:7.5pt;margin-left:0cm;text-align:left;text-indent:-18.0pt;
line-height:15.0pt;mso-pagination:widow-orphan;mso-list:l0 level1 lfo1;
tab-stops:list 36.0pt;background:white;text-autospace:ideograph-numeric;
word-break:keep-all'><![if !supportLists]><span lang=EN-US style='mso-bidi-font-size:
9.0pt;font-family:Symbol;mso-fareast-font-family:Symbol;mso-bidi-font-family:
Symbol;color:#666666;mso-font-kerning:0pt'><span style='mso-list:Ignore'>·<span
                                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></span><![endif]><span
                                    style='font-size:9.0pt;font-family:"돋움",sans-serif;mso-bidi-font-family:굴림;
color:#666666;mso-font-kerning:0pt'>※ 위의 개인정보 <span class=SpellE>수집·이용에</span> 대한
동의를 거부할 권리가 있습니다<span lang=EN-US>. </span>그러나 동의를 거부할 경우 상품 및 이벤트 정보 전송에 제한을 받을
수 있습니다<span lang=EN-US>.</span></span></p>

                            <p class=MsoNormal><span lang=EN-US>&nbsp;</span></p>

                        </div>

                    </div>
                    <button class="btn btn-danger btn-lg js-scroll-trigger col-lg-12 mt-5"
                            style="margin-top: 20px" @click="goSignup()">회원가입
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    import {router} from "../_helpers";

    export default {
        data() {
            return {
                chk_agree_all: false,
                chk_agree_service: false,
                chk_agree_marketing: false,
                chk_agree_privacy: false
            }
        },
        methods: {
            goSignup() {
                const {chk_agree_all} = this;
                const {chk_agree_service} = this;
                const {chk_agree_marketing} = this;
                const {chk_agree_privacy} = this;

                console.log('chk_agree_service' + chk_agree_all);
                console.log('chk_agree_service' + chk_agree_service);
                console.log('chk_agree_marketing' + chk_agree_marketing);
                console.log('chk_agree_privacy' + chk_agree_privacy);

                if (!chk_agree_service) {
                    alert('퀀트리포트 서비스 이용약관 동의를 확인해주세요');
                } else if (!chk_agree_privacy) {
                    alert('개인정보 수집 및 이용에 대한 안내를 확인해주세요');
                } else {
                    router.push('/signup');
                }
            },
            checkedAll() {
                if (!this.chk_agree_all) {
                    this.chk_agree_service = true;
                    this.chk_agree_marketing = true;
                    this.chk_agree_privacy = true;
                } else {
                    this.chk_agree_service = false;
                    this.chk_agree_marketing = false;
                    this.chk_agree_privacy = false;
                }
            }
        }
    }
</script>

<style scoped>
    <!--
    /* Font Definitions */
    @font-face {
        font-family: "Courier New";
        panose-1: 2 7 3 9 2 2 5 2 4 4;
        mso-font-charset: 77;
        mso-generic-font-family: modern;
        mso-font-format: other;
        mso-font-pitch: fixed;
        mso-font-signature: 3 0 0 0 1 0;
    }

    @font-face {
        font-family: Wingdings;
        panose-1: 5 0 0 0 0 0 0 0 0 0;
        mso-font-charset: 2;
        mso-generic-font-family: auto;
        mso-font-pitch: variable;
        mso-font-signature: 0 268435456 0 0 -2147483648 0;
    }

    @font-face {
        font-family: "Cambria Math";
        panose-1: 2 4 5 3 5 4 6 3 2 4;
        mso-font-charset: 1;
        mso-generic-font-family: roman;
        mso-font-format: other;
        mso-font-pitch: variable;
        mso-font-signature: 0 0 0 0 0 0;
    }

    @font-face {
        font-family: "맑은 고딕";
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1879048145 701988091 18 0 524289 0;
    }

    @font-face {
        font-family: "\@맑은 고딕";
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1879048145 701988091 18 0 524289 0;
    }

    @font-face {
        font-family: 굴림;
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1342176593 1775729915 48 0 524447 0;
    }

    @font-face {
        font-family: "\@굴림";
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1342176593 1775729915 48 0 524447 0;
    }

    @font-face {
        font-family: 돋움;
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1342176593 1775729915 48 0 524447 0;
    }

    @font-face {
        font-family: "\@돋움";
        mso-font-charset: 129;
        mso-generic-font-family: swiss;
        mso-font-pitch: variable;
        mso-font-signature: -1342176593 1775729915 48 0 524447 0;
    }

    /* Style Definitions */
    p.MsoNormal, li.MsoNormal, div.MsoNormal {
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-parent: "";
        margin-top: 0cm;
        margin-right: 0cm;
        margin-bottom: 8.0pt;
        margin-left: 0cm;
        text-align: justify;
        text-justify: inter-ideograph;
        line-height: 107%;
        mso-pagination: none;
        text-autospace: none;
        font-size: 10.0pt;
        mso-bidi-font-size: 11.0pt;
        font-family: "맑은 고딕", sans-serif;
        mso-ascii-font-family: "맑은 고딕";
        mso-ascii-theme-font: minor-latin;
        mso-fareast-font-family: "맑은 고딕";
        mso-fareast-theme-font: minor-fareast;
        mso-hansi-font-family: "맑은 고딕";
        mso-hansi-theme-font: minor-latin;
        mso-bidi-font-family: "Times New Roman";
        mso-bidi-theme-font: minor-bidi;
        mso-font-kerning: 1.0pt;
    }

    h2 {
        mso-style-priority: 9;
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-link: "제목 2 문자";
        mso-margin-top-alt: auto;
        margin-right: 0cm;
        mso-margin-bottom-alt: auto;
        margin-left: 0cm;
        mso-pagination: widow-orphan;
        mso-outline-level: 2;
        font-size: 18.0pt;
        font-family: "굴림", sans-serif;
        mso-bidi-font-family: 굴림;
        font-weight: bold;
    }

    h3 {
        mso-style-priority: 9;
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-link: "제목 3 문자";
        mso-margin-top-alt: auto;
        margin-right: 0cm;
        mso-margin-bottom-alt: auto;
        margin-left: 0cm;
        mso-pagination: widow-orphan;
        mso-outline-level: 3;
        font-size: 13.5pt;
        font-family: "굴림", sans-serif;
        mso-bidi-font-family: 굴림;
        font-weight: bold;
    }

    h4 {
        mso-style-priority: 9;
        mso-style-unhide: no;
        mso-style-qformat: yes;
        mso-style-link: "제목 4 문자";
        mso-margin-top-alt: auto;
        margin-right: 0cm;
        mso-margin-bottom-alt: auto;
        margin-left: 0cm;
        mso-pagination: widow-orphan;
        mso-outline-level: 4;
        font-size: 12.0pt;
        font-family: "굴림", sans-serif;
        mso-bidi-font-family: 굴림;
        font-weight: bold;
    }

    p {
        mso-style-noshow: yes;
        mso-style-priority: 99;
        mso-margin-top-alt: auto;
        margin-right: 0cm;
        mso-margin-bottom-alt: auto;
        margin-left: 0cm;
        mso-pagination: widow-orphan;
        font-size: 12.0pt;
        font-family: "굴림", sans-serif;
        mso-bidi-font-family: 굴림;
    }

    ol {
        margin-bottom: 0cm;
    }

    ul {
        margin-bottom: 0cm;
    }
</style>