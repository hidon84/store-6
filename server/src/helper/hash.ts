import bcrypt from 'bcrypt';

export const generateHash = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (hashedPw: string, password: string) => {
  return password && bcrypt.compareSync(password, hashedPw);
};
