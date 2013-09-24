exports.ListWindow = function(args) {
	
	var AddWindow = require('ui/AddWindow').AddWindow;
	var self = Ti.UI.createWindow(args);
	var Windows = Ti.UI.createTableView();
	var isDone = args.isDone;
	
	//tableview.setData(getTableData(isDone));
	
	
	self.add(Windows);
	
	
	var addBtn = Ti.UI.createButton({
				title:'+'
			});
			addBtn.addEventListener('click', function() {
				new AddWindow().open();
			});
	
	
	return self;
};