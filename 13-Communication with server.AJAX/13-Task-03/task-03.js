function renderUser(user) {
    const userAvatar = document.getElementById("userAvatar");
    const userName = document.getElementById("userName");
    const userAge = document.getElementById("userAge");
    const userGender = document.getElementById("userGender");
    const userCountry = document.getElementById("userCountry");
    const userLogin = document.getElementById("userLogin");
    const userPassword = document.getElementById("userPassword");
    const userEmail = document.getElementById("userEmail");
    
    userAvatar.src = user.picture.large;
    userName.textContent = user.name.first + " " + user.name.last;
    userAge.textContent = user.dob.age;
    userGender.textContent = user.gender;
    userCountry.textContent = user.location.country;
    userLogin.textContent = user.login.username;
    userPassword.textContent = user.login.password;
    userEmail.textContent = user.email;
}

async function fetchRandomUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];
        renderUser(user);
    } catch (error) {
        console.error("Помилка:", error);
    }
}

fetchRandomUser();