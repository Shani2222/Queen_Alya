//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUYvVjh0M3R1OUhGRWVDUnBSYW85QVRtMUZTOTFVcUFwZlEyVnpmeE1sRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWtsU2M1eW5jQVpOYzBSb0JmMUErR2NHTm1qUExud091Qk1FQlFpaVpYOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTTNDQ2c2QmVGOWp6eGhRenNxNEhZZy9jUC9XeDVWdEhSUjllOTdtZTNvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERTZWZWExaHlhNlc3SzNSMWM5WmtIQXg4ck9MMjlrZW85L2NzclBwTkVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCSUFXaE45NlhodERYQ3I2ano3dytZUVI2dk80ek5lZUxuZUltWFJnMTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZPbTgzS1VNUDY3THZ0alFWU2NjV0hXTmkzOFMrYVM2c2ZSOUo2SnMxVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdXRFlaMWVoYWo4THl3YjJ2aXZKM3JoQndVMUVCU0ZHUmZrTS9nTitYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2N4VVp1RUdqVDFYZXkwdnNxVjl2ckpEUkdmODcvYUlRVlZWWUZ6NUlYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZGOU1JWFBRemR1QjIxcjBuNUFtT0JGNXlEWnpZRERqRzBQMzBZUkJIdEI5R2hyN0ZmZ2xFZjRua1gwMFdpdFB6R1BERmV6ZGV3c3lFN3JBMUtac2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6IklzSTFWWkFwZ3N2QjRmTEFVN3Q4YW5veGpDQW16NlVXOHYxYkhQWTZMMW89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJ6RGJnS0hRUURxZ3otbnAyU1ZQNUEiLCJwaG9uZUlkIjoiZGViZDg1YjQtZTgxNS00NmVhLTlkYWUtMTE5YTVlNWFjZTI0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllCUkZpblA4ZUtUdW1FeFRWY0ttd2JNQnlCST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3WjVaMHJQbWRoNFNYcllISk9zQkxVTWdobUE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSk5DTFBaOUYiLCJtZSI6eyJpZCI6IjkyMzMxOTcwOTc4MTo5MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZC38J2bpfCdkYXwnZurIPCdm6/wnZu78J2bqvCdkL9cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbuGvvVxu4a+9XG7hr71cbvCTg64ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHUXM5Z0NFTW15NUxVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJzTFFNd3ZJbTViWUNrblowMEdaUEtxQUlFMW1OMW1FZE0zbzdpYXE3eEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InU3OW1GSlp5cEJYMzdVR2t5Lytmbk5KQUpqRmwrMkczYzUwNGtSY0FEQ3FFcGhhakVEWGNSWVplVzRVUnppaVpwbnJyWnJMYTNYcEM3QWJRemFNWEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnNjJOTm5qNGJCS2Y5VllEekVjdnJrMUxYNHYrOGFiU0hRY3lZaWtDN0pTMytqUC9BSkZYM2RFSk5xcERLclp5V1U1cDl2aWNocGFlUWNVYzNHTnloQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMxOTcwOTc4MTo5MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkckMwRE1MeUp1VzJBcEoyZE5CbVR5cWdDQk5aamRaaEhUTjZPNG1xdThSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNDA2NjY5fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
