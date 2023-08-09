
let video = document.getElementById("video1");
let video2 = document.getElementById("video2");

let observer = new IntersectionObserver(function(entries) {  // for auto playing video as video comes inside the view port
  if (entries[0].isIntersecting === true) {
    video.play();
    video2.play();
  } 
}, { threshold: [0.8] });
observer.observe(video);
observer.observe(video2);




let height=400;
let width=0;
var frame1 = document.getElementById('frame1');

var frame2 = document.getElementById('frame2');
var button = document.getElementById('bue');

frame1.addEventListener('load',() => {

var img=frame1.contentDocument.getElementsByClassName('poly');
for(let i=0;i<13;i++)
{   var flag=0;
    img[i].addEventListener('click', ()=> {
        width=0;
        height=400;
    
        frame2.style.width = 0+'px';
        frame2.style.height = 400+'px';
        moveframeright();
        frame1.style.borderTopRightRadius= 0+'px';
        frame1.style.borderBottomRightRadius= 0+'px';
        frame2.style.borderBottomLeftRadius= 0+'px';
        });   
       
}

document.addEventListener("mouseover", function(event) {
  
  if (event.target!=ifr2) {

    moveframeleft();
     
     }
     
    } );
  

});



    var k,y;
    function moveframeright()
     {
       clearInterval(y);
        clearInterval(k);
        k=setInterval(myfunction,20);

         function myfunction(){
            width=width+10;
           frame2.style.width = width+'px';
           
       
           if(width>=500)
           {
               clearInterval(k);
               moveframedown();
               frame2.style.borderBottomLeftRadius= 20+'px';
           }
          }
        
          
     }


    
     function moveframeleft()
     { 
      clearInterval(y);
      clearInterval(k);
      k=setInterval(myfunctionup,20);

      function myfunctionup(){
         height=height-10;
        frame2.style.height = height +'px';
        
        if(height<=400)
        {
            clearInterval(k);
            
        }}

        y=setInterval(myfunctionleft,20)

       function myfunctionleft()
       {
        width=width-10;
        frame2.style.width = width +'px';
        
        if(width<=0)
        {
            clearInterval(y);
            frame1.style.borderTopRightRadius= 20+'px';
            frame1.style.borderBottomRightRadius= 20+'px';
        }

       }
      }
          
     
 

     function moveframedown()
     {   clearInterval(y);
        clearInterval(k);
        k=setInterval(myfunction,20);

         function myfunction(){
            height=height+10;
           frame2.style.height = height+'px';
           
           console.log('hello world');
           if(height>=700)
           {
               clearInterval(k);
          
             
           }
          }
        
     } 
