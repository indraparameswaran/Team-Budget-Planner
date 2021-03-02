function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var vendor=document.getElementById("vendor_row"+no);
 var projectName=document.getElementById("projectName_row"+no);
 var managerName=document.getElementById("managerName_row"+no);
 var budget=document.getElementById("budget_row"+no);
 


 var vendor_data=vendor.innerHTML;	
 var projectName_data=projectName.innerHTML;
 var managerName_data=managerName.innerHTML;
 var budget_data=budget.innerHTML;
 
 vendor.innerHTML="<input type='text' id='vendor_text"+no+"' value='"+vendor_data+"'>";	
 projectName.innerHTML="<input type='text' id='projectName_text"+no+"' value='"+projectName_data+"'>";
 managerName.innerHTML="<input type='text' id='managerName_text"+no+"' value='"+managerName_data+"'>";
 budget.innerHTML="<input type='text' id='budget_text"+no+"' value='"+budget_data+"'>";
}

function save_row(no)
{
var vendor_val=document.getElementById("vendor_text"+no).value;
 var projectName_val=document.getElementById("projectName_text"+no).value;
 var managerName_val=document.getElementById("managerName_text"+no).value;
 var budget_val=document.getElementById("budget_text"+no).value;

 document.getElementById("vendor_row"+no).innerHTML=vendor_val;
 document.getElementById("projectName_row"+no).innerHTML=projectName_val;
 document.getElementById("managerName_row"+no).innerHTML=managerName_val;
 document.getElementById("budget_row"+no).innerHTML=budget_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
var new_vendor=document.getElementById("new_vendor").value;
 var new_projectName=document.getElementById("new_projectName").value;
 var new_managerName=document.getElementById("new_managerName").value;
 var new_budget=document.getElementById("new_budget").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='vendor_row"+table_len+"'>"+new_vendor+"</td><td id='projectName_row"+table_len+"'>"+new_projectName+"</td><td id='managerName_row"+table_len+"'>"+new_managerName+"</td><td id='budget_row"+table_len+"'>"+new_budget+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

document.getElementById("new_vendor").value="";
 document.getElementById("new_projectName").value="";
 document.getElementById("new_managerName").value="";
 document.getElementById("new_budget").value="";
}

