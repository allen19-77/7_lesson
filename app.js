let myInput = document.createElement('input')
myInput.setAttribute('type', 'number')
let myButton = document.createElement('button')
myButton.innerText = 'Показать'
let myParagraf = document.createElement('p')
myParagraf.innerText = ''

let body = document.querySelector('body')
body.appendChild(myInput)
body.appendChild(myButton)
body.appendChild(myParagraf)

myButton.addEventListener('click', function () {

	let price = 100
	let age = myInput.value

	//если младше 8 лет, цена 0
	if (age < 8) {
		price = 0 //0
	} else if (age < 20) {
		price = price * 0.8 //100 * 0.8 = 80
	} else if (age > 20) {
		price = price //100
	}

	myParagraf.innerText = `Цена билета равна ${price}`
})