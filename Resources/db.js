

var DATABASE_NAME = 'ApuntesDomino.sqlite';



exports.selectapuntes = function(_id) {
	var retData = [];
	var retData2 = [];
	var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');
	//var db = Ti.Database.open(DATABASE_NAME);
	var rows = db.execute('SELECT * FROM Apuntes WHERE JugadaId = ?', _id);
	while (rows.isValidRow()) {
		retData.push({item:rows.fieldByName('Puntos_P1'),item2:rows.fieldByName('Puntos_P2'), id:rows.fieldByName('JugadaId')});
		//retData.push({item:rows.fieldByName('Puntos_P2'), id:rows.fieldByName('JugadaId')});
		rows.next();
	}
	db.close();
	return retData;
};