document.getElementById("nav").innerHTML="Этот текст вывел javaScript";
document.getElementById("article").innerHTML="Этот текст статьи....";
document.getElementById("button").ondblckick  = function() {alert('выбрали кнопку')}

document.getElementById("submit").onclick=function(event)
{
	return validate();
}
function validate(form)
{
	var login = document.getElementById("text1")
	var pass = document.getElementById("text2")
    var flagLogin = false;
    var flagPass = false;

    if(login.value==""){
    flagLogin = false;
    login.classList.add("ks1");
}
    else{
    flagLogin = true;
    login.classList.remove("ks1");
}
    if(pass.value==""){
    flagPass = false;
    pass.classList.add("ks1");
}
    else{
    flagPass = true;
    login.classList.remove("ks1");
}
    if(flagLogin == true && flagPass == true){
    return true;
}
    else{
    return false;
}
}
