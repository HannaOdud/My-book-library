let library = [];
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
        const book = {
            title: title,
            author: author,
            pages: pages,
            read: read
        }
        library.push(book);
        displayBooks();
    })   
}
function displayBooks(){
    const tbody = document.getElementById("tbody");
    tbody.innerHTML=""; //clear table body
    library.forEach((book) =>{
        const row = tbody.insertRow();
        const titleCell = row.insertCell(0);
        titleCell.textContent = book.title;
        const authorCell = row.insertCell(1);
        authorCell.textContent = book.author;
        const pagesCell = row.insertCell(2);
        pagesCell.textContent = book.pages;
        const readCell = row.insertCell(3);
        readCell.textContent = book.read;

        const deleteCell = row.insertCell(4);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteCell.appendChild(deleteButton);

        deleteButton.addEventListener("click",()=>{
            const parentRow = deleteButton.closest("tr");
            parentRow.remove();
        })
    });
}



window.onload = setup;
