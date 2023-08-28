import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/public/';

const CompShowUser = () => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        getUsuario();
    }, []);

    const getUsuario = async () => {
        try {
            const res = await axios.get(URI);
            setUsuario(res.data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    const deleteUsuario = async (id) => {
        try {
            await axios.delete(`${URI}${id}`);
            getUsuario();
        } catch (error) {
            console.error('Error al eliminar el usuario:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>

                    <Link to="/create" className='btn btn-primary mt-2 mb-2'> Crear registro</Link>

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Acciones</th>

                            </tr>
                        </thead>
                        <tbody>
                            {usuario.map((usuarios) => (
                                <tr key={usuarios.id_usuario}>
                                    <td>{usuarios.id_usuario}</td>
                                    <td>{usuarios.nombre}</td>
                                    <td>{usuarios.apellido}</td>
                                    <td>{usuarios.usuario}</td>
                                    <td>
                                        <Link to={`/edit/${usuarios.id_usuario}`} className='btn btn-info'>Editar</Link>
                                        <button onClick={() => deleteUsuario(usuarios.id_usuario)} className='btn btn-danger'>Eliminar</button>
                                    </td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CompShowUser;
