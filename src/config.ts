import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const Config = {
  API_BASE_URL: process.env.API_BASE_URL || "http://localhost:3000/",
};

export default Config;
