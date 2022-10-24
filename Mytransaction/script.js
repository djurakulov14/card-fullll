import Header from '../modules/layout.js'
import { fetchAll } from '../modules/useHttp.js'
import {reload_trans} from '../script.js'

Header()

fetchAll('transactions', '?userid=' + user?.id)
    .then(res => reload_trans(res))


let box = document.querySelector('.transaction1')

let add1 = document.querySelector('.lasttext')
let wallet1 = document.querySelector('.headerBtn2')
add1.onclick = () => {
    window.location.assign('../addtransaction/index.html')
}
wallet1.onclick = () => {
    window.location.assign('../wallet/index.html')
}
let exit = document.querySelector('.exit')
exit.onclick = () => {
    window.location.assign("../Начните с этой папки/registration.html")
}
let wallet3 = document.querySelector('.headerBtn')
wallet3.onclick = () => {
    window.location.assign("../index.html")
}