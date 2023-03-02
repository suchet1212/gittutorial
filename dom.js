//console.log(document.all);
 
//parentElement
let a = document.querySelector('.title');
console.log(a.parentElement);
a.parentElement.style.backgroundColor='#f4f4f4';
//lastElementChild
let b=document.querySelector('#items');
console.log(b.lastElementChild);
//lastChild
console.log(b.lastChild);
//createChild
let c=document.createElement('div');

c.className='hello';
//Addid
c.id='hello1';
//Add attribute
c.setAttribute('title','Hello Div');
//createTextNode
let c1=document.createTextNode('Hello!');
//append
c.appendChild(c1);
let e=document.querySelector('header .container');

let d= document.querySelector('header h1');
c.style.fontSize='40px';

e.insertBefore(c,d);
//nextSibling
let f =document.querySelector('h2');
console.log(f.nextSibling);
console.log(f.nextElementSibling);
console.log(f.previousSibling);
console.log(f.previousElementSibling);



