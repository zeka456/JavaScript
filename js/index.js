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
	var flag = false;
    if(login.value == "")
    {   
    	login.className = "ks1";
    }
    else if (pass.value == "")
    {
        pass.className = "ks1";
    }
}