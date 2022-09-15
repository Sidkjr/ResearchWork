const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");
      
const logbutton = document.querySelector(".logbutt");
const signbutton = document.querySelector(".signbutt");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

    function validate_form() {
        var fullname = document.form["Regform"]["Fullname"];
        var email = document.forms["RegForm"]["Email"];
        var password = document.forms["RegForm"]["password"];
        var conf_password = document.forms["RegForm"]["conf_password"];

        if (fullname.value == "") {
            window.alert("Please enter your First name: ");
            fname.focus();
            return false;
        }

        if (email.value.indexOf("@", 0) < 0) {
            window.alert("Please enter a valid Email Address: ");
            email.focus();
            return false;
        }
        
        if (email.value.indexOf(".", 0) < 0) {
            window.alert("Please enter a valid Email Address: ");
            email.focus();
            return false;
        }


        if (password.value == "") {
            window.alert("Please enter your First name: ");
            fname.focus();
            return false;
        }

        if (conf_password.value == "") {
            window.alert("Please enter your First name: ");
            fname.focus();
            return false;
        }

    }
