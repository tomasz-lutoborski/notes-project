import {useEffect, useState} from "react";
import axios from "axios";
import "./App.css";
import NewNote from "./NewNote";
import NoteList from "./NoteList";
import Switch from "../layouts/Switch";

const baseUrl = "http://localhost:3001";

const App = () => {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteAuthor, setNoteAuthor] = useState("");
    const [noteText, setNoteText] = useState("");
    const [noteImportance, setNoteImportance] = useState(false);
    const [currentView, setCurrentView] = useState("new");
    const [notes, setNotes] = useState([]);

    const noteSubmitHandler = (event) => {
        const date = new Date();
        event.preventDefault();
        axios
            .post(`${baseUrl}/api/notes`, {
                title: noteTitle,
                author: noteAuthor,
                body: noteText,
                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                important: noteImportance
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const authorChangeHandler = (event) => {
        setNoteAuthor(event.target.value)
    }

    const textChangeHandler = (event) => {
        setNoteText(event.target.value)
    }

    const titleChangeHandler = (event) => {
        setNoteTitle(event.target.value)
    }

    const importanceChangeHandler = (event) => {
        if (event.target.value === "on") {
            setNoteImportance(true);
        }
        else {
            setNoteImportance(false);
        }
    }

    const switchViewHandler = () => {
        if (currentView === "new") {
            setCurrentView("list");
        }
        else {
            setCurrentView("new");
        }
    }

    return (
        <>
            <Switch onSwitch={switchViewHandler} currentView={currentView}/>

            <NewNote
                onTextChange={textChangeHandler}
                onTitleChange={titleChangeHandler}
                onImportanceChange={importanceChangeHandler}
                onAuthorChange={authorChangeHandler}
                onSubmit={noteSubmitHandler}/>
            <NoteList/>
        </>
    )
}

export default App;
