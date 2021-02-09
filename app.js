let myInputOne = document.createElement('input')
myInputOne.setAttribute('type', 'number')
let myInputTwo = document.createElement('input')
myInputTwo.setAttribute('type', 'number')
let myButton = document.createElement('button')
myButton.innerText = 'Показать'
let myParagraf = document.createElement('p')
myParagraf.innerText = ''

let body = document.querySelector('body')
body.appendChild(myInputOne)
body.appendChild(myInputTwo)
body.appendChild(myButton)
body.appendChild(myParagraf)

myButton.addEventListener('click', function () {

	let price = 100
	let age = myInputOne.value
	let consist = myInputTwo.value
	//если младше 8 лет, цена 0
	if (age < 8) {
		price = 0 //0
	} else if (age < 20) {
		price = price * 0.8 * consist //100 * 0.8 = 80
	} else if (age > 20) {
		price = price * consist//100
	}

	myParagraf.innerText = `Цена билета равна ${price}`
})