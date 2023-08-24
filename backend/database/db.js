import { Sequelize } from "sequelize";

const db = new Sequelize('gfp_bd', 'root', '',{
    host: 'localhost',
    dialect:'mysql'
})


export default db