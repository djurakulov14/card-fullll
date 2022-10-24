import { fetchCurrencies } from "../modules/useHttp.js";
import {postTo} from "../modules/useHttp.js"

let form = document.forms.wallet
let user = JSON.parse(localStorage.getItem('user'))
let currInp = document.querySelector('datalist')

// fetchCurrencies()
//     .then(res => reloadCurr(res.currencies))


form.onsubmit = (event) => {
    event.preventDefault()

    let wallet = {
        "id": Math.random(),
        "userid": user?.id,
        "pincode": Math.round(Math.random()*10000)
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        wallet[key] = value
    })

    console.log(wallet);

    postTo("cards", wallet)
    // if(wallet.name.length !== 0 && wallet.currency.length)

}


// const reloadCurr = (currencies) => {
//     console.log(currencies);

//     for(let key in currencies) {
//         let opt = new Option(key, key)

//         currInp.append(opt)
//     }

// }