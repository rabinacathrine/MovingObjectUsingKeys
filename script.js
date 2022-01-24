// document.write("Hell O")
// document.getElementById('title').style.color="red"
// // title.style.color="red"
// document.getElementsByClassName('example')[1].style.background="red"
// document.getElementsByTagName('p')[0].style.background="grey"

// var title = document.getElementById('title')
// title.textContent="<em>Forever Family</em>"
// // title.innerHTML="<em>Family</em>"

// var x =document.querySelectorAll('p')
// console.log(x)
// for(var i=0;i<x.length;i++){
//     x[i].style.color="violet"
// }

//creating a element dynamically
// const mye = document.createElement('div')
// console.log(mye)
// // document.body.textContent="extra div"
// document.body.appendChild(mye)
// mye.textContent="extra div"
// mye.innerHTML="Hello"

// const planguages = document.getElementById('languages')
// const newe = document.createElement('li')
// console.log(newe)
// newe.innerHTML="<b>django<b>"
// planguages.appendChild(newe)

// function adde(){
//     var input = document.getElementById('newval').value
//     console.log(input)
//    let newe = document.createElement('li')
//    newe.innerHTML='<em>'+input+'</em>'
//     var item = document.getElementById('item')
//     item.appendChild(newe)
// }
// // item.appendChild(newe)

// function remov(){
//     var item = document.getElementById('item')
//     item.removeChild(item.firstChild)
// }

// function validation(name){
//     console.log(name)
// //    var x =  document.getElementById(name)
// //    console.log(x)
// document.getElementById(name).style.color="white"
// //    x.style.border="2px solid grey"
//     if(document.getElementById(name).value==""){
//         // x.style.border="2px solid red"
//         document.getElementById(name).style.background="red"
//     }
//     else{
//         document.getElementById(name).style.background="green"
//     }
// }

// function over(obj){
//     obj.innerHTML="Heyya"
//     obj.style.background="orangered"
// }

// function out(obj){
//     obj.innerHTML="hove over me"
//     obj.style.background="violet"
// }

var obj = null

function init(){
    obj= document.getElementById('img1')
    obj.style.position='relative'
    obj.style.left="0px"
    obj.style.top="0px"
}

function getkey(e){
    var key_code = e.keyCode
switch(key_code){
    case 37:
        moveleft();
        break;
    case 38:
        moveup();
        break;
    case 39:
        moveright();
        break;
    case 40:
        movedown();
        break;
}
}
function moveleft(){
obj.style.left=parseInt(obj.style.left)-10+'px'
}

function moveup(){
    obj.style.top=parseInt(obj.style.left)-10+'px'
    }
    function moveright(){
        obj.style.left=parseInt(obj.style.left)+10+'px'
        }
        function movedown(){
            obj.style.top=parseInt(obj.style.left)+10+'px'
            }

    window.onload=init