btn=document.querySelector("#enter");

arr1=document.querySelector("#barrow1");
arr2=document.querySelector("#barrow2");
dish=document.querySelector("#dishnm");

let r=0

btn.addEventListener("click",(evt)=>{
    x=document.querySelector("#dishes").value;
    im=document.querySelector("#img");
    tx=document.querySelector("#txt");
    tx.style.fontSize="20px";
    for(let i=0;i<l.length;i++){
       if(l[i][0]===x){
       tx.textContent=l[i][1];
       im.src=l[i][2];
       im.play();
       dish.innerHTML=l[i][0].toUpperCase()+"&#128523";
       r=i
        }
    }
})

arr1.addEventListener("click",(evt)=>{  
    if(r>0){
        r--;
        tx.textContent=l[r][1];
        im.src=l[r][2]; 
        im.play();
        dish.innerHTML=l[r][0].toUpperCase()+"&#128523";
        }
    })

arr2.addEventListener("click",(evt)=>{
    if(r<l.length-1){
        r++;
        tx.textContent=l[r][1];
        im.src=l[r][2];
        im.play();
        dish.innerHTML=(l[r][0].toUpperCase()+"&#128523"); 
        }
    })
