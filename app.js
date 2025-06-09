btn=document.querySelector(".add");
inp=document.querySelector('input');
l=document.querySelector('ul');
btn.addEventListener("click",function(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    let b=document.createElement('button');
    b.innerText="Delete";
    b.classList.add("delete");
    item.appendChild(b);
    l.appendChild(item);
    inp.value="";
});

l.addEventListener("click",function(event){
//  console.log(event.target.nodeName);
  if(event.target.nodeName==="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
  }
})