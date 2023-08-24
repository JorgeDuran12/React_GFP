import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = 'http://localhost:8000/public/';

const compCreateUser = () => {

  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [usuario, setUsuario] = useState("")
  const [pass, setPass] = useState("")
  const [tipo_documento, setTipo_documento] = useState("")
  const [num_documento, setNum_documento] = useState("")
  const navigate = useNavigate()

  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {
      nombre: nombre,
      apellido: apellido,
      usuario: usuario,
      pass: pass,
      tipo_documento: tipo_documento,
      num_documento: num_documento
    })
    navigate('/')
  }

  return (
    <div>
      <h3>Crear usuario</h3>
      <form onSubmit={store}>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
              value={nombre}
              onChange={(e)=> setNombre(e.target.value)}
              type="text"
              className="form-control"
          />
        </div>

        <div className="mb-3">
            <label className="form-label">Apellidos</label>
          <input
              value={apellido}
              onChange={(e)=> setApellido(e.target.value)}
              type="text"
              className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
              value={usuario}
              onChange={(e)=> setUsuario(e.target.value)}
              type="text"
              className="form-control"
          />
       </div>

       <div className="mb-3"> 
          <label className="form-label">Contraseña</label>
          <input
              value={pass}
              onChange={(e)=> setPass(e.target.value)}
              type="password"
              className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de documento</label>
          <input
              value={tipo_documento}
              onChange={(e)=> setTipo_documento(e.target.value)}
              type="text"
              className="form-control"
          />
        </div>    

        <div className="mb-3">
          <label className="form-label">Numero de documento</label>
          <input
              value={num_documento}
              onChange={(e)=> setNum_documento(e.target.value)}
              type="text"
              className="form-control"
          />
       </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
    </div>
  )
}


export default compCreateUser