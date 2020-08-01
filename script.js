let xhr = new XMLHttpRequest()
const URL = 'https://cl8xh2zxji.api.quickmocker.com/users'
xhr.open('GET', URL)
xhr.send()
let table = document.querySelector('#table')
xhr.addEventListener('load', () => {
    let data = JSON.parse(xhr.response)
    data.forEach(element => {
        let newTr = document.createElement('tr')
        newTr.innerHTML = `<tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>
                <table>
                    <tr>
                        <td>
                            Street: ${element.address.street}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Suite: ${element.address.suite}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            City: ${element.address.city}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Zipcode: ${element.address.zipcode}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Geo: lat: ${element.address.geo.lat}
                            lng: ${element.address.geo.lng}
                        </td>
                    </tr>
                
                
                </table>
            </td>
            <td>${element.phone}</td>
            <td>${element.website}</td>
            <td>
                <table>
                    <tr>
                        <td>
                            Name: ${element.company.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            CatchPhrase: ${element.company.catchPhrase}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            bs: ${element.company.bs}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>`
        table.append(newTr)
    });
})