function sendVote() {
    const button = document.getElementById("voteButton");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://webfonts.pro/decorative-fonts/", true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = xhr.responseText;
            button.innerHTML = "Your vote was accepted: " + response;
        }
    };
    
    xhr.send();
}