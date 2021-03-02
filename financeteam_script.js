function edit_row(no) {
	document.getElementById("edit_button" + no).style.display = "block";
	document.getElementById("save_button" + no).style.display = "block";
	document.getElementById("budget_row" + no).style.display = "block";
  var budget = document.getElementById("budget_row" + no);
  var budget_data = budget.innerHTML;

budget.innerHTML = "<input type='text' id='budget_text" + no + "' value='" + budget_data + "'>";
}

function save_row(no) {

	var budget_val = document.getElementById("budget_text" + no).value;
    document.getElementById("budget_row" + no).innerHTML = budget_val;
    
    document.getElementById("budget_row" + no).style.display = "block";
	document.getElementById("edit_button" + no).style.display = "block";
	document.getElementById("save_button" + no).style.display = "block";
}


localStorage.setItem("myData", "test")

var myDataTest = localStorage.getItem("myData")