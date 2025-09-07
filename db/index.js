const {drizzle}  = require('drizzle-orm/node-postgres');


// postgres://username:password@localhost:5432/mydb
const db = drizzle(process.env.DATABASE_URL);

module.exports = db;