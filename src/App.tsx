import { useState } from "react";
import ListView from "./ListView";
import DetailView from "./DetailView";
import "./App.css";

/**
 * Main react app component
 */
export default function App() {
  const [detailPokemon, setDetailPokemon] = useState("");

  if (detailPokemon) {
    return (
      <DetailView
        setDetailPokemon={setDetailPokemon}
        detailPokemon={
          JSON.parse(localStorage.getItem("pokemon")!)[detailPokemon]
        }
      />
    );
  }

  return <ListView setDetailPokemon={setDetailPokemon} />;
}
