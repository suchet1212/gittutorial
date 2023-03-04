let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let filter= document.getElementById('filter');

form.addEventListener('submit',addItem);
itemlist.addEventListener('click',removeItem);
filter.addEventListener('keyup',filteritems);

function addItem(e){
    e.preventDefault();

let newItem=document.getElementById('item').value;
let newDesc=document.getElementById('desc').value;
var li=document.createElement('li');
li.className='list-group-item';

li.appendChild(document.createTextNode(newItem));
//li.appendChild (document.createTextNode (" "));
li.appendChild(document.createTextNode(newDesc));

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

function filteritems(e){
let text=e.target.value.toLowerCase();
let items=itemlist.getElementsByTagName('li');
Array.from(items).forEach(function(item){
    let itemName= item.firstChild.textContent;
    let descp=item.childNodes[1].textContent

    if(itemName.toLowerCase().indexOf(text)!=-1 || descp.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
    }else{
        item.style.display='none';
    }
});
}