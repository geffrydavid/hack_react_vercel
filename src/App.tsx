import React, { useState } from 'react';
import { Usuario } from './types';
import FormularioUsuario from './components/FormularioUsuario';
import ListaUsuarios from './components/ListaUsuarios';
import BusquedaUsuarios from './components/BusquedaUsuarios';

const App: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioEditando, setUsuarioEditando] = useState<Usuario | null>(null);
  const [busqueda, setBusqueda] = useState('');

  const agregarUsuario = (usuario: Usuario) => {
    setUsuarios([...usuarios, usuario]);
  };

  const actualizarUsuario = (usuarioActualizado: Usuario) => {
    setUsuarios(usuarios.map(u => u.id === usuarioActualizado.id ? usuarioActualizado : u));
    setUsuarioEditando(null);
  };

  const eliminarUsuario = (id: string) => {
    setUsuarios(usuarios.filter(u => u.id !== id));
  };

  const usuariosFiltrados = usuarios.filter(u => 
    u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    u.correo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestión de Usuarios</h1>
      <FormularioUsuario 
        onSubmit={usuarioEditando ? actualizarUsuario : agregarUsuario} 
        usuarioInicial={usuarioEditando}
      />
      <BusquedaUsuarios busqueda={busqueda} setBusqueda={setBusqueda} />
      <ListaUsuarios 
        usuarios={usuariosFiltrados} 
        onEliminar={eliminarUsuario}
        onEditar={setUsuarioEditando}
      />
      <p className="mt-4 font-bold">Total de usuarios: {usuarios.length}</p>
    </div>
  );
};

export default App;