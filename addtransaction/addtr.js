import { postTo } from "../modules/useHttp.js"
import {fetchAll} from "../modules/useHttp.js"
let selecttt = document.querySelector('#select')

let form = document.forms.add_trans
let user = JSON.parse(localStorage.getItem('user'))
console.log('nice');

fetchAll("cards", "?userid=" + user?.id)
    .then(res => {
        select(res)
        console.log(res);
        console.log('nice');
    })

function select (arr) {
    for(let item of arr){
        selecttt.innerHTML += `
        <option>${item.name}</option>
        `
    }
}

form.onsubmit = (event) => {
    event.preventDefault()

    let text = selecttt.options[select.selectedIndex].text

    let trans = {
        cardid: text,
        "userid": user?.id,
        "id": Math.random(),
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        trans[key] = value
    })

    console.log(trans);

    postTo("transactions", trans)

}