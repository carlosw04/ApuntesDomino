//incluimos demas ventanas y utilidades
Titanium.include('insertar.js');

// background color del master window
Titanium.UI.setBackgroundColor('#fff');

// creamos el tabgroup
var tabGroup = Titanium.UI.createTabGroup();

//
// creamos el tab principal y le asignamos la ventana de insertar
//
var win1 = insertar();

var win = Ti.UI.createWindow();

var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Insertar',
    window:win1
});

//
// creamos otro tab y le asignamos la ventana de listar
//
//var win2 = listarWin();

var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'Listar',
    window:win
});

//
//  agregamos los tabs al tabgroup
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);  

// abrimos el tabgroup
tabGroup.open();