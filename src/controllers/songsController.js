import { writeFile, readFile } from 'node:fs/promises';

const getAllSongs = async (req, res) => {
  try {
    const songs = await readFile("./repertorio.json", "utf-8");
    res.json(JSON.parse(songs));
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const createSong = async (req, res) => {
  try {
    const newSong = req.body;

    const songs = JSON.parse(await readFile("./repertorio.json", "utf-8"));
    songs.push(newSong);
    await writeFile("./repertorio.json", JSON.stringify(songs));
    res.status(201).send("Canción agregada exitosamente");
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const updateSong = async (req, res) => {
  try {
    const { id } = req.params;

    const song = req.body;
     const songs = JSON.parse(await readFile("./repertorio.json", "utf-8"));
    const index = songs.findIndex((cancion) => cancion.id == id);
    songs[index] = song;
    await writeFile("./repertorio.json", JSON.stringify(songs));
    res.status(200).send("Canción actualizada exitosamente");
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;

    const songs = JSON.parse(await readFile("./repertorio.json", "utf-8"));
    const index = songs.findIndex((cancion) => cancion.id == id);
    songs.splice(index, 1);

    await writeFile("./repertorio.json", JSON.stringify(songs));

    res.status(200).send("Canción eliminada exitosamente");
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" });
    console.error("Error al procesar la solicitud:", error);
  }
};

export { getAllSongs, 
         createSong, 
         updateSong, 
         deleteSong 
        };
