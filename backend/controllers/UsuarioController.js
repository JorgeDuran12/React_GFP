import UsuarioModel from "../models/UsuarioModel.js";

// Mostrar todos los registros
export const getAllusuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.findAll();
        res.json(usuarios);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Mostrar un registro
export const getUsuario = async (req, res) => {
    try {
        const usuario = await UsuarioModel.findAll({
            where: { id_usuario: req.params.id }
        });
        res.json(usuario[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Crear un registro
export const createUser = async (req, res) => {
    try {
        await UsuarioModel.create(req.body)
        res.json({
            message: "Registro creado",
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

// Actualizar registro
/*export const updateUser = async (req, res) => {
    try {
        await UsuarioModel.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: { id_usuario: req.params.id }
            }
        );
        res.json({
            message: "Registro actualizado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}*/

// Eliminar registro
/*export const deleteUser = async (req, res) => {
    try {
        await UsuarioModel.destroy({
            where: { id_usuario: req.params.id }
        });
        res.json({
            message: "Registro eliminado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}*/
