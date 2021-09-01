import React from "react";
import { Card } from "./Card";
import { DataCard } from "../services/DataCard";

export const ListCards = () => {
  return (
    <div className="List__cards">
      {DataCard.map(({ lang, url, fcolor, scolor }) => ( 
        <Card key={lang} lang={lang} src={url} fcolor={fcolor} scolor={scolor} />
      ))}
    </div>
  );
};
