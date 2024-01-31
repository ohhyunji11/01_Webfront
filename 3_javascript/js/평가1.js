const applybtn = document.querySelector("#apply-btn");

applybtn.addEventListener("click", function() {

    
    const boxwidth = document.querySelector("#box-width");
    const boxheight = document.querySelector("box-height");
    const fs = document.querySelector("#fs");

    const fw = document.querySelector("[name='fw']:checked");

    console.log(fw);

    const fontcolor = document.querySelector("#box-font-color");
    const bgcolor = document.querySelector("#box-bg-color");

    const row = document.querySelector("[name='align-row']:checked");
    const col = document.querySelector("[name='allgn-col']:checked");

    const content = document.querySelector("#content");
    const box = document.querySelector("#box");

    
    
    if(boxwidth.value.trim().length > 0) {
        
        box.style.width = boxwidth.value + "px";
        box.style.height = boxheight. value + "px"; 
    }

    
    if(boxheight.value.trim().lenth > 0 ) {
        box.style.height = boxheight.value + "px";

    }

    if(fs.boxheight.value.trim().lenth > 0 ) {
        box.style.fontSize = fs.value + "px";
 }

 
 if(fw != null) { 
    console.log(fw);
    box.style.fontweight = fw.value;
}

box.style.justifyC
alignItems

if(content.value.trim().length > 0) {
    box.innerText = content.value;


}


})