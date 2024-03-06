import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  serverPort: process.env.PORT ? Number(process.env.PORT) : 7777,
  JWTAcSecretKey: process.env.JWT_AC_SECRET_KEY || "ok",
  JWTRfSecretKey: process.env.JWT_RF_SECRET_KEY || "ok1",
  JWTResetPasswordExpires: process.env.JWT_RESET_PASSWORD_EXPIRES || "3m",
  JWTAcExpires: process.env.JWT_AC_EXPIRES || "30d",
  JWTRfExpires: process.env.JWT_RF_EXPIRES || "360d",
  fileSize: process.env.FILE_SIZE ? Number(process.env.FILE_SIZE) : 100, // mg
};