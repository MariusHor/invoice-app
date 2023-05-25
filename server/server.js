import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorLogger, errorResponder } from "./src/middlewares";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(errorLogger);
app.use(errorResponder);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });