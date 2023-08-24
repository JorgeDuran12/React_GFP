import db from "../database/db.js";
import { DataTypes } from "sequelize";

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
    }
}, {
    timestamps: false // Desactivar los campos createdAt y updatedAt
});

export default UsuarioModel;
