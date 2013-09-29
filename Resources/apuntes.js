/// Esta es la ventana para llevar las anotaciones
var apuntes = function(){





// Creamos la ventana para retornar al tab	
var win_apuntes = Ti.UI.createWindow({
	
	title:'Apuntes',
	backgroundColor : 'white'
	
		
});	
	
// Esta es una vista para probar despues	
	var vista  = Ti.UI.createScrollView({
		
		
	});
	
	


//Crear la primera seccion para la primera pareja

var section1 = Ti.UI.createTableViewSection({
	headerTitle:'Pareja1',
	font : {
			fontSize : 20,
			fontWeight : 'bold'
			},
	
	
	});


// Creamos la segunda seccion para la segunda pareja

var section2 = Ti.UI.createTableViewSection({
	
	headerTitle :'Pareja2',
	font : {
				fontSize : 20,
				fontweight : 'bold'
					
			},
	
	});

//creamos el tableview1
			var tableview = Ti.UI.createTableView({
			minRowHeight : 60,
			maxRowHeight : 70,
			editable : true,
			data: [section1,section2],
			width:'100%',
			
			});



win_apuntes.add(tableview);	

var jugada_id = 1;
tableview.setData(getTableData(jugada_id));








Ti.App.addEventListener('app:updateTables', function() {
		tableview.setData(getTableData(Jugada_id));
	});



	
	
return win_apuntes;
};

var getTableData = function(Jugada_id) {
	var db = require('db');
	var data = [];
	var data1 = []; //new
	var data2 = []; //new
	var section = Ti.UI.createTableViewSection({headerTitle :'Pareja1',}); //new
	var section2 = Ti.UI.createTableViewSection({headerTitle :'Pareja2',}); //new
	var row = null;
	var todoapuntes = db.selectapuntes(Jugada_id);
	
	for (var i = 0; i < todoapuntes.length; i++) {
		data1[i] = Ti.UI.createTableViewRow({
			id: todoapuntes[i].id,
			title: todoapuntes[i].item,
			color: '#000',
			font: {
				fontWeight: 'bold'	
			}
		});
		
		data2[i] = Ti.UI.createTableViewRow({ //new
			id: todoapuntes[i].id,
			title: todoapuntes[i].item2,
			color: '#000',
			font: {
				fontWeight: 'bold'	
			}
		});
		//data.push(row);
		
		section.add(data1[i]); //new
		section2.add(data2[i]); //new
		
		data[0] = section;
		data[1]= section2;
		
	}
	return data;
};

