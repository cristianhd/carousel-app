import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.API_PORT || "3001",
  url: process.env.URL || "http://10.0.2.2:3001",
};

export default config;

