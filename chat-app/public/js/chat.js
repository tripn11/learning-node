const socket = io();

socket.on('message', data=>{
    console.log(data)
})

const input = document.getElementById('message')
document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault()
    socket.emit('sendMessage',input.value, (message)=>{
        console.log('the message was acknowledged',message)
    })
})

document.querySelector('#locator').addEventListener('click',()=>{
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported')
    }

    navigator.geolocation.getCurrentPosition(position=>{
        socket.emit('sendLocation',{longitude:position.coords.longitude,latitude:position.coords.latitude},()=>{
            console.log('Location Shared!')
        })
    })
})

//this looks at the query data from the form submission redirection link and converts it to an object
const {username, room} = Qs.parse(location.search,{ignoreQueryPrefix:true})

socket.emit('join',{username,room})