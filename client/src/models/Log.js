import { database } from '../../../server/database.js';

export default class Log {
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

 