function addToList(){

    var taskname = document.getElementById('taskname').value;
    var tododiv = document.getElementById('mytodo');

    var newtodoitem = document.createElement('div');

    var todoname = document.createElement('li');
    todoname.innerText = taskname;

    //add icon when task added
    var deletebtn = document.createElement('i');
    deletebtn.classList.add('far');
    deletebtn.classList.add('fa-trash-alt');

    newtodoitem.appendChild(todoname);
    newtodoitem.appendChild(deletebtn);

    //add them to div above 2 inside div
    tododiv.appendChild(newtodoitem);
}

//poore div m clickable hai abhi (before finishing)
var tododiv = document.getElementById('mytodo');
tododiv.addEventListener('click' ,deleteitem);

function deleteitem(e){
    //check if icon is clicked or not with parent element
    //eg click on li will give li and icon as icon using target
    const element = e.target;
    //clickable has class far then remove()
    if(element.classList[0] == 'far'){ //clicking on delete btn then remove parent
        element.parentElement.remove();
    }

}