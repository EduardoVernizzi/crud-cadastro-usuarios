import mysql from "mysql"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Vernizzi@dev",
  database: "crud_cadastro_usuarios"
})