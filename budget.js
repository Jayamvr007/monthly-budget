 var income=0,expenses=0,total=0,v1,v2;

function budget()
		{	
			
			if(document.getElementById("sel").value=='+')
			{
			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des1").appendChild(newp);
				

			}
			else
			{

			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des2").appendChild(newp);
				
			}
			if(document.getElementById("sel").value=='+')
			{
			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#val').value;
				document.getElementById("val1").appendChild(newp);
				income+=parseInt(document.getElementById("val").value);
				document.getElementById("ti").innerHTML=income;
				

				

			}
			else
			{

			
			
				var newp=document.createElement('p');
				newp.textContent=document.querySelector('#val').value;
				document.getElementById("val2").appendChild(newp);
				expenses+=parseInt(document.getElementById("val").value);
				document.getElementById("te").innerHTML=expenses;
				
			}
			total=income-expenses;
			document.getElementById("total").innerHTML=total;

			
			

			
		}

	

