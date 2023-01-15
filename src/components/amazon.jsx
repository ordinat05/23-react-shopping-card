import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import '../styles/amazon.css';

export default function amazon({ handleClick }) {



  return (
    <section>
      🍀 Bu Component amazon.jsx
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
}
