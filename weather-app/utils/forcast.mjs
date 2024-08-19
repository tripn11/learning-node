import axios from 'axios';

export default (longitude, latitude, action)=>{
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=c5082ce1ae15395af4aeef8e4301c96c`
    axios.get(url)
    .then(res => {
        action(res.data.current)
    })
    .catch(error=>{
        if(error.response) {
            action(undefined,error.response.data.message)
        }else {
            action(undefined,'could not fetch the weather information')
        }
    })
}
