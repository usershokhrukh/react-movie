import React from "react";
import {Logger} from "sass";

const ExportData = (data) => {  
  return data?.data?.map((item) => (
    <div className="cards__item">
      <img className="cards__item-img" src={item?.Poster} alt={item?.Title} />
      <h2 className="cards__item-title">{item?.Title}</h2>
      <p className="cards__item-des">{item?.Type}</p>
      <p className="cards__item-year">{item?.Year}</p>
    </div>
  ));
};

export default ExportData;
