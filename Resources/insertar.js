
var insertar = function(){
	
	var win = Ti.UI.createWindow({
		
		title: 'Insertar',
		backgroundColor : '#fff'
		
	});
	
//////////
var view1 = Ti.UI.createView({ backgroundColor:'#123' });
var view2 = Ti.UI.createView({ backgroundColor:'#246' });
var view3 = Ti.UI.createView({ backgroundColor:'#48b' });
 
var culo = Ti.UI.createImageView({image:'http://static.informe21.com/cdn/farfuture/0M7GNaWnJASSqZp57tStGkQbs2xzuo4aAVA-f7MO8j4/mtime:1354562679/sites/default/files/imagecache/600x400/images/culo-brasil-miss-bumbum-2012-carine-6.jpg'});
var culo2 = Ti.UI.createImageView({image:'http://deadfix.com/wp-content/uploads/2011/09/culo.png'});



view2.add(culo);
view3.add(culo2);
//////////
	var vista = Ti.UI.createScrollableView({
		backgroundColor : 'transparent', 
		//width: 320 ,
		//height:480,
		//top:5,
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
       