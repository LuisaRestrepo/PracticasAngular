"use strict";
function activar(quien, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    mensaje = quien + " activo la " + objeto;
    console.log(mensaje);
}
activar("Gordon", "Licuadora");
