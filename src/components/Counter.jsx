"use client";
import { useState } from "react";

export default function Counter() {
  const [contador, modificarContador] = useState(0);

  return (
    <section>
      <p id="contador">{contador}</p>
      <button onClick={() => modificarContador(contador + 1)}>
        Sumar al contador
      </button>
    </section>
  );
}
