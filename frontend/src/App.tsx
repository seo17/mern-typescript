import { useState, useEffect } from "react";
import "./App.css";
import { Note } from "./types/notes";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("http://localhost:5000/api/notes", {
          method: "GET",
        });
        const notes = await response.json();
        console.log(notes);

        setNotes(notes);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
    loadNotes();
  }, []);

  return <div>{JSON.stringify(notes)}</div>;
}

export default App;
