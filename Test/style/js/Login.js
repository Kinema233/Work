function checkForm(el)
{
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if(name == "" || pass == "" || state == "")
        fail = "Заполните все поля";
    else if(name.lenght <= 1 || name.lenght > 50)
        fail = "Введите корректное имя";
    else if(pass != repass)
        fail = "Пароль должен совпадать";
    else if(pass.split("&").lenght > 1)
        fail = "Некорректный пароль";

    if(fail != "")
    {
        document.getElementById('error').innerHTML = fail;

        return false;
    } else 
    {
        alert("Все данные корректно заполнены");
        return true;
    }
}