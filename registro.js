var datos = [];

var tmp = localStorage.getItem("datos");

if (tmp != null) {

    datos = JSON.parse(tmp);

}

var registrarCliente = function () {

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var ciudad = document.getElementById("ciudad").value;
    var edad = document.getElementById("edad").value;
    var documento = document.getElementById("documento").value;
    var servicio = document.getElementById("servicio").value;
    var fecha = document.getElementById("fecha").value;

    var posicion = datos.findIndex(
        (item) => item.correo == correo
    );

    if (nombre === "" || correo === "" || documento === "" || telefono === "" || contrasena === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Debes llenar todos los campos obligatorios'
        });
        return;
    }

    if (posicion == -1) {

        datos.push({

            nombre: nombre,
            correo: correo,
            telefono: telefono,
            ciudad: ciudad,
            edad: edad,
            documento: documento,
            servicio: servicio,
            fecha: fecha

        });

        var resultado = JSON.stringify(datos);

        localStorage.setItem(
            "datos",
            resultado
        );

        Swal.fire({
            icon: 'success',
            title: 'Registro completado',
            text: 'El cliente fue guardado exitosamente',
            confirmButtonText: 'Aceptar',
            timer: 3000,
            timerProgressBar: true
        });

        document.getElementById("nombre").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("servicio").value = "";
        document.getElementById("fecha").value = "";

    } else {

        Swal.fire({
            icon: 'error',
            title: 'Correo electrónico duplicado',
            text: 'El Correo electrónico ya se encuentra registrado.'
        });

    }

};