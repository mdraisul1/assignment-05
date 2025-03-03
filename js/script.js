const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'white'];

document.getElementById('btn-btn-bg').addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body-bg').style.backgroundColor = randomColor;
})