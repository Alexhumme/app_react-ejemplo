import { Router } from "express";
import { getTasks,getTask,createTask,editTask,deleteTask} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks",getTasks);
router.get("/tasks/:id",getTask);
router.post("/tasks",createTask);
/*
router.get("/tasks/:id",editTask);
router.get("/tasks/:id",deleteTask);
*/
export default router