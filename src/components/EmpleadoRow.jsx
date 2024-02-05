import React from "react";
import EmpleadoAvatar from './EmpleadoAvatar'


const EmpleadoRow = ({empleado}) => {

    const {nombre, cargo, departamento, foto} = empleado;

  return (
    <div className="card d-flex flex-row">
        <EmpleadoAvatar foto={foto}/>
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title fs-1">{nombre}</h5>
        <p className="card-text fs-4">{cargo} <span className="bg-primary text-white p-1 rounded">{departamento}</span></p>
      </div>
    </div>
  );
};

export default EmpleadoRow;
