const REG_ID = /[a-zA-Z0-9]{4,}/;
const REG_PW = /[a-zA-Z0-9$&+,:;=?@#|'<>.^*()%!-]{8,}/;

const WARNING_ID = '4자 이상으로 영어, 숫자만 사용하거라.';
const WARNING_PW = '8자 이상으로 영어, 숫자, 특수문자만 사용하거라.';

export { REG_ID, REG_PW, WARNING_ID, WARNING_PW };
