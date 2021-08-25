import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.API_PORT || "3001",
  url: process.env.URL || "localhost:3001",
};

export default config;
