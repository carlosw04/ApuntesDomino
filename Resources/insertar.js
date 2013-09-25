
var insertar = function(){
	
	var win = Ti.UI.createWindow({
		
		title: 'Insertar',
		backgroundColor : '#fff'
		
	});
	

	var vista = Ti.UI.createScrollableView({backgroundColor : 'transparent', width: 320 ,height:480,top:5 });
	
	win.add(vista);
	
	//logo
	var logo = Ti.UI.createImageView({
		image : 'Image/logo.png',
		width : 128,
		height : 88,
		top : 300,
		center:{x:(win.width/2),y:75}
	});
	
	win.add(logo);
	
	// Creamos Los FieldSet para meter los datos :D
	
	var Pareja1 = Ti.UI.createTextField({hintText:'Primera Pareja',width:300,height:30,top:130,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	var Pareja2 = Ti.UI.createTextField({hintText:'Segunda Pareja',width:300,height:30,top:170,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	
	vista.add(Pareja1);
	vista.add(Pareja2);
	
	
		//creamos el boton de insertar
	var insertar_btn = Ti.UI.createButton({title:'Insertar', width:200,height:40,center:{x:(win.width/2),y:320},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	vista.add(insertar_btn);

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
       