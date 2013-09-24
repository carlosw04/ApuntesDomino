Titanium.include('insertar.js','listar.js');
	
	var win = Ti.UI.createWindow({
	
		backgroundColor : 'green',
		borderColor : "red",
		borderWidth : 5
		
	
	});



var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
	
	var win1 = insertarWin();

	var win2 = Ti.UI.createWindow({
	
		title : "tab2",
		backgroundColor : "black"
	
	
	
	});

var tabgroup = {};

(function() {
		var AppTabGroup = require('ui/tabs').AppTabGroup;
			Window = require('Home').ListWindow;
			//AddWindow = require('ui/AddWindow').AddWindow;




	 tabgroup.tabs = new AppTabGroup({
		title:"Cosa",
		icon: 'KS_nav_ui.png',
		window: new Window({
					title: 'Apuntes',
					backgroundColor: 'gray',
					//navBarHidden: false,
					isDone: 0,
					activity: {
						onCreateOptionsMenu: function(e) {
							var menu = e.menu;
						    var menuItem = menu.add({ title: "Add Task" });
						    menuItem.setIcon("ic_menu_add.png");
						    menuItem.addEventListener("click", function(e) {
						    new AddWindow().open();
						    });
						}
					}
			
		})
	
	
	
	},
{
		title: 'Done',
		icon: 'KS_nav_views.png',
		window: win1,
			
	
	
}
			
);

tabgroup.tabs.open();
})();
	



//win.open();
