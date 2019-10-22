
   				var table = document.getElementById("gridTable");

   				var rowCount = table.rows.length;
   				var row = table.insertRow(rowCount);
   				row.setAttribute('className','white1' );
   			    row.setAttribute('class','white1' );
   				var cell1 = row.insertCell(0);
   				var element1 = document.createElement("input");
   				element1.type = "checkbox";
   				element1.name = "chk";
   				element1.id = "chk"+rowCount;
   				cell1.appendChild(element1);

   				var cell2 = row.insertCell(1);
   				var element2 = document.createElement("input");
   				element2.type = "text";
   				element2.name = "fromInstall";
   				element2.id = "fromInstallment"+rowCount;
   				element2.setAttribute('class','text');
   				element2.setAttribute('className','text' );
   				cell2.appendChild(element2);
   				
   				var cell3 = row.insertCell(2);
   				var element3 = document.createElement("input");
   				element3.type = "text";
   				element3.name = "toInstall";
   				element3.id = "toInstallment"+rowCount;
   				element3.setAttribute('class','text');
   				element3.setAttribute('className','text' );
   				cell3.appendChild(element3);
   				
   				var cell4 = row.insertCell(3);
   				var element4 = document.createElement("input");
   				element4.type = "text";
   				element4.name = "recoveryPer";
   				element4.value = "0";
   				element4.id = "recoveryPercen"+rowCount;
   				element4.setAttribute('class','text');
   				element4.setAttribute('className','text' );
   				element4.setAttribute('readonly','true' );
   				cell4.appendChild(element4);
   				
   				
   				var cell5 = row.insertCell(4);
   				var element5 = document.createElement("input");
   				element5.type = "text";
   				element5.name = "principalAmount";
   				element5.id = "principalAmount"+rowCount;
   				element5.setAttribute('class','text');
   				element5.setAttribute('className','text' );
   				cell5.appendChild(element5);
   				
   				
   				var cell6 = row.insertCell(5);
   				var element6 = document.createElement("input");
   				element6.type = "text";
   				element6.name = "installmentAmount";
   				element6.value = "0";
   				element6.id = "installmentAmount"+rowCount;
   				element6.setAttribute('class','text');
   				element6.setAttribute('className','text' );
   				element6.setAttribute('readonly','true' );
   				cell6.appendChild(element6);
   				
   			
