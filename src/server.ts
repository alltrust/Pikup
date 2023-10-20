import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

import workoutRouter from './routes/workoutRoutes';
import authRouter from './routes/authRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

app.use(express.json());


app.get('/', (req, res) => {
    res.send("hello world");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/workouts", workoutRouter);

app.listen(port, () => {
    console.log(`server... running on port: ${port}`);
});

