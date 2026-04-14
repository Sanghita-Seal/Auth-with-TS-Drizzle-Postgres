import JWT from "jsonwebtoken";

// Either u can make or delete token

export interface UserTokenPayload {
  id: string;
}
const JWT_SECRET = "myjwtsecret";

export function createUserToken(payload: UserTokenPayload) {
  const token = JWT.sign(payload, JWT_SECRET);
  return token;
}
export function verifyUserToken(token: string) {
    //as token can also expire , place it in try catch
  try {
    const payload = JWT.verify(token, JWT_SECRET) as UserTokenPayload;
    return payload;
  } catch (error) {
    return null
  }
}
