//console.log(document.all);
let items= document.getElementsByClassName('list-group-item');
 
items[1]="Hello 2";
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='#f4f4f4';
    items[i].style.fontWeight='bold';
}
items[2].style.backgroundColor='green';