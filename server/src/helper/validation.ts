/* eslint-disable no-useless-escape */

const REG_ID = /[a-zA-Z0-9]{4,}/;
const REG_PW =
  /^(?=.*[A-Z])(?=.*[a-z])([^\s]){10,}|(?=.*[A-Z])(?=.*[0-9])([^\s]){10,}|(?=.*[A-Z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[a-z])(?=.*[0-9])([^\s]){10,}|(?=.*[a-z])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}|(?=.*[0-9])(?=.*[<>{}|;:.,~!?@#$%^=&*\”\\/])([^\s]){10,}$/;
const REG_EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const REG_IMAGE = /(jpeg|jpg|png)$/i;
const REG_PHONE = /^\d{2,3}-\d{3,4}-\d{4}$/;

export const idValidator = (id: string) => REG_ID.test(id);
export const pwValidator = (pw: string) => REG_PW.test(pw);
export const imageValidator = (filename: string) => REG_IMAGE.test(filename);
export const emailValidator = (email: string) => REG_EMAIL.test(email);
export const phoneValidator = (phone: string) => REG_PHONE.test(phone);
