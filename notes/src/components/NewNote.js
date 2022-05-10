import styles from "./new-note.module.css";

const NewNote = (props) => {
    return (
        <div>
            <h1 className={styles.pageTitle}>Notes app</h1>
            <div className={styles.newNote}>
                <form onSubmit={props.onSubmit}>
                    <div className={styles.newNoteField}>
                        <label htmlFor="title">Title: </label>
                        <input size="40" type="text" name="title" onChange={props.onTitleChange} required/>
                    </div>
                    <div className={styles.newNoteField}>
                        <label htmlFor="author">Author: </label>
                        <input size="40" type="text" name="author" onChange={props.onAuthorChange} required/>
                    </div>
                    <div className={styles.newNoteField}>
                        <label htmlFor="note">Note: </label>
                        <textarea cols="39" rows="20" name="note" onChange={props.onTextChange}/>
                    </div>
                    <div className={styles.newNoteField}>
                        <label htmlFor="importance">Important: </label>
                        <input type="checkbox" name="importance" onChange={props.onImportanceChange}/>
                    </div>
                    <button className={styles.addNoteButton} type="submit">Add note</button>
                </form>
            </div>
        </div>

    )
};

export default NewNote;
