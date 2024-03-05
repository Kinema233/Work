/* Реєстрація і  вхід, выдновлення паролю*/
document.addEventListener("DOMContentLoaded", function() {
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    
    //Реєстрація
    registerLink.addEventListener("click", function() {
        document.querySelectorAll(".wrapper")[0].style.display = "none";
        document.querySelectorAll(".wrapper")[1].style.display = "block";
    });

    //Вхід
    loginLink.addEventListener("click", function() {
        document.querySelectorAll(".wrapper")[1].style.display = "none";
        document.querySelectorAll(".wrapper")[0].style.display = "block";
    });
    
    //Створення нового паролю
    forgotPasswordLink.addEventListener("click", function() {
        document.querySelectorAll(".wrapper")[0].style.display = "none"; 
        document.querySelectorAll(".wrapper")[2].style.display = "block"; 
    });

    const loginLinkForgotPassword = document.getElementById("loginLinkForgotPassword");

    loginLinkForgotPassword.addEventListener("click", function() {
        document.querySelectorAll(".wrapper")[2].style.display = "none";
        document.querySelectorAll(".wrapper")[0].style.display = "block";
    });
});