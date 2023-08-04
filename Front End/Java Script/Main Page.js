const body = document.querySelector('body');
axios.get('http://localhost:3500/Courses')
    .then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data);
            p = document.createElement('p', id = "k");
            p.innerText = response.data[i].name;
            p.style.fontSize = "x-large";
            p.style.fontWeight = "900";
            body.append(p);
            img = document.createElement('img');
            img.setAttribute('src', response.data[i].image);
            img.style.position = 'center';
            body.append(img);
            l = document.createElement('l');
            l.innerText = "\n";
            body.append(l);
            p2 = document.createElement('p2');
            p2.innerText = response.data[i].description;
            body.append(p2);

        }
    })
    .catch(function (error) {
        console.log(error);
    });