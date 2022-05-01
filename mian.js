const colors = ["black", "red", "purple", "green", "yellow", "blue", "aqua", "deeppink", "hotpink", "white"];
colors.forEach((color) => {
    const btnCeate = document.createElement("button");
    btnCeate.className = "btn"
    btnCeate.addEventListener("click", (e) => {
        const targetColor = btnCeate.style.backgroundColor
        const target = document.querySelector("body")
        target.style.backgroundColor = targetColor
        const colorNamePirinter = document.querySelector(".title-color")
        colorNamePirinter.textContent = targetColor
    })
    document.querySelector(" body .btn-changer").appendChild(btnCeate);
    btnCeate.style.backgroundColor = color;
})
document.body.onload = function() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];


}