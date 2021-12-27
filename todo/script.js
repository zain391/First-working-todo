let todoArr=[];
let addBtn=document.getElementById("addBtn");

addBtn.addEventListener("click",function(){
    let todoInput=document.getElementById("todoInput").value;
    todoArr.push(todoInput); 
    document.getElementById("todoInput").value="";
    const checkPoint1=todoArr.filter((items)=>{
        let empty="";
        return items !==empty;
    });
    todoArr=checkPoint1;

    
        function stringify(){
        let strArr=JSON.stringify(todoArr);
        localStorage.setItem("todos",strArr);
    }
    stringify()
    function parsing(){
            let strArr=JSON.stringify(todoArr);
            let par=JSON.parse(strArr);
            console.log("i am par",par);
        }
        parsing();
        
    
    // console.log(todoArr);
    let newListItem=document.createElement("li");
    newListItem.innerHTML=todoInput;
    let todoUnList=document.getElementById("todoUnList");
    if(todoInput===""){
        newListItem.innerHTML="empty";
    };
    let delButton=document.createElement("button");
    delButton.innerText="DELETE";
    delButton.setAttribute("onclick","delSingal(this)")
    let updateBtn=document.createElement("button");
    updateBtn.innerText="Update";
    newListItem.appendChild(delButton);
    newListItem.appendChild(updateBtn);
    todoUnList.appendChild(newListItem);

    delButton.onclick= function delSingal(e){
        // console.log(e.target.parentNode.remove());
        e.target.parentNode.remove();
    };
     updateBtn.addEventListener("click",(e)=>{
        let previuosText=newListItem.firstChild;
        // console.log(previuosText);
        document.getElementById("todoInput").innerHTML=previuosText;
        let updateVal=prompt("enter the updated value");
        previuosText.replaceWith(updateVal)  ;    
    }) ;   
    delAll();
});
function delAll(){
    let delAllBtn=document.getElementById("delAll");
    let todoUnList=document.getElementById("todoUnList");
    delAllBtn.addEventListener("click",()=>{
        todoArr.length=0;
        todoUnList.innerHTML="";
    });
};
