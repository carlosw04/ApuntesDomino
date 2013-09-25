//insertar developers en la db
var insertarjugador = function(datos) {
	if( typeof (datos) === 'object') {
		try {

			//instalamos la bd
			var db = Ti.Database.install('ApuntesDomino.sqlite','ApuntesDomino');

			//insert
			db.execute('INSERT INTO developers (Name1,Name2) VALUES(?,?)', datos.Pareja1, datos.Pareja2);
			db.close();

			alert('Nueva Jugada insertada');

		} catch(e) {
			alert(e +'|'+ 'Error en la aplicacion');
		}

	} else {
		return false;
	}
};



