const REG_ID = /[a-zA-Z0-9]{4,}/;
const REG_PW = /[a-zA-Z0-9$&+,:;=?@#|'<>.^*()%!-]{8,}/;
const REG_EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const REG_IMAGE = /(jpeg|jpg|png)$/;
const REG_PH0 = /^010$/;
const REG_PH1 = /^\d{4}$/;
const REG_PH2 = /^\d{4}$/;
const REG_PHONE = /^\d{2,3}-\d{3,4}-\d{4}$/;
const REG_NOT_DIGITS = /[^0-9]/g;

const WARNING_ID = '4자 이상으로 영어, 숫자만 사용하거라.';
const WARNING_PW = '8자 이상으로 영어, 숫자, 특수문자만 사용하거라.';
const WARNING_PWRE = '위에서 입력한 패스워드와 똑같이 적거라.';
const WARNING_EMAIL = '이상한 이메일 적지 말거라.';
const WARNING_PHONE = '이상한 번호 적지 말거라.';

export {
  REG_ID,
  REG_PW,
  REG_EMAIL,
  REG_IMAGE,
  REG_PH0,
  REG_PH1,
  REG_PH2,
  REG_PHONE,
  REG_NOT_DIGITS,
  WARNING_ID,
  WARNING_PW,
  WARNING_PWRE,
  WARNING_EMAIL,
  WARNING_PHONE,
};
