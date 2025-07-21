import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

import weaponAction from "./modules/weapon/weaponAction";

router.get("/api/weapon", weaponAction.browse);
router.get("/api/weapon/:id", weaponAction.read);
router.put("/api/weapon/:id", weaponAction.edit);
router.post("/api/weapon", weaponAction.add);
router.delete("/api/weapon/:id", weaponAction.destroy);

/* ************************************************************************* */

export default router;
