import Header from "./Header";
import Note from "./Note";
//import notes from "./exampleNote";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState([]);

  function addItem(note) {
    setInput((preValue) => {
      return [...preValue, note];
    });
  }
  function onDelete(id) {
    setInput((preValue) => {
      return preValue.filter((input, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addItem} />

      {input.map((note, index) => (
        <Note
          key={note.key}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      ))}

      <Footer />
    </div>
  );
}
