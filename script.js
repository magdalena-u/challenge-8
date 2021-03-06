let addNumber;
let index = 0;


// create new array for each circle

const Array = function () {
    this.tab = [];
}

Array.prototype.addNumber = function (tabLength) {
    for (let i = 0; i <= tabLength; i++) {
        this.tab.push(i);
    }
}

// circle One

const circleOne = new Array()
circleOne.addNumber(50)

// circle Two

const circleTwo = new Array()
circleTwo.addNumber(35)

// circle Three

const circleThree = new Array()
circleThree.addNumber(80)

const letCountOne = () => {
    let numberOne = document.querySelector('.circle1');
    if (index < circleOne.tab.length) {
        numberOne.innerHTML = circleOne.tab[index];
        index++
    }
}

const letCountTwo = () => {
    let numberTwo = document.querySelector('.circle2');
    if (index < circleTwo.tab.length) {
        numberTwo.innerHTML = circleTwo.tab[index];
        index++
    }
}

const letCountThree = () => {
    let numberThree = document.querySelector('.circle3');
    if (index < circleThree.tab.length) {
        numberThree.innerHTML = circleThree.tab[index];
        index++
    }
}


function addInterval(e) {
    if (e.target.documentElement.scrollTop > 80) {
        addNumber = setInterval(letCountOne, 200);
        document.querySelector('.circle_mask1').classList.add('circle1_active');
    }

    if (e.target.documentElement.scrollTop > 180) {
        addNumber = setInterval(letCountTwo, 200);
        document.querySelector('.circle_mask2').classList.add('circle2_active');
    }

    if (e.target.documentElement.scrollTop > 280) {
        addNumber = setInterval(letCountThree, 200);
        document.querySelector('.right').classList.add('circle3_active');
        document.querySelector('.left').classList.add('circle3_active_part2');
    }
}

window.addEventListener('scroll', addInterval);

//add listener on menu

let burger = document.querySelector('.burger');
let menuContent = document.querySelector('.menu_content');
let times = document.querySelector('.fa-times');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menuContent.classList.toggle('active');
});

//add listener to portfolio

let portItems = document.querySelectorAll('.port div');
let portView = document.querySelector('.port_overview');

function portfolioOverview() {
    portView.classList.add('active')
    let currentId = this.id;
    let img = document.querySelector('.port_overview_img');
    img.style.backgroundImage = `url(img/${currentId}.png)`
}

portItems.forEach(item => item.addEventListener('click', portfolioOverview));
times.addEventListener('click', function () {
    portView.classList.remove('active');
})