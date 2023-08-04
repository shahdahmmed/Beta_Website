const body = document.querySelector('body');
const sub = document.querySelector('#sub');
sub.addEventListener('click', function () {
    const mail = document.querySelector('#email').value;
    const msg = document.querySelector('#message').value;
    axios.post('http://localhost:3500/Feedback', { email: mail, message: msg })
        .then(function (response) {
            response.data.email = mail;
            response.data.message = msg;
            console.log('success!!');

        })
        .catch(function (error) {
            console.log(error);
        });

})