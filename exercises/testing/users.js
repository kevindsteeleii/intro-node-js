const users = new Array(20).fill(0)
.map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`
  }
})

const testFindUser = true;
const fixId = (id) => parseInt(id);

// simulate async db call with promise
const findUser = (id) => new Promise((resolve, reject) => {
  // testFindUser && console.log("id is: ", id);
  const _id = fixId(id);
  const user = users.find(_user => _user.id == _id)
  // testFindUser && console.log('user is: ', user); 
  // testFindUser && console.log('!user is: ', !user); 
  if (!user) {
    reject(`No user with id "${_id}"`)
    // reject(new Error(`No user with id "${id}"`))
    return null;
  } else {
    // testFindUser && console.table(users); 
    resolve(user)
  }
})
.catch(err => new Error(`No user with id "${id}"`));

// simulate async db call with promise
const deleteUser = (id) => new Promise((resolve, reject) => {
  const id = fixId(id)
  const i = users.findIndex(user => user.id === id)

  if (i < 0) {
    reject(new Error(`No user with id "${id}"`))
  }

  users.slice(i, 1)
  resolve({id})
}).catch(err => err)

module.exports = {
  findUser,
  deleteUser,
  fixId
}
