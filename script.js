let textArea=document.querySelector("textarea");
let words=document.querySelector(".word .count");
let chars=document.querySelector(".chars .count");
let sentences=document.querySelector(".sentences .count");

textArea.addEventListener("input",()=>{
    chars.innerHTML=textArea.value.split(" ").join("").length;
    //console.log(values.length);

    words.innerHTML=textArea.value===""?0:textArea.value.trim().split(" ").length;

    sentences.innerHTML=textArea.value.split(".").filter(el=>el!="").length-1+textArea.value.split("!").filter(el=>el!="").length-1+textArea.value.split("?").filter(el=>el!="").length-1;

})