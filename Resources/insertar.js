
var insertar = function(){
	
	var win = Ti.UI.createWindow({
		
		title: 'Insertar',
		backgroundColor : '#fff'
		
	});
	

	var vista = Ti.UI.createScrollableView({backgroundColor : 'transparent', width: 320 ,height:480,top:5 });
	//////////////// mia 
	var imgculo = Ti.UI.createImageView({
		url : 'data:image/jpeg;base64,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'
		
	});
	
	var winculo =Ti.UI.createScrollableView({backgroundColor : 'transparent', width: 320 ,height:480,top:5 });
	
	winculo.add(imgculo);
	
	////////////// tuya
	
	
	win.add(vista);
	win.add(winculo);
	
	//logo
	var logo = Ti.UI.createImageView({
		image : 'Image/logo.png',
		width : 128,
		height : 88,
		top : 10,
		center:{x:(win.width/2),y:320}
	});
	
	win.add(logo);
	
	// Creamos Los FieldSet para meter los datos :D
	
	var Pareja1 = Ti.UI.createTextField({clearOnEdit:true,autocorrect:true, hintText:'Primera Pareja',width:300,height:75,top:110,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	var Pareja2 = Ti.UI.createTextField({clearOnEdit:true,autocorrect:true, hintText:'Segunda Pareja',width:300,height:75,top:190,left:10,borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
	
	vista.add(Pareja1);
	vista.add(Pareja2);
	
	
		//creamos el boton de insertar
	var insertar_btn = Ti.UI.createButton({title:'Insertar', width:200,height:70,center:{x:(win.width/2),y:320},borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED});
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
       