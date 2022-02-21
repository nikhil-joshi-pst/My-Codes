var username = document.getElementById('txtmail')
var password = document.getElementById('txtpwd')
function validateLogin() {
    if (usernamevalid() & userpasswordvalid()) {
        return true;
    } else {
        return false;
    }
}
function usernamevalid() {
    if (username.value.length == 0) {
        document.getElementById('txtmail').style.border = "4px solid red"
        document.getElementById('display').innerText = ("**Email can't be empty**")
        return false;
    }
    if (username.value.search(/^[^0-9][a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$/)) {
        document.getElementById('txtmail').style.border = "4px solid red"
        document.getElementById('display').innerText = ("**Email should contain @ and .com**")
        return false
    }
    else {
        document.getElementById('txtmail').style.border = "4px solid green"
        document.getElementById('display').innerText = ("")

    }

}

function userpasswordvalid() {
    if (password.value.length <= 0) {
        document.getElementById('txtpwd').style.border = "4px solid red"
        document.getElementById('display1').innerHTML = ("**Password can't be empty**")
        return false
    }
    //for minimum length
    if (password.value.length < 6) {
        document.getElementById('txtpwd').style.border = "4px solid red"
        document.getElementById('display1').innerHTML = ("**Password should be 6 characters long**")
        return false
    }
    // //for at least one letter
    // if (password.value.search(/[a-z]/i) < 0) {
    //     document.getElementById('txtpwd').style.border = "4px solid red"
    //     document.getElementById('display1').innerHTML = ("**Password must contain at least one letter**")
    //     return false
    // }
    //for atleast one digit
    if (password.value.search(/[0-9]/) < 0) {
        document.getElementById('txtpwd').style.border = "4px solid red"
        document.getElementById('display1').innerHTML = ("**Password must contain at least one digit**")
        return false
    }
    else {
        document.getElementById('txtpwd').style.border = "4px solid green "
        document.getElementById('display1').innerHTML = ("")
        return true
    }
}

var fname = document.getElementById("firname");
var lname = document.getElementById("lasname");
var mail = document.getElementById("email");
var pswd = document.getElementById("pswdddd")
var pswdd = document.getElementById("pswdd")
var contact = document.getElementById("cont");
var box = document.getElementById("your");
var gen = document.getElementsByName("genders");
var cities = document.getElementById("city");

function validateSignUp() {
    var value = false;
    if (first_name() == false) { }
    if (last_name() == false) { }
    if (email_cc() == false) { }
    if (password_() == false){}
    if (cnfm_pswd() == false){}
    if (phone() == false) { }
    if (textb() == false) { }
    if (radiob() == false) { }
    if (dropb() == false) { }
    if (checkc() == false) { }
    else {
        value = true;
    }
    return value;
}

function first_name() {
    if (fname.value.length == 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('firname').style.border = "4px solid red"
        document.getElementById('display2').innerText = ("**First name can't be empty & no digit allowed**")
        return false
    }
    else {
       
        document.getElementById('firname').style.border = "4px solid green"
        document.getElementById('display2').innerText = ("")
        return false
    }
}
function last_name() {
    if (lname.value.length <= 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('lasname').style.border = "4px solid red"
        document.getElementById('display3').innerText = ("**Last name can't be empty & no digit allowed**")
        return false
    }
    else {
       
        document.getElementById('lasname').style.border = "4px solid green"
        document.getElementById('display3').innerText = ("")
        return true;
    }

}
function email_cc() {
    if (mail.value.length <= 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('email').style.border = "4px solid red"
        document.getElementById('display4').innerText = ("**Email name cannot be empty**")
        return false
    }
    else {
       
    }
    //to check for @ and .com
    if (mail.value.search(/^[^0-9][a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$/)) {
        document.getElementById('btn').disabled = true;
        document.getElementById('email').style.border = "4px solid red"
        document.getElementById('display4').innerText = ("**Email should contain @ and .com**")
        return false
    }
    else {
       
        document.getElementById('email').style.border = "4px solid green"
        document.getElementById('display4').innerText = ("")
        return true;
    }

}
function password_(){
    if (pswd.value.length <= 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('pswdddd').style.border = "4px solid red"
        document.getElementById('display10').innerHTML = ("**Password can't be empty**")
        return false
    }
    //for minimum length
    if (pswd.value.length < 6) {
        document.getElementById('btn').disabled = true;
        document.getElementById('pswdddd').style.border = "4px solid red"
        document.getElementById('display10').innerHTML = ("**Password should be 6 characters long**")
        return false
    }
    //for at least one letter
     if (pswd.value.search(/[a-z]/i) < 0) {
        document.getElementById('btn').disabled = true;
         document.getElementById('pswdddd').style.border = "4px solid red"
        document.getElementById('display10').innerHTML = ("**Password must contain at least one letter**")
         return false
     }
    //for atleast one digit
    if (pswd.value.search(/[0-9]/) < 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('pswdddd').style.border = "4px solid red"
        document.getElementById('display10').innerHTML = ("**Password must contain at least one digit**")
        return false
    }
    else {
       
        document.getElementById('pswdddd').style.border = "4px solid green "
        document.getElementById('display10').innerHTML = ("")
        return true
    }
}
function cnfm_pswd(){
    if (pswd.value.length <= 0) {
        document.getElementById('pswdd').style.border = "4px solid red"
        document.getElementById('display11').innerHTML = ("**Password can't be empty**")
        return false
    }
    if (pswd.value == pswdd.value) {
        document.getElementById('pswdd').style.border = "4px solid green"
        document.getElementById('display11').innerHTML = ("")
        document.getElementById('display12').innerText = ("**Password Match**")
        return true;
    }
    if (pswd.value != pswdd.value) {
        document.getElementById('btn').disabled = true;
        document.getElementById('pswdd').style.border = "4px solid red"
        document.getElementById('display11').innerHTML = ("**Password does not match**")
        document.getElementById('display12').innerText = ("")
        return false;
    }
    else {
       
        document.getElementById('display12').innerText = ("")
    }
}
function phone() {
    if (contact.value.length <= 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('cont').style.border = "4px solid red"
        document.getElementById('display5').innerText = ("**Contact number cannot be empty**")
        return false
    }
    if (contact.value.search(/^[1-9][0-9]*$/)) {
        document.getElementById('cont').style.border = "4px solid red"
        document.getElementById('display5').innerText = ("**Cannot start with zero**")
        return false
    }
    //for not starting with zero
    if (contact.value.search(/^[6-9][0-9]*$/)) {
        document.getElementById('cont').style.border = "4px solid red"
        document.getElementById('display5').innerText = ("**Cannot start with 1-5**")
        return false
    }
    if (contact.value.length < 10) {
        document.getElementById('cont').style.border = "4px solid red"
        document.getElementById('display5').innerText = ("**Please enter 10 digits**")
        return false
    }
    else {
        document.getElementById('cont').style.border = "4px solid green"
        document.getElementById('display5').innerText = ("")
        return true;
    }

}
function textb() {
    //for not empty
    if (box.value == "") {
        document.getElementById('btn').disabled = true;
        document.getElementById('your').style.border = "4px solid red"
        document.getElementById('display6').innerText = ("**Please enter something**")
    }
    else {
       
        document.getElementById('your').style.border = "4px solid green"
        document.getElementById('display6').innerText = ("")
    }
}

function radiob() {
    if (!(gen[0].checked || gen[1].checked)) {
        document.getElementById('btn').disabled = true;
        document.getElementById('display7').innerText = ("**Please choose atleast one**")
        return false;
    }
    else {
       
        document.getElementById('display7').innerText = ("")
        return true
    }
}
function dropb() {
    if (cities.selectedIndex <= 0) {
        document.getElementById('btn').disabled = true;
        document.getElementById('city').style.border = "4px solid red"
        document.getElementById('display8').innerText = ("**Please select atleast one city**")
        return false
    }
    else {
        document.getElementById('city').style.border = "4px solid green"
        document.getElementById('display8').innerText = ("")
        return true;
    }

}
function checkc() {
    document.getElementById('btn').disabled = true;
    var option = document.querySelectorAll('input[type=checkbox]');
    var empty = [].filter.call(option, function (el) {
        return !el.checked
    });
    if (option.length == empty.length) {
        document.getElementById('display9').innerText = ("**Please select atleast one game**")
        return false
    }
    else {
        document.getElementById('btn').disabled = false;
        document.getElementById('display9').innerText = ("")
        return true;
    }
}
function storeData() {
    let formdata = JSON.parse(localStorage.getItem('formdata')) || [];
    var aadmi;
    var aurat;
    var hobbies;
    if (document.getElementById('gender').checked) {
        aadmi = "Male";
    }
    else if (document.getElementById('gender1').checked) {
        aurat = "Female";
    }

    if (document.getElementById('chec1').checked) {
        hobbies = "Cricket"
    }
    if (document.getElementById('chec2').checked) {
        hobbies = "Chess";
    }
    if (document.getElementById('chec3').checked) {
        hobbies = "Ludo"
    }
    if (document.getElementById('chec1').checked && document.getElementById('chec2').checked) {
        hobbies = "Cricket ,Chess ";
    }
    if (document.getElementById('chec1').checked && document.getElementById('chec3').checked) {
        hobbies = "Cricket ,Ludo";
    }
    if (document.getElementById('chec2').checked && document.getElementById('chec3').checked) {
        hobbies = "Chess,Ludo ";
    }

    if (document.getElementById('chec1').checked && document.getElementById('chec2').checked && document.getElementById('chec3').checked) {
        hobbies = "Cricket ,Chess ,Ludo ";

    }
    let exist = formdata.length && JSON.parse(localStorage.getItem('formdata')).some(data => data.mail.toLowerCase() == document.getElementById("email").value.toLowerCase())
    if (!exist) {
        formdata.push({
            fname: document.getElementById("firname").value,
            lname: document.getElementById("lasname").value,
            mail: document.getElementById("email").value,
            pass: document.getElementById("pswdddd").value,
            contact: document.getElementById("cont").value,
            box: document.getElementById("your").value,
            cities: document.getElementById("city").value,
            radio: `${aadmi || aurat}`,
            check: `${hobbies}`
        })
        localStorage.setItem('formdata', JSON.stringify(formdata));
        dispData();
        document.querySelector('form').reset();
        document.getElementById('firname').focus();
    }
    else {
        alert("Matching records found!")
        return false;
    }
}
function signIn() {
    let data = JSON.parse(localStorage.getItem('formdata'))
    var user = document.getElementById('txtmail').value;
    var pa_ss = document.getElementById('txtpwd').value;
    var flag;
    data.map(element => {
        if (user == element.mail && pa_ss == element.pass) {
            flag = true;
        }
        else {
            flag = false;
        }
    });
    if (flag == true) {
        alert(" Login Succesfully");
        window.location.href(url("table.html"))
    }
    else {
        alert("Login failed");
    }
}
