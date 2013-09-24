var insertarWin = function() {

	//creamos la ventana
	var win = Titanium.UI.createWindow({
		title : 'Insertar',
		backgroundColor : '#fff'
	});

	var vista = Ti.UI.createScrollView({backgroundColor : 'transparent',width:320,height:480,top:5});
	win.add(vista);

	//logo de developers.do
	var logo = Ti.UI.createImageView({
		image : 'images/logo.png',
		width : 128,
		height : 88,
		top : 300,
		center:{x:(win.width/2),y:50}
	});

	vista.add(logo);

	//creamos los textfields
	var equipo1 = Ti.UI.createTextField({hintText:'Pareja 1',height:30, width:300,top:130,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	vista.add(equipo1);

	var equipo2 = Ti.UI.createTextField({hintText:'Pareja 2',height:30, width:300,top:170,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	vista.add(equipo2);

	

	//creamos el boton de insertar
	var insertar_btn = Ti.UI.createButton({title:'Insertar', width:200,height:40,center:{x:(win.width/2),y:320},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	vista.add(insertar_btn);

	//click
	insertar_btn.addEventListener('click',function(e){
		if(equipo1.value == '' || equipo2.value == ''){
			alert('Favor llenar el Nombre y el Apellido.');
			return;
		}

		//insertamos dev en la bd
		insertarDev({
			Name1:equipo1.value,
			Name2:equipo2.value,
			
		});
	});

	win.addEventListener('focus', function(e) {
		vista.scrollTo(0, -5);
	});
	equipo1.addEventListener('blur',function(e){
		vista.scrollTo(0, -5);
	});
	equipo2.addEventListener('blur',function(e){
		vista.scrollTo(0, -5);
	});
	
	vista.addEventListener('scroll',function(e){
		if(e.dragging){
			win.fireEvent('focus');
		}
	});

	//retornamos el objeto de la ventana
	return win;