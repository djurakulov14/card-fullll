import { fetchAll } from '../modules/useHttp.js'
import { reload } from '../modules/uiFunctions.js'
import Header from '../modules/layout.js'
let email = document.querySelector('.email')
Header()

let wallets = document.querySelector('.walletsBox')

let user = JSON.parse(localStorage.getItem('user'))

fetchAll('cards', '?userid=' + user?.id)
    .then(res => {
        reload(res, wallets)
        console.log(res);
    })


email.innerHTML += user?.email
