import jwt from "jsonwebtoken";

type DecodeType = {
  _id: string;
  role: number;
  exp: number;
  iat: number;
};

export const DecodeJWT = (token: string): DecodeType => {
  const decodedToken = jwt.decode(token) as DecodeType;

  return decodedToken;
};
