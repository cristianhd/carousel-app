import cookieParser from "cookie-parser";
import routes from "../routes/index";
import express, { Application, Request, Response, NextFunction } from "express";

import morgan from "morgan";

import cors from "cors";

const app: Application = express();

//headers and cors
app.use(express.urlencoded({ extended: true, limit: "50mb" })); //middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors());
app.use("/", routes);
interface error {
  status: number;
  message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
export default app;
