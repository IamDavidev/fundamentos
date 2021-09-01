import React, { useState } from "react";

export const Contador = ({ num, factor }) => {
  const [contador, setContador] = useState(num);
  const aumentar = () => setContador(contador + factor);
  const disminuir = () => setContador(contador - factor);
  return (
    <div>
      <h1>Soy el Componente de React</h1>
      <h3>C O N T A D O R = {contador}</h3>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};
