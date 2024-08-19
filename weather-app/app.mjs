import geocode from "./utils/geocode.mjs"
import forcast from "./utils/forcast.mjs"

const address = process.argv.slice(2)[0]
if(address) {
    geocode(address,({latitude,longitude,name:location},error)=>{
        if(error) {
            console.log(error)
        } else {
            console.log(location)
            forcast(longitude,latitude,(data,error)=>{
                if(error) {
                    console.log(error)
                }else{
                    console.log(data.weather[0].description)
                }
            })
        }   
    })
}else {
    console.log('provide a location')
}


