
      
 var i=0;
        
  var arr=[];
  var pro;
  var undo=[];
  var it;
  function AddTask()
  {  
      var tnm = document.getElementById('tn').value;
      var lab = document.getElementById('lab').value;
      var dl = document.getElementById('dl').value;
      var pri = document.getElementById('pri').value;
      var des = document.getElementById('des').value;
      
      var H=new Date().getHours();
      var M=new Date().getMinutes();
      var S=new Date().getSeconds();
    
     
      var labv= '<select><option>Add Label</option><option>Content</option><option>Design</option><option>Research</option><option>Meeting</option></select>';
       var table = document.getElementById('section2').innerHTML;
       var t = `<div id ='${i}' class='tasks'>
     <br> <span id='sp1'>#${tnm}</span> <br> <span id='sp2'>Deadline: ${dl}</span> <span id='sp3'>Priority: ${pri}</span> <span id='sp4'>Label: ${labv}</span> <span id='st'>Time Remaining: <span id='dte'></span></span><br>
      <br><div>${des}</div><button id = 'comp' onclick='completeTasks(${i})'>Completed</button><button id='del' onclick='deleteTasks(${i})'>Delete</button>
      </div>`;
     
      table = t + table;
      document.getElementById('section2').innerHTML=table;
      document.getElementById(`${i}`).querySelector('select').value=lab;
      
      arr.push(lab)
      
      while(undo.length>0)
      {
          undo.pop();
      }
      document.getElementById('ud').disabled = true;
                   
       document.getElementById('tn').value = '';
       document.getElementById('lab').value = 'Add Label';
       document.getElementById('dl').value = '';
       document.getElementById('pri').value = 'Normal';
       document.getElementById('des').value = '';            

       for(let j=i;j>=0;j--)
       {
        document.getElementById(j).querySelector("select").value=arr[j];
        
       }
      

      i++;
  
      calc();
      taskprogress();
    
  }  
  function calc()
  {  
      clearInterval(it);
      it = setInterval(()=> {

      for(let j=0;j<arr.length;j++)
      {var x=document.getElementById(j).querySelector('#sp2').innerHTML;
         console.log(x);
      var dl = new Date(x);
      var CurrTime = new Date();
      var diffD = Math.floor(dl-CurrTime);
      var diffD = Math.ceil(diffD / (1000 * 60 * 60 * 24));
   
      console.log(diffD);
      try{
      if(diffD>1)
      {
      document.getElementById(j).querySelector('#dte').innerHTML=diffD +" Day(s)";
     }
     else
     {
      let H = CurrTime.getHours();
      let M = CurrTime.getMinutes();
      let S = CurrTime.getSeconds(); 

      document.getElementById(j).querySelector('#dte').innerHTML= (23-H)+':'+(59-M)+':'+(59-S) ;            
     }
       } catch(error)
       {
          console.log(error)
       }
     }
  },1000);
  }
  function completeTasks(e)
  {
    var x=document.getElementById(e);
      x.style.backgroundColor='yellowgreen';
      x.querySelector('div').style.backgroundColor='azure';
      x.querySelector('#st').innerHTML=x.querySelector('#dte').innerHTML + " Time Left";
      
      taskprogress();

  }

  function deleteTasks(e)
  {   
      document.getElementById('ud').disabled = false;
      document.getElementById(e).hidden=true;
      taskprogress();
      undo.push(e);
  
  }

   var pro;
  function taskprogress()
  {   var s=document.getElementById('span1');
      var x = document.getElementsByClassName('tasks');
      let y=0,z=0;
    for(let j=0;j<arr.length;j++)
    { 
      if(x[j].style.backgroundColor=='yellowgreen' && x[j].hidden!=true )
      {
          y++;
      }
     if(x[j].hidden!=true)
      {
        z++;
      }
    }
   var t= 100 * (y/z);
  var k=document.getElementById('meter').value;
   if(k>t)
   {
      clearInterval(pro);
       pro= setInterval(()=>{
          if(k<=t)
          {
              clearInterval(pro);
          }
          document.getElementById('meter').value=k;
          s.innerHTML=k+'% Completed';
          k--;
      },10)
      
   }
   else if(k<=t)
   {
      clearInterval(pro);
       pro= setInterval(()=>{
          if(k>=t)
          {
              clearInterval(pro);
          }
          document.getElementById('meter').value=k;
          s.innerHTML=k+'% Completed';
          k++;
      },10 )
      
   }
  }

  function callundo()
  {
     
      if(document.getElementById(undo[undo.length-1]).hidden=true);
      {
          document.getElementById(undo[undo.length-1]).hidden=false;
         
      }
     
      undo.pop();
  
      if(undo.length==0)
      {
          document.getElementById('ud').disabled = true;
      }
      taskprogress();
    }
        
       
       