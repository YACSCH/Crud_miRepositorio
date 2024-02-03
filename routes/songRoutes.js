import express from 'express';
import { getAllSongs, 
    createSong, 
    updateSong, 
    deleteSong } from "../src/controllers/songsController.js";
const router = express.Router();

router.get("/canciones", getAllSongs);

router.post("/canciones", createSong);

router.put("/canciones/:id", updateSong);

router.delete("/canciones/:id", deleteSong);

export default router;
