//console.log(document.all);
 
var a = document.querySelector('.list-group-item:nth-child(2)');
var b = document.querySelector('.list-group-item:nth-child(3)');
a.style.backgroundColor='green';
b.style.backgroundColor='white';
b.style.color='white';
//Using querySelector

let c= document.querySelectorAll('.list-group-item');
c[1].style.color='green';
let d=document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i=0;i<d.length;i++){
    d[i].style.backgroundColor='green';
}