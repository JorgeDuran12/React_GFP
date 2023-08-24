import express  from "express";

import { getAllusuarios, getUsuario, createUser } from "../controllers/UsuarioController.js"

const router =  express.Router();

router.get('/', getAllusuarios)
router.get('/:id', getUsuario)
router.post('/', createUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)


export default router