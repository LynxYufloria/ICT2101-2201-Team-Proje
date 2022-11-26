document.addEventListener("DOMContentLoaded", function (event) {

    var btn = document.getElementById('submit');
    btn.addEventListener('click', func);

    function func() {

        if (document.getElementById("login").value == "mrtan@gmail.com")   {
            window.location.replace("managerLandingPage.html");
        }
        else if (document.getElementById("login").value == "john@ymail.com")  {
            window.location.replace("staffLandingPage.html");
        }
        else{
            window.location.replace("login.html");
        }


    }


});