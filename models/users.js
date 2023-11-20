const usersModel = {
    getAll: `
        SELECT * FROM pokemon LIMIT 5`,

    getByID:`SELECT * FROM pokemon WHERE id = ?`, 

    addRow: `INSERT INTO pokemon (Name, Type_1, Attack, Defense, Speed)
              VALUES (?, ?, ?, ?, ?)`,
              
    getByUsername: `
    SELECT * FROM pokemon WHERE Name = ?`,


    updateRow: `UPDATE pokemon SET
                 Name = ?,
                 Type_1 = ?,
                 Attack = ?,
                 Defense = ?,
                 Speed =?
                WHERE id = ?`
                ,

    deleteRow: `UPDATE pokemon SET Attack = 0 WHERE id = ?`,

};

module.exports = usersModel;