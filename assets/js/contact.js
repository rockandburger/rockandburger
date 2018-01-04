import {
	the,
	all,
	doc,
	elementIsVisibleInViewport,
	forEach
} from './utils'

import {validations, typing, fuck} from './contactHelpers'


const opts = {
	service: 'sendgrid',
	template: 'normal'
}

function sendEmail(args){

	const options = { 
		name: args.name, 
		phone: args.phone, 
		email: args.email, 
		message: args.msg 
	}

	emailjs.send(`${opts.service}`, `${opts.template}`, options ).then( res => comemore() )
}

function comemore(){

	const modal = doc.createElement('div')
	modal.classList.add('modal')

	modal.innerText = 'Mensagem Enviada!'

	doc.body.appendChild(modal)

	setInterval( _ => modal.remove(), 2000)

}

export default function contact() {

	const emailsScript = document.createElement('script')
	emailsScript.setAttribute('src', 'https://cdn.emailjs.com/dist/email.min.js')
	document.body.appendChild(emailsScript)

	const form = the('#form')

	const elements = {
		name : the('#form-name'),
		email : the('#form-email'),
		phone : the('#form-phone'),
		msg : the('#form-msg')
	}

	const inputs = Object.entries(elements) || false

	// inputs.forEach(input => typing(input))

	forEach(inputs, input => typing(input) )

	const users = {
		one: 'user_FdLry3bEaHitVXIzllzcl',
		thom: 'user_kCkHRSMU0h4BVVSiBUB1T'
	}

	// listeners
	form.addEventListener('submit', _ => {
		
		_.preventDefault()

		// init the plugin
		emailjs.init(users.one)
		
		const args = {
			name: elements.name.value,
			email: elements.email.value,
			phone: elements.phone.value,
			msg: elements.msg.value
		}

		const errors = validations(args)

		if (errors.length === 0){
			sendEmail(args)
		}else{
			
			forEach(errors, error => fuck(error, elements))
		}

	})

}