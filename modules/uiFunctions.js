export const reload = (arr, place) => {
    place.innerHTML = ""
    localStorage.setItem('cards', JSON.stringify(arr))

    for (let item of arr) {
        place.innerHTML += `
            <div class="wallet">
                <p class="visa">${item.name}</p>
                <p class="rub">${item.currency}</p>
            </div>                        
        `
    }
}