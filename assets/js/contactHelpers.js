function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
}

function validatePhone(phone) {

    if (!phone) return false

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

function validations(args, which = 'all') {

    const errors = []

    if (('name' in args) && args.name.length < 1) {
        errors.push('name')
    }

    if (('email' in args) &&  !validateEmail(args.email)) {
        errors.push('email')
    }

    if (('phone' in args) && !validatePhone(args.phone)) {
        errors.push('phone')
    }

    if (('msg' in args) && args.msg.length < 3) {
        errors.push('msg')
    }

    return errors

}

// messages erros
const msgs = {
    phone: 'Preencha com um telefone válido',
    msg: 'Nos diga algo',
    email: 'Preencha com um email válido',
    name: 'Precisamos saber seu nome',
    flags: []
}

const hasMsg = has => msgs.flags.indexOf(has) > -1

function typing(input){

    const key = input[0]
    const el = input[1]
    const elements = {}

    el.addEventListener('keyup', _ =>{
        
        elements[key] = el.value
        const errors = validations(elements)
        
        if(errors.length == 0){

            el.classList.remove('error')

            if (hasMsg(key)) {
                el.parentNode.querySelector('.error-msg').remove()
                msgs.flags = msgs.flags.filter(e => e !== key)
            }

        }

    })

}

function fuck(error, elements) {

    elements[error].classList.add('error')

    if (!hasMsg(error)) {
        msgs.flags.push(error)
        const errorSpan = `<span class="error-msg">${msgs[error]}</span>`
        elements[error].parentNode.insertAdjacentHTML('beforeend', errorSpan)
    }

}

export { validations, typing, fuck}
