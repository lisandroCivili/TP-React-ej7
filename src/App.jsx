import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmpleadoRow from "./components/EmpleadoRow";

function App() {
  const empleados = [
    { id: 1, nombre: "Laya Dueñas", cargo: "CEO", departamento: "Business", foto: 'mujer' },
    { id: 2, nombre: "Astryd Vallés", cargo: "CMO", departamento: "Marketing", foto: 'mujer' },
    { id: 3, nombre: "Shantell Meza", cargo: "CFO", departamento: "Business", foto: 'mujer' },
    { id: 4, nombre: "Sergio Ocampo", cargo: "CTO", departamento: "Engineering", foto: 'varon' },
    { id: 5, nombre: "Ares Jiménez", cargo: "Art Director", departamento: "Marketing", foto: 'varon' },
    { id: 6, nombre: "Marta Pérez", cargo: "Frontend Dev", departamento: "Engineering", foto: 'mujer' }

  ];

  return (
    <section className="container mt-5">
      <div>
        {empleados.map((empleado, index)=>(
          <div key={index}>
            <EmpleadoRow empleado={empleado} />
          </div>
        ))
        }
      </div>
    </section>
  );
}

export default App;
