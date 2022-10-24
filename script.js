import { fetchAll } from './modules/useHttp.js'
import { reload } from './modules/uiFunctions.js'
import Header from './modules/layout.js'
let exit = document.querySelector('.exit')
let box = document.querySelector('.transaction')
let wallets = document.querySelector('.wallets')
let hello = document.querySelector('.hello')
let email = document.querySelector('.email')

let user = JSON.parse(localStorage.getItem('user'))
Header()
let cards = []

fetchAll('cards', '?userid=' + user?.id)
    .then(res => {
        reload(res, wallets)
        console.log(res);
    })
    
fetchAll('transactions', '?userid=' + user?.id)
    .then(res => reload_trans(res))

    

export function reload_trans(arr) {
    for (let item of arr) {
        let trans = document.createElement('div')
        let id = document.createElement('p')
        let card = document.createElement('p')
        let car = document.createElement('p')
        let sum = document.createElement('p')
        let data = document.createElement('p')
    
        trans.classList.add('history')
        id.classList.add('text')
        id.innerHTML = item.userid
        card.classList.add('a1')
        card.innerHTML = item.cardid
        car.classList.add('b1')
        car.innerHTML = item.category
        sum.classList.add('c1')
        sum.innerHTML = item.total
        data.classList.add('d1')
        data.innerHTML = item.data + '  дня назад'
    
        box.append(trans)
        trans.append(id, card, car, sum, data)
    }
}

hello.innerHTML += `${user?.name} ${user?.surname}`
email.innerHTML += user?.email

if (hello.innerHTML.length == 0) {
    window.location.assign("../log/index.html")
}