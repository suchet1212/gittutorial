//console.log(document.all);
let t= document.getElementsByTagName('li');
 
t[1]="Hello 2";
t[1].style.fontWeight='bold';
t[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){
    t[i].style.backgroundColor='#f4f4f4';
    t[i].style.fontWeight='bold';
}
t[2].style.backgroundColor='green';