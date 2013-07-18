$(document).ready(function() {
	$("#addTodoItem").click(function() {
		var todoItem = new TodoItem($("#todoItemDescription").val());
		if (todoItem.description === "") {
			return;
		}
		$("#todoList ul").prepend(todoItem.render());
		$(".removeTodoItem").on('click', function() {
			$(this).closest('li').remove();
		});
	});
})