// //Creates and stores a new note
// app.post("/api/notes", function(req, res) {
//         let addNote = req.body;
//         let thisID = notes.length;
//         addNote["id"] = thisID +1;
//         thisID++;
//         notes.push(addNote);
//         console.log(addNote);
//         fs.writeFile("db/db.json", JSON.stringify(notes), function (err) {
//             if (err) {
//                 console.log("error")
//                 return console.log(err);
//             }
//         })
//         return res.status(200).send("Note Added");
//     })