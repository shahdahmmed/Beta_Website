axios.get("http://localhost:3500/courses").then(function (response) {
    console.log(response.data)
    const body = document.querySelector('body')
    for (let i = 0; i < response.data.length; i++) {
        const p = document.createElement('p')
        const img = document.createElement('img')
        img.setAttribute('src', response.data[i].image)
        p.innerText = response.data[i].name
        body.append(p)
        body.append(img)
    }
}).catch(function (error) {
    console.log(error)
})