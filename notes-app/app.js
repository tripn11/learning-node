import {addNote, removeNote, listNotes, readNote} from './notes.js';
import yargs from 'yargs'; //sees all the variables passed into a script but needs hideBin
import {hideBin} from "yargs/helpers"; //very important to hide the first two unnecessary arguements of 
//process.argv array

yargs(hideBin(process.argv)) 
    .command('add','to add note', //title, description
        yargs => yargs //options- further details to run add
                    .option('title',{describe:'note title',demandOption:true,type:'string'})
                    .option('body',{describe:'body of note',demandOption:true,type:'string'}), 
        argv => {addNote(argv.title,argv.body)}) //handler
    .command('read','read the note', ()=>{console.log('read this note')})
    .command('remove', 'this removes a note',
        yargs=>yargs.option('title',{describe:'note that should be removed',demandOption:true, type:'string'}),
        argv => removeNote(argv.title))
    .command('listNotes','list all notes',()=>listNotes())
    .command('read','show the contents of a note',
        yargs => yargs.option('title',{describe:'title of note',demandOption:true,type:'string'}),
        argv => {readNote(argv.title)})
    .parse();
