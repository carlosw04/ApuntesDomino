

var insertar = function(){

Ti.App.JugadaAct = jx();
	
	var win = Ti.UI.createWindow({
		
		title: 'Insertar',
		backgroundColor : '#fff',
		width: '100%' ,
		height:'auto'
		
	});
	
/////////// prueba

var listView = Ti.UI.createListView();
var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Fruits'});
var fruitDataSet = [
    {properties: { title: 'Apple'}},
    {properties: { title: 'Banana'}},
];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

var vegSection = Ti.UI.createListSection({ headerTitle: 'Vegetables'});
var vegDataSet = [
    {properties: { title: 'Carrots'}},
    {properties: { title: 'Potatoes'}},
];
vegSection.setItems(vegDataSet);
sections.push(vegSection);

listView.sections = sections;


var fishSection = Ti.UI.createListSection({ headerTitle: 'Fish'});
var fishDataSet = [
    {properties: { title: 'Cod'}},
    {properties: { title: 'Haddock'}},
];
fishSection.setItems(fishDataSet);
listView.appendSection(fishSection);

////////// prueba
var view1 = Ti.UI.createView({ backgroundColor:'#123',height:Titanium.Platform.displayCaps.platformHeight});
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });
 
var culo = Ti.UI.createImageView({image:'http://static.betazeta.com/www.ferplei.com/up/2011/03/hincha11.jpg'});
var culo2 = Ti.UI.createImageView({image:'http://deadfix.com/wp-content/uploads/2011/09/culo.png'});

var labelact = Ti.UI.createLabel({
	text: 'Esta es la Partida' + Ti.App.JugadaAct,
	top : 100,
	right : 40
		
});
view2.add(labelact);
//view2.add(culo);
view3.add(listView);
//////////
	var vista = Ti.UI.createScrollableView({
		backgroundColor : 'transparent', 
		width: '100%' ,
		height:'100%',
		layout:'vertical',
		showPagingControl: true,
		views: [view1,view2,view3]
		
		
		 });
	
	win.add(vista);
	
	
	//logo
	var logo = Ti.UI.createImageView({
		image : 'Image/logo.png',
		width : 128,
		height : 88,
		top : 20,
		center:{x:(win.width/2),y:320}
	});
	
	//win.add(logo);
	view1.add(logo);
	
	// Creamos Los FieldSet para meter los datos :D
	
	var Pareja1 = Ti.UI.createTextField({clearOnEdit:true,autocorrect:true, hintText:'Primera Pareja',width:300,height:75,center:{x:(win.width/2),y:200},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	var Pareja2 = Ti.UI.createTextField({clearOnEdit:true,autocorrect:true, hintText:'Segunda Pareja',width:300,height:75,center:{x:(win.width/2),y:300},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	
	view1.add(Pareja1);
	view1.add(Pareja2);
	
	
		//creamos el boton de insertar
	var insertar_btn = Ti.UI.createButton({title:'Insertar', width:200,height:70,center:{x:(win.width/2),y:380},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	view1.add(insertar_btn);
	
	
	

	//click
	insertar_btn.addEventListener('click',function(e){
		if(Pareja1.value == '' || Pareja2.value == ''){
			alert('Favor llenar el Nombre de las Parejas.');
			return;
		}
		
		
		//insertamos dev en la bd
		
		insertarjugador({
			Name1:Pareja1.value,
			Name2:Pareja2.value,
			
		});
		
			
		
		
	});

	win.addEventListener('focus', function(e) {
		vista.scrollToView(0, -5);
	});
	Pareja1.addEventListener('blur',function(e){
		vista.scrollToView(0, -5);
	});
	Pareja2.addEventListener('blur',function(e){
		vista.scrollToView(0, -5);
	});
	
	vista.addEventListener('scroll',function(e){
		if(e.dragging){
			win.fireEvent('focus');
		}
	});

	//retornamos el objeto de la ventana
	return win;
	

};
       


 var jx =function(){
	
	var db = require('db');
	
	var resultado = db.jugadaact();
	
	if (resultado.length > 0) {
		
	var brayan = resultado[0].id;
		
	};
	
	
	return brayan;
	
};

