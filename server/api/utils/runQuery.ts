require('dotenv').config()
import { createTables, insertIntoTables } from './queryFunctions';

(async () => {
  await createTables();
  await insertIntoTables();
})();