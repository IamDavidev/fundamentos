import React from "react";
export const Card = ({ lang, src, fcolor, scolor }) => {
  return (
    <div className="card__langs" style={{ background:`linear-gradient( ${fcolor},${scolor})`}}>
      <img src={src} alt={lang} />
      <h1> {lang} </h1>
    </div>
  );
};
