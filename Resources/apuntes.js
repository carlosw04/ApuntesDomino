/// Esta es la ventana para llevar las anotaciones
var apuntes = function(){





// Creamos la ventana para retornar al tab	
var win_apuntes = Ti.UI.createWindow({
	
	title:'Apuntes',
	backgroundColor : 'white'
	
		
});	


	var Punto1 = Ti.UI.createTextField({clearOnEdit:true,enableReturnKey:true,keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,font:{size:14},hintText:'Primera Pareja',width:100,height:75,left:10,center:{y:50},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	var Punto2 = Ti.UI.createTextField({clearOnEdit:true,enableReturnKey:true,keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,font:{size:14},hintText:'Segunda Pareja',width:100,height:75,right:10,center:{y:50},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	

	win_apuntes.add(Punto1);
	win_apuntes.add(Punto2);

//creamos el tableview1
			var tableview = Ti.UI.createTableView({
			minRowHeight : 60,
			maxRowHeight : 70,
			editable : false,
			//data: [section1,section2],
			width:'100%',
			top : 100
			
			});



win_apuntes.add(tableview);	

var jugada_id = 1;
tableview.setData(getTableData(jugada_id));




Ti.App.addEventListener('app:updateTables', function() {
		tableview.setData(getTableData(Jugada_id));
	});


Punto1.addEventListener("return",function(e){
	insdata(jugada_id,Punto1.value,Punto2.value);
	tableview.setData(getTableData(jugada_id));
	
	
		
	});
	
Punto2.addEventListener("return",function(e){
	insdata(jugada_id,Punto1.value,Punto2.value);
	tableview.setData(getTableData(jugada_id));
	
	
		
	});
	
	
return win_apuntes;
};


var insdata = function(_id,punto1,punto2){
	
	var db = require('db');
	
	var resultado = db.insapuntes(_id,punto1,punto2);
	
	
};




var getTableData = function(Jugada_id) {
	var db = require('db');
	var data = [];
	var data1 = []; //new
	var data2 = []; //new
	var section = Ti.UI.createTableViewSection({headerTitle :'Pareja1',}); //new
	var section2 = Ti.UI.createTableViewSection({headerTitle :'Pareja2'}); //new
	var row = null;
	var todoapuntes = db.selectapuntes(Jugada_id);
	
	for (var i = 0; i < todoapuntes.length; i++) {
		
		if (todoapuntes[i].item > 0 || todoapuntes[i].item == !null ) {
			
			data1[i] = Ti.UI.createTableViewRow({
			id: todoapuntes[i].id,
			title: todoapuntes[i].item,
			color: '#000',
			font: {
				fontWeight: 'bold'	
			}
		});
			section.add(data1[i]); //new
		};
		
	
		if (todoapuntes[i].item2 > 0 || todoapuntes[i].item2 == !null ) {
			
			data2[i] = Ti.UI.createTableViewRow({ //new
			id: todoapuntes[i].id,
			title: todoapuntes[i].item2,
			color: '#000',
			font: {
				fontWeight: 'bold'	
			}
		});
		section2.add(data2[i]); //new
		};
		
		//data.push(row);
		
		
		
		
		data[0] = section;
		data[1]= section2;
		
	}
	return data;
};

