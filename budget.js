 var income=0,expenses=0,total=0,v1,v2,c=0,d=0;
 document.getElementById("total").innerHTML=total;
 function reset()
 {
 	document.getElementById("des").value="";
 	document.getElementById("val").value="";
 }
     
 
function removeE(e){
				var  last=e.target.id;
				var parts=last.split('_',2)
				var lastUnder = parts[1];
				var beforeUnder=parts[0];
				
				if(beforeUnder=="but")
				{
					var newdesc='desc_'+lastUnder;
					var newvalu='valu_'+lastUnder;
					var newbut='but_'+lastUnder;
					
					
					var x = document.getElementById(newbut);
					var y = document.getElementById(newdesc);
					var z = document.getElementById(newvalu);
					
					/*document.getElementById('desc'+lastChar).innerHTML = '';
					document.getElementById('valu'+lastChar).innerHTML = '';
					document.getElementById('but'+lastChar).innerHTML = '';*/
					income-=parseInt(document.getElementById(newvalu).innerHTML);
					document.getElementById("ti").innerHTML="+"+income;
				
					x.remove();
					y.remove();
					z.remove();
							
					
					
				}
				else
				{
						
					var newdesc='expdesc_'+lastUnder;
					var newvalu='expvalu_'+lastUnder;
					var newbut='expbut_'+lastUnder;
					
					
					var x = document.getElementById(newbut);
					var y = document.getElementById(newdesc);
					var z = document.getElementById(newvalu);
					
					/*document.getElementById('desc'+lastChar).innerHTML = '';
					document.getElementById('valu'+lastChar).innerHTML = '';
					document.getElementById('but'+lastChar).innerHTML = '';*/
					expenses-=parseInt(document.getElementById(newvalu).innerHTML);
					document.getElementById("te").innerHTML="+"+expenses;
					x.remove();
					y.remove();
					z.remove();
							
					
					
					
				
				}

					
				total=income-expenses;
			if(total>0)
			document.getElementById("total").innerHTML="+"+total;
		else
			document.getElementById("total").innerHTML=total;
					return false;

					
					
				}
 
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
				newp.setAttribute('id','desc_'+c);
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des1").appendChild(newp);
				var newp1=document.createElement('p');
				newp1.setAttribute('id','valu_'+c);
				newp1.textContent=document.querySelector('#val').value;
				document.getElementById("val1").appendChild(newp1);
				income+=parseInt(document.getElementById("val").value);
				document.getElementById("ti").innerHTML="+"+income;
				var btn=document.createElement('button');
				btn.setAttribute('id','but_'+c);
				btn.innerHTML='-';

				document.getElementById("cross1").appendChild(btn);
				btn.onclick=function(e)
				{
					removeE(e);
				};
				var newline=document.createElement('p');
				document.getElementById("cross1").appendChild(newline);
				c++;
				
			}
			else
			{

			
			
				var newp=document.createElement('p');
				newp.setAttribute('id','expdesc_'+d);
				newp.textContent=document.querySelector('#des').value;
				document.getElementById("des2").appendChild(newp);
				var newp1=document.createElement('p');
				newp1.setAttribute('id','expvalu_'+d);
				newp1.textContent=document.querySelector('#val').value;
				document.getElementById("val2").appendChild(newp1);
				expenses+=parseInt(document.getElementById("val").value);
				document.getElementById("te").innerHTML="-"+expenses;
				var btn=document.createElement('button');
				btn.setAttribute('id','expbut_'+d);
				btn.innerHTML='-';
				document.getElementById("cross2").appendChild(btn);
				btn.onclick=function(e)
				{
					removeE(e);
				};
				var newline=document.createElement('p');
				document.getElementById("cross2").appendChild(newline);
				d++;

				
			}
			
			total=income-expenses;
			if(total>0)
			document.getElementById("total").innerHTML="+"+total;
		else
			document.getElementById("total").innerHTML=total;
			
			

			
		}

	

