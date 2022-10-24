import { fetchAll } from "../modules/useHttp.js"

let form = document.forms.form
let data = localStorage.getItem('user')
let text = document.querySelector('.text2')
let next = document.querySelector('.next')
let inps = document.querySelectorAll('.inp')

// next.onclick = () => {
//     window.location.assign("../index.html")
// }
let user = JSON.parse(localStorage.getItem('user'))

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {

    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    if(user.email && user.password) {
        fetchAll('users', '?email=' + user?.email)
            .then(res => {
                if(res[0]?.email === user.email && res[0]?.password === user.password){
                    window.location.assign("../index.html")
                    localStorage.setItem('user', JSON.stringify(res[0]))
                } else {
                    alert('Зарегайся!')
                }
        })
    } 

}




text.onclick = () => {
    localStorage.clear()
    window.location.assign("../Начните с этой папки/registration.html")
}