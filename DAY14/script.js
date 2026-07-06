const button = document.getElementById("btn");

const username = document.getElementById("name");
button.addEventListener("click", () => {
    const value = username.value;
    localStorage.setItem("name", value);
});
