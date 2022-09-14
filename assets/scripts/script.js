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
        var name = document.forms["RegForm"]["Fullname"];
        var lname = document.forms["RegForm"]["LName"];
        var mname = document.forms["RegForm"]["MName"];
        var email = document.forms["RegForm"]["Email"];
        var phone = document.forms["RegForm"]["Phone"];
        var sid = document.forms["RegForm"]["Sid"];
        var dropdown = document.forms["RegForms"]["Dropdown"]

        if (name.value == "") {
            window.alert("Please enter your First name: ");
            fname.focus();
            return false;
        }

        if (lname.value == "") {
            window.alert("Please enter your Last name: ");
            lname.focus();
            return false;
        }
        if (mname.value == "") {
            window.alert("Please enter your Middle name: ");
            mname.focus();
            return false;
        }

        if (email.value == "") {
            window.alert("Please enter a valid Email Address: ");
            email.focus();
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
        if (phone.value == "") {
            window.alert("Please enter a valid Phone: ");
            phone.focus();
            return false;
        }
        if (sid.value == "") {
            window.alert("Please enter your SID No. : ");
            sid.focus();
            return false;
        }
        if (dropdown.selectedIndex < 1) {
            window.alert("Please select a stream: ");
            dropdown.focus();
            return false;
        }
        return true;

    }
