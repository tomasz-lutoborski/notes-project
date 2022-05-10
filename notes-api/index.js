const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const noteSchema = require("./models/note");

app.use(cors());
app.use(express.json());

const baseUrl = "mongodb+srv://Tomek:tomek@cluster0.qrh4t.mongodb.net/testDatabase?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(baseUrl, connectionParams)
    .then(() => {
        console.log("connected");
    })
    .catch((e) => {
        console.log(`error connecting to database ${e}`);
    });

const Note = mongoose.model('Note', noteSchema);

app.get('/api/notes', (request, response) => {
    Note.find({}, (err, notes) => {
       console.log(notes);
    });
})

app.post('/api/notes', (request, response) => {
    const newData = new Note(request.body);
    newData.save((err, doc) => {
        if (err) return console.log(err);
        else console.log("success");
    })
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

