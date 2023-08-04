const body = document.querySelector('body');
const btn = document.querySelector('#bt');
btn.addEventListener('click', function () {
    const nm = document.querySelector('#name').value;
    const ds = document.querySelector('#dsc').value;
    const img = document.querySelector('#img').value;
    axios.post('http://localhost:3500/Course', { name: nm, description: ds, image: img })
        .then(function (response) {
            response.data.name = nm;
            response.data.description = ds;
            response.data.image = img;
            console.log('success!!');
            window.location.href = './AddCourses.html'

        })
        .catch(function (error) {
            console.log(error);
        });
})