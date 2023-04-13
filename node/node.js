const express = require("express");
const cors = require("cors");
require("dotenv").config();
const URL = process.env.MONGODB_URI;

// const fs = require("fs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const morgan = require("morgan");
const app = express();
const port = 8080;
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const notes = data.notes;
// console.log(notes);
// console.log(notes);
//
app.use(cors());
app.use(express.json());

//mongoose-connect
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const notesSchema = new Schema({
  id: { type: String, required: true, unique: true },
  text: String,
  time: { type: Date },
});
const Note = mongoose.model("Note", notesSchema); //this is collection

//   res.sendStatus(404);
//getallproducts
app.get("/notes", async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch {
    res.status(500).json("unsuccesful");
  }
});
//getproductbyid
// app.get("/notes/:id", (req, res) => {
//   const id = +req.params.id;
//   const note = notes.find((p) => p.id === id);
//   res.json(note);
// });
//addnote
app.post("/add", async (req, res) => {
  console.log("save ", req.body);

  // notes.push(req.body);

  // fs.writeFile("data.json", JSON.stringify(data), (err) => {
  //   if (err) throw err;
  //   console.log("Object added to JSON file!");
  //   // send a response to the client
  //   res.send("Object added to JSON file!");
  // });

  const note = new Note({
    id: req.body.id,
    text: req.body.text,
    time: req.body.date,
  }); //create a new note tupple

  try {
    await note.save();
    res.status(200).json("inserted successful");
  } catch {
    res.status(500).json("unsuccesful");
  }
});
//update
// app.patch("/notes/:id", (req, res) => {
//   const id = +req.params.id;

//   const notesIndex = notes.findIndex((p) => p.id === id);

//   const note = notes[notesIndex];
//   notes.splice(notesIndex, 1, { ...note, ...req.body });
//   fs.writeFile("data.json", JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log("Object added to JSON file!");
//     // send a response to the client
//     res.send(notes);
//   });
// });
//delete
app.delete("/note/delete/:id", async (req, res) => {
  // const id = req.params.id;
  // console.log(id);
  // const notesIndex = notes.findIndex((obj) => obj.id === id);
  // console.log(notesIndex);

  // const note = notes[notesIndex];
  // notes.splice(notesIndex, 1);

  // fs.writeFile("data.json", JSON.stringify(data), (err) => {
  //   if (err) throw err;
  //   console.log("Object deleted from JSON file!");
  //   res.json(note);
  //   // send a response to the client
  // });

  console.log("delete id ", req.params.id);
  try {
    const notes = await Note.findOneAndDelete({ id: req.params.id });
    res.status(200).json(notes);
  } catch {
    res.status(500).json("unsuccesful");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
