var vw = new Audio("./sounds/crash.mp3");
var va = new Audio("./sounds/kick-bass.mp3");
var vs = new Audio("./sounds/snare.mp3");
var vd = new Audio("./sounds/tom-1.mp3");
var vj = new Audio("./sounds/tom-2.mp3");
var vk = new Audio("./sounds/tom-3.mp3");
var vl = new Audio("./sounds/tom-4.mp3");


var w = document.getElementsByClassName("w drum")[0];
w.addEventListener("click",(event)=>{
    vw.play();
    w.setAttribute("class","set w drum pressed");
    setTimeout(function(){w.setAttribute("class","w drum")},200);
},false);
var a = document.getElementsByClassName("a drum")[0];
a.addEventListener("click",(event)=>{
    va.play();
    a.setAttribute("class","set a drum pressed");
    setTimeout(function(){a.setAttribute("class","a drum")},200);
},false);
var s = document.getElementsByClassName("s drum")[0];
s.addEventListener("click",(event)=>{
    vs.play();
    s.setAttribute("class","set s drum pressed");
    setTimeout(function(){s.setAttribute("class","s drum")},200);
},false);
var d = document.getElementsByClassName("d drum")[0];
d.addEventListener("click",(event)=>{
    vd.play();
    d.setAttribute("class","set d drum pressed");
    setTimeout(function(){d.setAttribute("class","d drum")},200);
},false);
var j = document.getElementsByClassName("j drum")[0]
j.addEventListener("click",(event)=>{
    vj.play();
    j.setAttribute("class","set j drum pressed");
    setTimeout(function(){j.setAttribute("class","j drum")},200);
},false);
var k = document.getElementsByClassName("k drum")[0];
k.addEventListener("click",(event)=>{
    vk.play();
    k.setAttribute("class","set k drum pressed");
    setTimeout(function(){k.setAttribute("class","k drum")},200);
},false);
var l = document.getElementsByClassName("l drum")[0];
l.addEventListener("click",(event)=>{
    vl.play();
    l.setAttribute("class","set l drum pressed");
    setTimeout(function(){l.setAttribute("class","l drum")},200);
},false);

document.addEventListener("keydown",(event)=>{
    switch(event.key){
        case 'w':
            vw.play();
            w.setAttribute("class","set w drum pressed");
            setTimeout(function(){w.setAttribute("class","w drum")},200);
            break;
        case 'a':
            va.play();
            a.setAttribute("class","set a drum pressed");
            setTimeout(function(){a.setAttribute("class","a drum")},200);
            break;
        case 's':
            vs.play();
            s.setAttribute("class","set s drum pressed");
            setTimeout(function(){s.setAttribute("class","s drum")},200);
            break;
        case 'd':
            vd.play();
            d.setAttribute("class","set d drum pressed");
            setTimeout(function(){d.setAttribute("class","d drum")},200);
            break;
        case 'j':
            vj.play();
            j.setAttribute("class","set j drum pressed");
            setTimeout(function(){j.setAttribute("class","j drum")},200);
            break;
        case 'k':
            vk.play();
            k.setAttribute("class","set k drum pressed");
            setTimeout(function(){k.setAttribute("class","k drum")},200);
            break;
        case 'l':
            vl.play();
            l.setAttribute("class","set l drum pressed");
            setTimeout(function(){l.setAttribute("class","l drum")},200);
            break;
    }
    
},false);

