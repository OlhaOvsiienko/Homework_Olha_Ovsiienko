function loadAuthors() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "books.json", true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            const authorsList = document.getElementById("authorsList");
            
            const data = JSON.parse(response);
            
            authorsList.innerHTML = "";
            
            data.forEach(function(book) {
            const authorName = book.author;
            const listItem = document.createElement("li");
            listItem.textContent = authorName;
            authorsList.appendChild(listItem);
            });
        }
    };
    
    xhr.send();
}