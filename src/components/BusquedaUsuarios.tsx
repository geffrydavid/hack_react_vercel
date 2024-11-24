import React from 'react';

interface Props {
  busqueda: string;
  setBusqueda: (busqueda: string) => void;
}

const BusquedaUsuarios: React.FC<Props> = ({ busqueda, setBusqueda }) => {
  return (
    <input
      type="text"
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      placeholder="Buscar usuario..."
      className="mb-4 p-2 border rounded w-full"
    />
  );
};

export default BusquedaUsuarios;