
 
    var slide = $('.container-2 .row-2 > div');
    var img = slide.eq(0).find('.item');

    var i=1;
    var x = 400;

    var btn = slide.eq(1).find('button');
    var k = 0;


    //caruosel-indicator 
  function slider(){
 
    var img = slide.find('.item');
   
    [...img].forEach(e => {
          e.style.transform = `translateX(${0}px)`
    })
    setTimeout(()=>{
        [...img].forEach(e => {
            e.style.transform = `translateX(-${x}px)`
      })

         slide[0].innerHTML = img[i+1].outerHTML+img[i+2].outerHTML+img[i+0].outerHTML+img[i+1].outerHTML;

          }, 1000);

    [...btn].forEach(e =>{
        e.innerHTML = `<img src='Assets/2.svg'>`
    })
    k++;
    btn.eq(k).find('img').attr('src', 'Assets/1.svg');
    
    if(k==2)
     k=-1;
  }

var start = setInterval(slider, 2000);
   
slide[0].addEventListener('mouseover', ()=>{
 clearInterval(start);
})

slide[0].addEventListener('mouseout', ()=>{
     start = setInterval(slider, 2000);
 })


//container-2
var c2 = $('.container-2 .row-2 .item'); 
[...c2].forEach(e=>{
    e.innerHTML = e.innerHTML + `<div class="carousel-caption">
                        <div><img src="Assets/icon.svg" alt="..."></div>
                        <div>WEB DEVELOPMENT</div>
                        <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                        <button type="button" onclick='window.location.href="https://fylehq.com"' >Read More &nbsp&nbsp <img src='Assets/arrow.svg'> </button>
                    </div>`
})


//container-3
var c3 = $('.container-3 .card-items-1 .row-2 .item');
[...c3].forEach(e=>{
    e.onclick=()=>{
        [...c3].forEach( e => {
            e.style.cssText = 'background-color: #F6F6F6; color: black';

        })
        e.style.cssText = 'background-color: rgb(255, 49, 71); color: white';
        $('.container-3 .card-items-1 img')[0].src=`Assets/image@${e.dataset.item}.png`;
    }
})



var ip = $('.contact-form .grid-container input');
var lb = $('.contact-form .grid-container label');

function label_in(e){
    if (e.target.value.length == 0){
        var lb_val=e.target.dataset.value;
        lb[lb_val].style.cssText = 'transform: translateY(0px) Scale(1)';
        lb[lb_val].innerHTML =  lb[lb_val].innerHTML.replace("*","");
        lb[lb_val].innerHTML =  lb[lb_val].innerHTML+"*";
      }
    }
function label_out(e){
    var lb_val=e.dataset.value;
    lb[lb_val].style.cssText = `transform: translateY(-20px)  Scale(0.9);`;
    lb[lb_val].innerHTML =  lb[lb_val].innerHTML.replace("*","");
}

[...ip].forEach(element => {
    element.onclick = ()=>{
      label_out(element)
      element.removeEventListener('focusout', label_in)
      element.addEventListener('focusout', label_in)
    }
})


function clear_form(){
    [...ip].forEach(e => {
        if (e.value.length != 0){
        var lb_val=e.dataset.value;
        lb[lb_val].style.cssText = 'transform: translateY(0px) Scale(1)';
        lb[lb_val].innerHTML =  lb[lb_val].innerHTML.replace("*","");
        lb[lb_val].innerHTML =  lb[lb_val].innerHTML+"*";
        }
    });

    [...form.find('input[type="text"], input[type="email"]')].forEach(e=>{
                e.value="";
             })
    form.find('input[type="checkbox"]')[0].checked = false;
}




var cnt = $('.container-1 .elem-1 button');
var form = $('.contact-form');

cnt[0].onclick = ()=>{
     form[0].style.display=`flex`;
     document.documentElement.style.overflow='hidden';
}
var close_form = $('.contact-form > :nth-child(3)');
close_form[0].onclick = () => {
    form[0].style.display=`none`;
    document.documentElement.style.overflow='auto';
    clear_form();
}

   
