import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const Config = {
  API_BASE_URL:
    process.env.API_BASE_URL ||
    "http://ec2-18-117-174-111.us-east-2.compute.amazonaws.com:3000/",
};

export default Config;
