import * as dotenv from 'dotenv';

dotenv.config();

export const config = {
  serverPort: process.env.PORT ? Number(process.env.PORT) : 7777,
  databaseUrl: process.env.URL,
  JWTAcSecretKey: process.env.JWT_AC_SECRET_KEY,
  JWTRfSecretKey: process.env.JWT_RF_SECRET_KEY,
  JWTResetPasswordExpires: process.env.JWT_RESET_PASSWORD_EXPIRES,
  JWTAcExpires: process.env.JWT_AC_EXPIRES,
  JWTRfExpires: process.env.JWT_RF_EXPIRES,
  fileSize: process.env.FILE_SIZE ? Number(process.env.FILE_SIZE) : 100, // mg
  fileServerUrl: process.env.FILE_SERVER_URL,
  chatCreateServerUrl: process.env.CHAT_CREAT_URL,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
