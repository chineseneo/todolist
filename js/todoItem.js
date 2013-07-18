function TodoItem(description) {
	this.description = description;
}

TodoItem.prototype.render = function() {
	return '<li>' + this.description + ' <a href="#">remove</a></li>';
}