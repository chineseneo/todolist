describe("todoItem", function() {
	it("should be able to create a todoItem with a description", function() {
		var todoItem = new TodoItem("first todoItem");
		expect(todoItem.description).toBe("first todoItem");
	});

	it("should be able to render todoItem", function() {
		var todoItem = new TodoItem("todoItem to be rendered");
		expect(todoItem.render()).toBe('<li>todoItem to be rendered <a href="#" class="removeTodoItem">remove</a></li>');
	});
});