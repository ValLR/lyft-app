var photo_url = ''; //almacenamiento de foto

$(document).ready(function () {
    $("#btn-upload").click(handleFileSelect);//handleFileSelect, extrae los archivos que esten en un fileinput
    $("#btn-save").click(saveToLocalStorage); //guarda a local storage
    getFromLocalStorage(); //obtener local storage
});

function handleFileSelect() {
    var files = $('#files')[0].files; 

    // obtiene la imagen que se selecciono en el input file, y se la asigna a la imagen :obtenido de https://www.html5rocks.com/en/tutorials/file/dndfiles/
    for (var i = 0, file; file = files[i]; i++) {

        // Si la imagen coincide, proseguir
        if (!file.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader(); //objeto js para procesar archivos

        // Cuando carga la imagen 
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                $('#photo').attr('src', e.target.result);//asigna la imagen a la funcion 
                photo_url = e.target.result;
            };
        })(file);

        // lee la imagen como una URL
        reader.readAsDataURL(file);
    }
}
//Guardar a Local Storage
function saveToLocalStorage() {
    if (typeof (Storage) !== "undefined") {//soporte del navegador
       
        if (photo_url != '') {//si la foto es diferente de vacìo
            localStorage.setItem('photo', photo_url);
        }
        if ($('#firstname').val() != '') {//si el nombre es diferente de vacío
            localStorage.setItem('firstname', $('#firstname').val());
        }
        if ($('#home').val() != ''){//si el valor es diferente de vacìo
            localStorage.setItem('home', $('#home').val());
        }
        if ($('#music').val() != ''){//si el valor es diferente de vacìo
            localStorage.setItem('music', $('#music').val());
        }
        if ($('#hobbies').val() != ''){//si el valor es diferente de vacìo
            localStorage.setItem('hobbies', $('#hobbies').val());
        }

        alert('Datos actualizados');       
        
    } else {
        //No hay soporte de navegador
        console.log('Sorry there is not support for local storage.')
    }
}

function getFromLocalStorage() {
    console.log('getting info for: ' + localStorage.getItem('firstname'));
    $('#photo').attr('src', localStorage.getItem('photo'));
    $('#firstname').val(localStorage.getItem('firstname'));
    $('#home').val(localStorage.getItem('home'));
    $('#music').val(localStorage.getItem('music'));
    $('#hobbies').val(localStorage.getItem('hobbies'));
}