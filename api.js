let adduptaskButton = document.getElementById('adduptask');
let task = document.getElementById('task');
let load = document.getElementById('load');

adduptaskButton.addEventListener('click', function(){
    var box= document.createElement('P');
    box.classList.add('List');
   box.innerText = load.value;
    task.appendChild(box);
    load.value = "";
    box.addEventListener('click', function(){
 box.style.textDecoration = "line-through";
    })
    box.addEventListener('dblclick', function(){
        task.removeChild(box);
    })
})