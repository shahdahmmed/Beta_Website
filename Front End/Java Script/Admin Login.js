const btn = document.querySelector('#Button')

btn.addEventListener('click', function () {
    const user = document.querySelector('#username')
    const pass = document.querySelector('#pass')
    console.log(user.value, pass.value)
    if (user.value == 'Admin' && pass.value == '1234') window.location.href = "Admin.html"
    else if (user.value != 'Admin' || pass.value != '1234') window.location.href = "Admin Login.html"

})


