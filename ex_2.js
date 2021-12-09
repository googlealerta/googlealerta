window.onload = function()
{
    var box = document.getElementById("checkbox");
    var pass = document.getElementById("senha");

    box.onclick = function()
    {
        if (pass.getAttribute('type') == 'password')
        {
            pass.setAttribute('type', 'tel');
        } else {
            pass.setAttribute('type', 'password')
        }
    }
}
