//insertar en la db
var insertarjugador = function(datos) {
	if( typeof (datos) === 'object') {
		try {

			//instalamos la bd
			var db = Ti.Database.install('ApuntesDomino.sqlite','ApuntesDomino');

			//insert
			db.execute('INSERT INTO Jugadas (Name1,Name2) VALUES(?,?)',datos.Name1, datos.Name2);
			db.close();

			alert('Nueva Jugada insertada');

		} catch(e) {
			alert(e +'|'+ 'Error en la aplicacion');
		}

	} else {
		return false;
	}
};


var Limpiar = function(datos){
	
	
	
	
};
