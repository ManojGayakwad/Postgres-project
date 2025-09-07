const db = require('./db');
const {usersTable}  = require('./drizzle/schema');

// console.log("DB", db);

async function getAllUsers() {
  const users = await db.select().from(usersTable);
//   console.log("User DB", users);
  return users;
}


async function createUser({id, name, email}){
    const newUser = await db.insert(usersTable).values({
        id, name, email
    });
    return newUser;
}

getAllUsers().then(users => {
    console.log(users);
}).catch(err => {
    console.error(err);
});


// createUser({ id: 1, name: 'John Doe', email: 'xyz@example.com' });
// createUser({ id: 2, name: 'Jane Smith', email: 'xyz@gmail.com' });
