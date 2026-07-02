function convertir() {
    var celsius = document.getElementById("celsius").value;
    var error = document.getElementById("error");

    error.innerHTML = "";

    if (celsius == "") {
        error.innerHTML = "Debes ingresar un valor";
        return;
    }

    if (isNaN(celsius)) {
        error.innerHTML = "Debes ingresar solo numeros";
        return;
    }

    var fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit").value = fahrenheit + " °F";
}