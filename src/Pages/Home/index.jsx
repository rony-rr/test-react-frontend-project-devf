import React, { useState } from "react";

/** Import Data */
import DataIMB from "../../Data/IMB.json";

import Title from "../../Components/Atoms/Title";
import ButtonComponent from "../../Components/Atoms/Button";
import CardItemIMB from "../../Components/Molecules/CardItemIMB";
import CarouselPelis from "../../Components/Organisms/CarouselPelis";

import "./_home.scss";

export default function Home(props) {
  const [isShow, setIsShow] = useState(false);

  const RenderList = () => {
    const result =
      DataIMB?.d?.map((item, i) => {
        return (
          <CardItemIMB
            key={"item_card_imb_" + i}
            title={item?.l || null}
            subtitle={item?.q || null}
            text={item?.s || null}
            image={item?.i?.imageUrl || null}
          />
        );
      }) || null;

    return result;
  };

  return (
    <div className="wrapp-view">
      <Title title="Lista de peliculas desde el API" level={1} className="title_home" />
      <ButtonComponent
        color="primary"
        text={isShow ? "Ocultar lista" : "Visualizar lista"}
        onClick={() => setIsShow(!isShow)}
      />
      <CarouselPelis isShow={isShow}>{RenderList()}</CarouselPelis>

      <div className="floating--close">
        <span
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Cerrar Sesión
        </span>
      </div>
    </div>
  );
}
