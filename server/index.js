
import helmet from "helmet";
import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

//CONFIG

dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

//ROUTES
app.use("/client",clientRoutes);
app.use("/general",generalRoutes);
app.use("/client",clientRoutes);
app.use("/sales",salesRoutes);
