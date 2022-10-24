let urls = {
    users: "http://localhost:7777/users",
    cards: "http://localhost:7777/cards",
    transactions: "http://localhost:7777/transactions",
}


export const fetchAll = async (resourse, params = "") => {
    const res = await axios.get(urls[resourse] + params)

    return res.data
}

export const postTo = async (resourse, body = null) => {
    const res = await axios.post(urls[resourse], body)

    return res.data
}


export const fetchCurrencies = async () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "q7kSldyYE8osNzXeWZzoaID8ItafAj9f");

    var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

    let res = await fetch("https://api.apilayer.com/currency_data/list", requestOptions)
    res = res.json()

    return res

}