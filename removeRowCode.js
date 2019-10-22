function removeRowInAdditionDisb() {   
	 var table = document.getElementById("gridTable");
	    var rowCount = table.rows.length;
	 var chk =document.getElementsByName("chk"); 
	 var count=0;
	 for(var j=1;j<rowCount;j++){
		 if(document.getElementById("chk"+j).checked==true){
			 count=count+1;
			 }
	 }
	
if(count==0){
	alert("Please Select at least one row to delete");
}else{

 
  
  for(var i=1; i<rowCount; i++) {
  	var row = table.rows[i];
      var chkbox = row.cells[0].childNodes[0];
       if(null != chkbox && true == chkbox.checked) 
      	{
      	 table.deleteRow(i);
          rowCount--;
          i--;
      }               
  }
}
}
