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

var section1 = Ti.UI.createTableViewSection({headerTitle:'Pareja1'});


// Creamos la segunda seccion para la segunda pareja

var section2 = Ti.UI.createTableViewSection({headerTitle:'Pareja2'});


// Llenamos cada seccion con sus datos

var cargarsection = function(){

var db = Ti.Database.install('ApuntesDomino.sqlite', 'ApuntesDomino');
		
var filas = db.execute('SELECT * FROM Jugadas');
		
		
		//iteramos cada resultado
		while(filas.isValidRow()) {

				section1.add(Ti.Ui.createTableViewRow({
					
					title: filas.fieldByName('JugadaId')
					
				}));
				
								
				//Llenar la primera seccion de datos
				section1.add(Ti.UI.createTableViewRow({
				title:filas.fieldByName('Name1'),
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
	
			
				//Llenar la segunda seccion de datos
				section2.add(Ti.UI.createTableViewRow({
				title:filas.fieldByName('Name2'),
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
			
			
			
			
			filas.next();

}
		
	filas.close();
	db.close();

	tableview1.data=[section1,section2];
};

	

//creamos el tableview1
	var tableview1 = Ti.UI.createTableView({
		minRowHeight : 60,
		maxRowHeight : 70,
		editable : true,
		data: [section1,section2],
		width:'100%',
			
	});

//creamos el tableview2
	var tableview = Ti.UI.createTableView({
		minRowHeight : 60,
		maxRowHeight : 70,
		editable : true,
		width:'50%',
		
	});

win.add(tableview1);	


win.addEventListener('focus', function(e) {
		//cargamos la lista
		cargarsection();
	});
	
	
return win;
};
