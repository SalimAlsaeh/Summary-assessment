
function addItem(){
	var color = document.getElementById('color').value;
	var ul = document.getElementById('list');
	if (color === 'red' || color === 'blue' || color === 'yellow') {
		var listItem = document.createElement('li');
		listItem.innerText = 'item';
		listItem.setAttribute('class', color);
		ul.append(listItem);
		console.log(listItem);
	}
}