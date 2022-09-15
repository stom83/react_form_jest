import React, { useState } from 'react';
import { Datos } from './Datos';
export const DatosState = ()=> {
  const [data, setData] = useState([
    { id: 0, name: 'Estuardo', apellido : 'Chancusig', annac: 1983},  
    { id: 1, name: 'Anita', apellido : 'Chiluisa', annac: 1984},  
  ]);
  return(
    <>
      <h2>Tarjetas de presentacion</h2>
      {
        data.map(datosC => (
          <Datos
            key = {datosC.id}
            datosC = {datosC}
          />
          )
        )
      }
    </>
  );
};
