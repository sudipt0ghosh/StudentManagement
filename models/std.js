const db = require('../util/database')

module.exports = class std{
    constructor(id, name, roll){
        this.id = id;
        this.name = name;
        this.roll = roll;
    }
    // models for database query
    static fetchAll(){
        return db.execute('SELECT * FROM std');
    };

    static post(id, name, roll){
         return db.execute('INSERT INTO std SET id = (?), name = (?), roll = (?)',[id, name, roll]);
    };

    static update(id, name, roll){
        return db.execute('UPDATE std SET name = ? , roll = ? WHERE id = ?',[name, roll, id]);
   };

   static delete(id){
    return db.execute('DELETE FROM std WHERE id = ?',[id]);
    };
};