import express from "express";
import { getAllWorkouts } from "../controllers/workoutPlannerController";

// middleware enventually


const router = express.Router();

router.route("/").get(getAllWorkouts);

export default router;