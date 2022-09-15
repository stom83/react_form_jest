import React from 'react';
export const Datos = ({datosC}) => {
  const {id, name, apellido, annac} = datosC
  return(
    <>
    <h2>Card N°{id}</h2>
    <p>{name}</p>
    <p>{apellido}</p>
    <p>{annac}</p>
    </>
  );
};