import "./note-list.module.css"
import axios from "axios";
import {useEffect} from "react";

const baseUrl = "http://localhost:3001";

const NoteList = () => {

    useEffect(() => {
        axios
            .get(`${baseUrl}/api/notes`)
            .then(response => console.log(response));
    }, [])

    return (
        <div>

        </div>
    )
};

export default NoteList;
