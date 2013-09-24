//insertar developers en la db
var insertarDev = function(datos) {
	if( typeof (datos) === 'object') {
		try {

			//instalamos la bd
			var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');

			//insert
			db.execute('INSERT INTO developers (Name1,Name2) VALUES(?,?)', datos.equipo1, datos.equipo2);
			db.close();

			alert('Nueva Jugada insertada');

		} catch(e) {
			alert(e);
		}

	} else {
		return false;
	}
};