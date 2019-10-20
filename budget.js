 var income=0,expenses=0,total=0,v1,v2,c=1;
 document.getElementById("total").innerHTML=total;

 
function budget()
		{	
			 var x = document.getElementById("val").value;
  if (x =='') {
    alert("value must be filled out");
    return false;
  }
			
			if(document.getElementById("sel").value=='+')
			{
			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des1").appendChild(newp);
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#val').value;
				document.getElementById("val1").appendChild(newp);
				income+=parseInt(document.getElementById("val").value);
				document.getElementById("ti").innerHTML="+"+income;
				var btn=document.createElement('button');
				btn.innerHTML='-';
				document.getElementById("cross1").appendChild(btn);
				var newline=document.createElement('p');
				document.getElementById("cross1").appendChild(newline);
				
				
			}
			else
			{

			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des2").appendChild(newp);
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#val').value;
				document.getElementById("val2").appendChild(newp);
				expenses+=parseInt(document.getElementById("val").value);
				document.getElementById("te").innerHTML="-"+expenses;
				var btn=document.createElement('button');
				btn.innerHTML='-';
				document.getElementById("cross2").appendChild(btn);
				var newline=document.createElement('p');
				document.getElementById("cross2").appendChild(newline);
				

				
			}
			
			total=income-expenses;
			if(total>0)
			document.getElementById("total").innerHTML="+"+total;
		else
			document.getElementById("total").innerHTML=total;
			
			

			
		}

	

