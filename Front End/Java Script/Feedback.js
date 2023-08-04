const body = document.querySelector('body');
axios.get('http://localhost:3500/Feedbacks')
    .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            p = document.createElement('p');
            p.innerText = response.data[i].email;
            body.append(p);
            p2 = document.createElement('p2');
            p2.innerText = response.data[i].message;
            body.append(p2);
        }
    })
    .catch(function (error) {
        console.log(error);
    })