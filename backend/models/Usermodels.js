// berisi struktur tabel yang diabuat di dalam database

import { DataTypes } from "sequelize"
import db from "../config/Database"

const User = db.define('user', {
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  freezeTableName: true
})

