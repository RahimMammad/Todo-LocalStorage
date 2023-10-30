const userForm = document.getElementById("userForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");
const userDataList = document.getElementById("userDataList");

submitBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const userData = { email, password };

    localStorage.setItem(email, JSON.stringify(userData));
      
    emailInput.value = "";
    passwordInput.value = "";

    updateUserDataList();
});

const updateUserDataList = () => {
    userDataList.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
    const email = localStorage.key(i);
    const userData = JSON.parse(localStorage.getItem(email));
    const listItem = document.createElement("li");
        
    listItem.textContent = `Email: ${email}, Password: ${userData.password}`;
    listItem.addEventListener("click", () => {
        emailInput.value = email;
        passwordInput.value = userData.password;
    });
    userDataList.appendChild(listItem);
    }
}


editBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const userData = { email, password };

    localStorage.setItem(email, JSON.stringify(userData));
      
    emailInput.value = "";
    passwordInput.value = "";
      
    updateUserDataList();
});

deleteBtn.addEventListener("click", () => {
    const email = emailInput.value;

    localStorage.removeItem(email);

    emailInput.value = "";
    passwordInput.value = "";

    updateUserDataList();
});
updateUserDataList();