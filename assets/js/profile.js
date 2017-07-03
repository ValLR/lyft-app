
$(document).ready(function () {
    getFromLocalStorage(); //obtener local storage
});

//Obtener elementos de este html para buscar mediante local storage los datos almacenados
function getFromLocalStorage() {
    $('#photo').css('background-image', 'url(' + localStorage.getItem('photo') + ')');
    $('.profile-img').attr('src', localStorage.getItem('photo') );   
    $('#firstname').html(localStorage.getItem('firstname'));
    $('#firstname_nav').html(localStorage.getItem('firstname'));    
    $('#home').html(localStorage.getItem('home'));
    $('#music').html(localStorage.getItem('music'));
    $('#hobbies').html(localStorage.getItem('hobbies'));
}

