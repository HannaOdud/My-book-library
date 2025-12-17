function setup(){  
    const form = document.getElementById("book_form");
    const titleDom = document.getElementById("title");
    const authorDom = document.getElementById("author");
    const pagesDom = document.getElementById("pages");
    const readDom = document.getElementById("checkbox");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const title = titleDom.value;
        const author = authorDom.value;
        const pages = pagesDom.value;
        const read = readDom.value;
        console.log(title+" "+author+" "+pages+" "+read+" Bars!");
    })   
}



window.onload = setup;
