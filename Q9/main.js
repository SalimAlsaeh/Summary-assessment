
$('#create').on('click', function(){
	var list = $('#list');
	var listItem = $('<li>')
	var ifFirstChecked = $("#i1").prop('checked');
	var ifSecondChecked = $("#i2").prop('checked');
	var ifThirdChecked = $("#i3").prop('checked');

	if (ifFirstChecked && ifSecondChecked && ifThirdChecked) {
		listItem.text('black');
		listItem.addClass('black');
		list.append(listItem);
	} else if (ifFirstChecked && ifSecondChecked || ifFirstChecked && ifThirdChecked || ifThirdChecked && ifSecondChecked) {
		listItem.text('(purple = blue + red), (green = blue + yellow), (orange = red + yellow)');
		listItem.addClass('purple');
		list.append(listItem);
	} else if (ifFirstChecked || ifSecondChecked || ifThirdChecked) {
		listItem.text('(yellow, blue or red)');
		listItem.addClass('red');
		list.append(listItem);
	}
});

$('#delete').on('click', function(){
	
	var ifFirstChecked = $("#i1").prop('checked');
	var ifSecondChecked = $("#i2").prop('checked');
	var ifThirdChecked = $("#i3").prop('checked');

	if (ifFirstChecked && ifSecondChecked && ifThirdChecked) {
		$('li').empty();
	} else if (ifFirstChecked && ifSecondChecked || ifFirstChecked && ifThirdChecked || ifThirdChecked && ifSecondChecked) {
		$('li').remove();
	} else if (ifFirstChecked || ifSecondChecked || ifThirdChecked) {
		$('ul').remove();
	}
});

// /Using jQuery run a function that gets called using the button's id (#create)
//   //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
//   //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
//   //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
//   //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
//   //Using jQuery call a function from the button's id (#delete)
//   //The function removes all the elements from the unordered list based on the checkboxes as the previous function
//   //Use jQuery as much as you can in selecting elements and other tasks
//   