getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + color;
    color.innerHTML = "#" + color
}

changeBackgroundColor = () => {
    getRandomColor();
}