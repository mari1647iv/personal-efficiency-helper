import { Pool } from "pg"

const pool: Pool = new Pool({
  user: "pefuser",
  password: "passmeplease",
  host: "localhost",
  port: 5432,
  database: "pefdb",
})

export default pool