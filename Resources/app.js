//incluimos demas ventanas y utilidades
Titanium.include('insertar.js','funciones.js','listar.js','apuntes.js');

//Variable global para el id de la jugada activa

//Ti.App.JugadaAct = Jugadaactiva(0);




// background color del master window
Titanium.UI.setBackgroundColor('#fff');

// creamos el tabgroup
var tabGroup = Titanium.UI.createTabGroup();

//
// creamos el tab principal y le asignamos la ventana de insertar
//

		var winxxx = Ti.UI.createWindow({
		
		title: 'XXX',
		backgroundColor : '#fff'
		
	});
	

var win1 = insertar();

var win = Ti.UI.createWindow();

var tab1 = Titanium.UI.createTab({
    icon:'Image/KS_nav_views.png',
    title:'Insertar',
    window:win1
});

//
// creamos otro tab y le asignamos la ventana de listar
//
var win2 = listar();

var tab2 = Titanium.UI.createTab({
    icon:'Image/KS_nav_ui.png',
    title:'Listar',
    window:win2
});


//
// Creamos otro tab para llevar la anotacion de las jugadas
//

var win3 = apuntes();

var tab3 = Ti.UI.createTab({
	 icon:'Image/Tab3.png',
    title:'Apuntes',
    window:win3
	
	
});




//
//  agregamos los tabs al tabgroup
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
// abrimos el tabgroup
tabGroup.open();






