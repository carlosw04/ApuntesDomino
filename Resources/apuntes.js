/// Esta es la ventana para llevar las anotaciones


var apuntes = function(){

// Creamos la ventana para retornar al tab	
var win = Ti.UI.createWindow({
	
	title:'Apuntes',
	backgroundColor : 'white'
	
		
});	
	
// Esta es una vista para probar despues	
	var vista  = Ti.UI.createScrollView({
		
		
	});
	
	
var tbl_data =[
{title:'Row 1',leftImage:'Image/KS_nav_ui.png'},
{title:'Row 2', rightImage:'Image/KS_nav_ui.png'},
{title:'Row 3', backgroundColor:'#fdd'}];
	

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
			var tableview1 = Ti.UI.createTableView({
			minRowHeight : 60,
			maxRowHeight : 70,
			editable : true,
			data: [section1,section2],
			width:'100%',
			
			});



win.add(tableview1);	

// Llenamos cada seccion con sus datos

var cargarsection = function(Jugada_id){

var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');
		
var filas = db.execute('SELECT * FROM Apuntes WHERE JugadaId =' + Jugada_id);
		
		
		//iteramos cada resultado
		while(filas.isValidRow()) {

						
			var arreglo1 = [];
			
			var arreglo2 = [];
						
			//Creamos los row para cada seccion
			    var row = Ti.UI.createTableViewRow({
				height : 'auto',
				textAlign : 'left',
				width : '100%',
				style: Ti.UI.INPUT_BUTTONMODE_ONBLUR
				
			});	
			
			//asignamos el id a cada fila
			row.Jugada_id = filas.fieldByName('JugadaId');				
						
								
				//Llenar la primera seccion de datos
				var punto1 = Ti.UI.createLabel({
				title:filas.fieldByName('Puntos_P1'),
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
	
			
				//Llenar la segunda seccion de datos
				section2.add(Ti.UI.createTableViewRow({
				title:filas.fieldByName('Puntos_P2'),
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
			}));
			
			
			//arreglo1.push(section1);
			
			row.add(punto1);
			
			arreglo1.push(row);
			
			filas.next();

}
		
	filas.close();
	db.close();

	section1.add(arreglo1);
	tableview1.data=[section1,section2];
	//tableview1.data = arreglo1;
};

	


//creamos el tableview2
	var tableview2 = Ti.UI.createTableView({
		minRowHeight : 60,
		maxRowHeight : 70,
		editable : true,
		width:'50%',
		
	});




win.addEventListener('focus', function(e) {
		//cargamos la lista
		cargarsection(1);
	});
	
	
return win;
};
