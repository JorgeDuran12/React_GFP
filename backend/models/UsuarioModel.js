import db from "../database/db.js";
import DataTypes  from "sequelize";

const UsuarioModel = db.define('usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    usuario:{
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
    tipo_documento:{
        type: DataTypes.SMALLINT
    },
    num_documento:{
        type: DataTypes.STRING
    }
}, {
    timestamps: false // Desactivar los campos createdAt y updatedAt
});

export default UsuarioModel;
