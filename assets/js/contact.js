import {
	the,
	all
} from './utils'

const emailsScript = document.createElement('script')
emailsScript.setAttribute('src', 'https://cdn.emailjs.com/dist/email.min.js')
document.body.appendChild(emailsScript)


const opts = {
	service: 'sendgrid',
	template: 'normal'
}

function sendEmail(args){

	emailjs.send(`${opts.service}`, `${opts.template}`, {
		name: args.name, 
		phone: args.phone, 
		message: args.message
	}).then( response => {
		console.log("SUCCESS. status=%d, text=%s", response.status, response.text)
	})

}


function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test(email)
}

function validatePhone(phone){

	if(!phone) return false

	const ph = phone.replace(/\D/g, '')

	if (!(ph.length >= 10 && ph.length <= 11)) return false

	if (ph.length == 11 && parseInt(ph.substring(2, 3)) != 9) return false

	for (let n = 0; n < 10; n++) {
		if (ph == new Array(11).join(n) || ph == new Array(12).join(n)) return false
	}

	const codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
		21, 22, 24, 27, 28, 31, 32, 33, 34,
		35, 37, 38, 41, 42, 43, 44, 45, 46,
		47, 48, 49, 51, 53, 54, 55, 61, 62,
		64, 63, 65, 66, 67, 68, 69, 71, 73,
		74, 75, 77, 79, 81, 82, 83, 84, 85,
		86, 87, 88, 89, 91, 92, 93, 94, 95,
		96, 97, 98, 99]

		if (codigosDDD.indexOf(parseInt(ph.substring(0, 2))) == -1) return false

	if (new Date().getFullYear() < 2017) return true
	if (ph.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(ph.substring(2, 3))) == -1) return false

	return true
}

function validations(){

	const name = the('#form-nome')
	const email = the('#form-email')
	const phone = the('#form-tel')
	const msg = the('#form-message')
	const errors = []

	if(name.value.length < 1){
		errors.push('name')
	}

	if (!validateEmail(email.value)){
		errors.push('email')
	}
	
	if (!validatePhone(phone.value)) {
		errors.push('phone')
	}

	if (msg.value.length < 3) {
		errors.push('message')
	}

	return errors

}
	

export default function contact() {
	emailjs.init("user_kCkHRSMU0h4BVVSiBUB1T")

	const form = the('#form')

	form.addEventListener('submit', _ => {
		console.log(validations())
		//sendEmail()

	})

}