var timeout;
const scroll = new LocomotiveScroll({

    el: document.querySelector('#main'),
    smooth: true
});


function shrinkcircle(){

    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    document.addEventListener("mousemove",function(dets){
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        mouse(xscale,yscale);

    
    });
}



var c =document.querySelector("#cursor")

function mouse(xscale,yscale){
document.addEventListener("mousemove",function(dets){
c.style.left=dets.x+"px" ;
c.style.top=dets.y+"px" ;
c.style.transform = `scale(${xscale}, ${yscale})`;
})
}
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
    })
    tl.to(".boundingelem",{
        y:'0',
        ease:Expo.easeInOut,
        duration:1,
        stagger:.1,
       
        
    })
    tl.from("#footer1",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:0.5,
        stagger:.1,
       
        
    })

}


shrinkcircle();
mouse();
firstPageAnim();


document.querySelectorAll(".elem")
.forEach(function(elem){
    var diffrot=0;
    var rotate=0;

    elem.addEventListener("mousemove",function(dets){
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX
  gsap.to(elem.querySelector("img"),{
    opacity:1,
    ease:"power1",
    top:diff,
    left:dets.clientX,
    rotate:gsap.utils.clamp(-20,20,diffrot)
   
  })
    })
})
document.querySelectorAll(".elem")
.forEach(function(elem){
   

    elem.addEventListener("mouseleave",function(dets){
      
  gsap.to(elem.querySelector("img"),{
    opacity:0,

   
  })
    })
})
