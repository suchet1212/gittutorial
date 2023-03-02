let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');

form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);

function addItem(e){
    e.preventDefault();

let newItem=document.getElementById('item').value;

var li=document.createElement('li');
li.className='list-group-item';

li.appendChild(document.createTextNode(newItem));

//itemlist.appendChild(li);

let butn=document.createElement('button');

butn.className='btn btn-danger btn-sm float-right delete';

butn.appendChild(document.createTextNode('X'));
li.appendChild(butn);

let edit=document.createElement('button');
edit.className='btn btn-danger btn-sm float-right edit';
edit.appendChild(document.createTextNode('E'));
edit.style.backgroundColor='blue';
li.appendChild(edit);
itemlist.appendChild(li);
}

function removeItem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}