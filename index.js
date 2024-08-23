import { Router } from "express";

const router = Router();

router.get("/test", (_, res) => res.json({ success: true }));

export default router;
