const users =[]

const addUser =({id, username, room})=>{
    username= username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!username || !room) {
        return {
            error:'username and room are required'
        }
    }

    const existingUser = users.find(user=>{
        return user.room === room && user.username === username 
    })

    if(existingUser) {
        return {
            error:'Username is in use'
        }
    }

    const user = {id, username, room}
    users.push(user)
    return user
}

//function to remove user from the array by id. this id is gotten from socket.id
//function to getUser by id
//function to getAllUsers in room by name of room
//export all functions
//automatic scrolling only when the user is looking at the latest message
