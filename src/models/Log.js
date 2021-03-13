// import { database } from './../../scripts/database.js';

export class Log {
    constructor() {
        this.logs = database;
    }
    addLog(day, note, link){
        this.name = day + '' + link;
        this.day = day;
        this.note = note;
        this.link = link;
    } 
}

 