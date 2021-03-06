var listar = function() {

	//creamos la ventana
	var win = Titanium.UI.createWindow({
		title : 'Listar',
		backgroundColor : '#fff'
	});

	//botones
	var Eliminar_btn = Titanium.UI.createButton({
		title : 'Eliminar'
	});

	var Listo_btn = Titanium.UI.createButton({
		title : 'Listo'
	});

	//agregamos el Eliminar_btn
	win.rightNavButton = Eliminar_btn;

	//creamos el tableview
	var tableview = Ti.UI.createTableView({
		minRowHeight : 60,
		maxRowHeight : 70,
		editable : true
	});

	//agregamos el tableview a la ventana actual
	
	win.add(tableview);

	//cargamos la lista
	var cargarLista = function() {

		//arreglo con los datos del tableview
		var datos = [];

		//instalamos la bd
		var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');
		var filas = db.execute('SELECT * FROM Jugadas');

		//para alternar el color a cada fila
		var c = 0;
		var rowbg = '#fff';

		//iteramos cada resultado
		while(filas.isValidRow()) {

			//asignamos el color de fondo de la fila
			rowbg = (c % 2 == 0) ? '#fff' : '#edf4fc';

			//cramos el row
			var row = Ti.UI.createTableViewRow({
				height : 'auto',
				textAlign : 'left',
				width : '100%',
				className : 'dos_colores',
				backgroundColor : rowbg
			});

			//asignamos el id a cada fila
			row.Jugada_id = filas.fieldByName('JugadaId');

			var nombre_completos = Ti.UI.createLabel({
				text:filas.fieldByName('Name1') + ' '+ filas.fieldByName('Name2'),
				width:'auto',
				height : 'auto',
				left : 15,
				top : 10,
				textAlign : 'left',
				font : {
					fontSize : 18,
					fontWeight : 'bold'
				},
				color : '#000'
			});

			var fecha = Ti.UI.createLabel({
				text:filas.fieldByName('DateTime'),
				width:'auto',
				height : 'auto',
				left : 15,
				top : 30,
				textAlign : 'left',
				font : {
				fontSize : 15
				},
				color : '#000111'
			});

		
				var btn_delete = Ti.UI.createButton({
					right: 10,
					height: 50,
					width: 95,
					title: 'Eliminar'
			});

			//agremos labels al row
			row.add(nombre_completos);
			row.add(fecha);
			row.add(btn_delete);
			
	
			datos.push(row);

			c++;
			filas.next();
		}

		//liberamos resources
		filas.close();
		db.close();

		tableview.data = datos;
	};


//eliminar en la db
var eliminar = function(Jugada_id) {

	if( typeof (Jugada_id) != 'number') {
		return false;
	}

	try {

		//instalamos la db desde la carpeta resources
		var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');

		db.execute('DELETE FROM Jugadas WHERE JugadaId = ' + Jugada_id);

		//close db
		db.close();
		return true;

	} catch(e) {
		alert(e);
	}
};




	/*****************************************************************************
	 *EventListeners
	 ****************************************************************************/

	//currentwindow focus event
	win.addEventListener('focus', function(e) {
		//cargamos la lista
		cargarLista();
	});
	

	//eliminar click event
	tableview.addEventListener('click', function(e) {
		var resultado = eliminar(e.row.Jugada_id);
		//alert('Me tocaron'+' '+ e.row.Jugada_id);
		cargarLista();
		
	});
	

	//retornamos el objeto de la ventana
	return win;
};