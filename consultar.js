var buscarCliente = function () {

    var documentoBuscar =
        document.getElementById(
            "buscarIdentificacion"
        ).value;

    var tmp =
        localStorage.getItem(
            "datos"
        );

    var datos =
        JSON.parse(tmp);

    var posicion =
        datos.findIndex(
            (item) =>
            item.documento == documentoBuscar
        );

    if (posicion == -1) {

        document.getElementById(
            "resultadoBusqueda"
        ).innerHTML =

            "<h4>Cliente no encontrado</h4>";

    } else {

        document.getElementById(
            "resultadoBusqueda"
        ).innerHTML =

            "<h4>Bienvenido "
            + datos[posicion].nombre +
            "</h4>"

            + "<p><strong>Documento:</strong> "
            + datos[posicion].documento +
            "</p>"

            + "<p><strong>Teléfono:</strong> "
            + datos[posicion].telefono +
            "</p>"

            + "<p><strong>Ciudad:</strong> "
            + datos[posicion].ciudad +
            "</p>"

            + "<p><strong>Edad:</strong> "
            + datos[posicion].edad +
            "</p>"

            + "<p><strong>Servicio de Interés:</strong> "
            + datos[posicion].servicio +
            "</p>"

            + "<p><strong>Correo:</strong> "
            + datos[posicion].correo +
            "</p>";

    }

};