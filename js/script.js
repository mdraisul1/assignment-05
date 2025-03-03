const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'white'];

document.getElementById('btn-btn-bg').addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('body-bg').style.backgroundColor = randomColor;
})

//button one number update code 
document.getElementById('btn-completed').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})

//button two number update code
document.getElementById('btn-completed-two').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})
//button three number update code
document.getElementById('btn-completed-three').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})
//button four number update code
document.getElementById('btn-completed-four').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})
//button five number update code
document.getElementById('btn-completed-five').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})
//button six number update code
document.getElementById('btn-completed-six').addEventListener('click', function(){
    const numberOneElement = document.getElementById('number-one');
    let numberOneValue = parseInt(numberOneElement.innerText);
    numberOneElement.innerText = numberOneValue + 1;

    const numberTwoElement = document.getElementById('number-two');
    let numberTwoValue = parseInt(numberTwoElement.innerText);
    numberTwoElement.innerText = numberTwoValue - 1;

    this.disabled = true;
    alert("Board Successfully Update");
})

//date update
document.getElementById('current-date').innerText = getUpdateDate();
function getUpdateDate(){
    const currentDate = new Date();
    
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' }); 
    const year = currentDate.getFullYear();
    const weekday = currentDate.toLocaleString('default', { weekday: 'short' });

    return `${weekday}, ${month} ${day} ${year}`;
}

// card section date update 
document.getElementById('current-date-one').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}
document.getElementById('current-date-two').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}
document.getElementById('current-date-three').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}
document.getElementById('current-date-four').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}
document.getElementById('current-date-five').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}
document.getElementById('current-date-six').innerText = getDateOne();
function getDateOne(){
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', {month: 'short'});
    const year = currentDate.getFullYear();
    
    return `${day} ${month} ${year}`;
}

document.getElementById('btn-completed').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-one').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-10', 'mb-6');

    document.getElementById('paragraph').appendChild(newParagraph);
})

document.getElementById('btn-completed-two').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-two').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-10', 'mb-6');

    document.getElementById('paragraph').appendChild(newParagraph);
})

document.getElementById('btn-completed-three').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-three').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-10', 'mb-6');

    document.getElementById('paragraph').appendChild(newParagraph);
})

document.getElementById('btn-completed-four').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-four').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-10', 'mb-6');

    document.getElementById('paragraph').appendChild(newParagraph);
})

document.getElementById('btn-completed-five').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-five').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-10', 'mb-6');

    document.getElementById('paragraph').appendChild(newParagraph);
})

document.getElementById('btn-completed-six').addEventListener('click', function(){
    const paragraph = document.getElementById('heading-six').innerText;
    // console.log(paragraph);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = paragraph;
    newParagraph.classList.add('text-gray-700', 'text-base', 'mt-4', 'mb-3');

    document.getElementById('paragraph').appendChild(newParagraph);
})


document.getElementById('clear-history').addEventListener('click', function() {
    document.getElementById('paragraph').innerHTML = '';
});

document.getElementById('discover').addEventListener('click', function(){
    window.location.href = "blog.html";
})
