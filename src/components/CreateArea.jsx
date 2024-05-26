import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
export default function CreateArea(props) {
  const [start, setStart] = useState();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setNote((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  function onsubmit(event) {
    props.addNote(note);
    console.log(note);

    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  function onStart() {
    setStart(true);
  }
  return (
    <div>
      <form className="create-note">
        {start ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handelChange}
            value={note.title}
          ></input>
        ) : (
          console.log("nok")
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handelChange}
          value={note.content}
          onClick={onStart}
          rows={start ? 3 : 1}
        ></textarea>
        {start ? (
          <Zoom in={start}>
            <Fab type="submit" onClick={onsubmit}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}
