"use client";
import { useRef } from "react";

export default function Page() {
  const emailRef = useRef(null);
  const nombreRef = useRef(null);
  const mensajeRef = useRef(null);

  return (
    <form
      onSubmit={(evento) => {
        evento.preventDefault();

        console.log(emailRef.current.value);
        console.log(nombreRef.current.value);
        console.log(mensajeRef.current.value);
      }}
    >
      <input
        className="text-black border border-black"
        type="email"
        name=""
        id=""
        ref={emailRef}
      />
      <input
        className="text-red-600 border border-black"
        type="text"
        name=""
        id=""
        ref={nombreRef}
      />
      <textarea
        className="text-black border border-black"
        name="mensaje"
        id=""
        cols="30"
        rows="10"
        ref={mensajeRef}
      ></textarea>

      <input type="submit" value={"Enviar"} />
    </form>
  );
}
