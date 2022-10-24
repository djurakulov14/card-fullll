let body = document.body
console.log(body);
function HeaderReload(param) {
    let usr = JSON.parse(localStorage.getItem('user'))
    let header = document.createElement('header')
    let headerCont = document.createElement('div')
    let headerLeft = document.createElement('div')
    let headerRight = document.createElement('div')
    let headerBtn1 = document.createElement('a')
    let headerBtn2 = document.createElement('a')
    let headerBtn3 = document.createElement('a')
    let headerBtn4 = document.createElement('button')
    let exit = document.createElement('div')

    header.classList.add('header')
    headerCont.classList.add('headerCont')
    headerLeft.classList.add('headerLeft')
    headerRight.classList.add('headerRight')
    headerBtn1.classList.add('headerBtn')
    headerBtn1.innerHTML = 'Главная'
    headerBtn1.href = '../index.html'
    headerBtn2.classList.add('headerBtn2')
    headerBtn2.innerHTML = 'Мои кошельки'
    headerBtn3.href = '../Mytransaction/index.html'
    headerBtn3.classList.add('headerBtn3')
    headerBtn3.innerHTML = 'Мои транзакции'
    headerBtn2.href = '../wallet/index.html'
    headerBtn4.classList.add('headerBtn')
    headerBtn4.innerHTML = usr.email
    exit.classList.add('exit')

    header.append(headerCont)
    headerCont.append(headerLeft, headerRight)
    headerLeft.append(headerBtn1, headerBtn2, headerBtn3)
    headerRight.append(headerBtn4, exit)
    document.body.prepend(header)
}
export default HeaderReload