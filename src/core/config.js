require("dotenv").config();

const server = {
  isDev: false,
  port: process.env.HTTP_PORT,
  sslPort: process.env.HTTPS_PORT,
  baseUrl: process.env.BASE_URL,
  name: "hrgulf.org",
  description: "Portal in hrgulf.org",
  author: "Zhenlong J.",
  secret: "hrgulf@@",
  sslKey: "./sslcert/server.key",
  sslCert: "./sslcert/1e720c418ffe9875.crt",
  sslCA: "./sslcert/gd_bundle-g2-g1.crt",
  environment: process.env.NODE_ENV,
};
const mysql = {
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};
const session = {
  name: "knowledge.hrgulf.org",
  key: "knowledge.hrgulf.org",
  secret: "knowledge.hrgulf.org@@",
  secretAdmin: "knowledge.hrgulf.org_admin@@",
};
const dbTblName = {
  users: "users",
  usersSigninHistory: "users_signin_history",
  userAvatars: "user_avatars",
  accountSettings: "account_settings",

  hireLetters: "hire_letters",
  hireMyCompanyProfiles: "hire_my_company_profiles",

  resetPasswordTokens: "reset_password_tokens",
};

const smtp = {
  // service: 'gmail',
  host: 'smtp.office365.com',
  secureConnection: true,
  port: 587,
  // secure: true,
  user: 'pm@eliteresources.co',
  pass: 'Theelite6*',
  limit: {
    receipt: 2999,
    message: 19,
  },
};

export {
  server,
  mysql,
  session,
  dbTblName,
  smtp,
}
export default {
  server,
  mysql,
  session,
  dbTblName,
  smtp,
}
