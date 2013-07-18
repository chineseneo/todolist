describe("todoItem", function() {
	it("should be able to create a todoItem with a description", function() {
		var todoItem = new TodoItem("first todoItem");
		expect(todoItem.description).toBe("first todoItem");
	});
});