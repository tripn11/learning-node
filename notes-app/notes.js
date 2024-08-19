import fs from 'fs';
import chalk from 'chalk';

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote) {
        notes.push({title,body})
        saveNotes(notes); 
    } else  {
        console.log('This title has already been taken')
    }
} 

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note)=>note.title !== title)
    saveNotes(newNotes);
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((note)=>{console.log(note.title)})
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note)=>note.title === title)
    if(note) {
        console.log(chalk.blue.bold(note.title),note.body)
    } else {
        console.log(chalk.red('Error: No note found'))
    }
}

export { addNote, removeNote, listNotes, readNote}