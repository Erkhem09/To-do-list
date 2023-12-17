// define 
const input = document.getElementsByTagName('input')[0];
const addBtn =  document.querySelector('.add');
const olEl = document.getElementsByTagName('ol')[0];
// action 
addBtn.addEventListener('click', ()=>{
    if(input.value === ""){
        alert("hooson baina");
    }else{
        const li = document.createElement('li');
        // li dotor input.value hadgalna
        li.innerText = input.value;
        // li- iig ol doto append --> .append()
        olEl.appendChild(li);
        // clear
        input.value = "";
        const delBtn = document.createElement('button');
        const chkBtn = document.createElement('button');
        chkBtn.innerHTML = '<i class="bi bi-check"></i>'
        delBtn.innerHTML = '<i class="bi bi-trash-fill"></i>';
        li.appendChild(delBtn);
        li.appendChild(chkBtn);
        // tag-d class nemeh -> className
        delBtn.className = "del";
        chkBtn.className = "chck";
    }
    saveData();
});
olEl.addEventListener('click',(e)=>{
    console.log(e.target);
    let targetEl = e.target;
    let parentEl = targetEl.parentElement;
    let del = parentEl.parentElement;
    // parentElement -> gadna taliin elementiig harj boldog.
    // console.log((targetEl.parentElement).parentElement);
    if(targetEl.className == "bi bi-trash-fill"){
        // . remove() -> ustgah 
        del.remove();
    }else if(targetEl.className == "bi bi-check"){
        // className, classList --> tag deer class shineer nemdeg
        del.classList.toggle("checked");
    }
    saveData();
});
// localStorage --> web browser deer baidag data hadgalah sav
// setItem() - >hadgalah, getItem() -> hadgalsnaa duudah
function saveData(){
     localStorage.setItem('toDo', olEl.innerHTML);
}
function getData(){
    olEl.innerHTML = localStorage.getItem('toDo');
}
getData();