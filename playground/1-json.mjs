import fs from 'fs';

const file = fs.readFileSync('1-json.json').toString() //without the tostring its just a set of numbers called buffer
const fileObject = JSON.parse(file);
const newObject = {
    ...fileObject,
    name:'Noble',
    age:25
}
const newJson = JSON.stringify(newObject);
fs.writeFileSync('1-json.json',newJson)