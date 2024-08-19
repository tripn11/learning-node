import axios from 'axios';

export default (address, action) => {
    const place = encodeURIComponent(address)
    const secondUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?limit=1&access_token=pk.eyJ1IjoiMW5vYmxlMSIsImEiOiJjbG5qOThvajIwYXFtMmlwMjZ3M3VodXEyIn0.TVvSged0cDWDtRQ_pNAyOQ`
    axios.get(secondUrl)
        .then(res=>{
            if(res.data.features.length === 0){
                action(undefined,'unable to find location')
            }else{
                action({
                    name:res.data.features[0].place_name,
                    longitude:res.data.features[0].center[0],
                    latitude:res.data.features[0].center[1]    
                })
            }
        })
        .catch(err=>{
            if(err.response){
                action(undefined,err.response.data.message)
            }else {
                action(undefined,'Unable to connect to location services')
            }
        })
}