// const btn = document.querySelector('button');
const image = document.querySelector('img');
const bulbOn = document.querySelector('#bulbOn');
const bulbOff = document.querySelector('#bulbOff')


const imgOn = "https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"

const imgOff = "https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"

bulbOn.addEventListener('click', function () {
    image.setAttribute('src', imgOn)
})

bulbOff.addEventListener('click', function() {
    image.setAttribute('src', imgOff)
})

    // bulbOn.add()
    // images.classList.toggle("bulbOff", "bulbOn")

