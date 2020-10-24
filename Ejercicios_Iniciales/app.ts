// "use strict";
// (() => {
//     // class Avenger {
//     //     nombre: string;
//     //     equipo: string;
//     //     nombreReal: string;
//     //     puedePelear: boolean;
//     //     peleasGanadas: number;
//     //     constructor( nombre: string, equipo: string ){
//     //         this.nombre = nombre;
//     //         this.equipo = equipo;
//     //     }
//     // }
//     class Avenger {
//         // nombre: string;
//         // equipo: string;
//         // nombreReal: string;
//         // puedePelear: boolean;
//         // peleasGanadas: number;
//         constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
//             this.nombre = nombre;
//             this.equipo = equipo;
//             this.nombreReal = nombreReal;
//             this.puedePelear = puedePelear;
//             this.peleasGanadas = peleasGanadas;
//         }
//     }
//     const antman = new Avenger('Antman', 'Capi');
//     console.log(antman);
// })();

//Ejercicio 1 - Introducción typescript, ejecutar con tsc nombreArchivo
//usar tsc -w para que compile a medida que vamos cambiando
//Para definir el tipo de variable nombre: tipo_dato, ejm nombre:string
//Función auto invocada, patrón módulo para que no genere error el archivo .ts (function(){ meter todo el el código acá para que no genere error })();


(function(){
function saludar(nombre:string) {
    console.table('Hola ' + nombre);

}

const wolverine = { nombre: 'Logan' };


saludar( wolverine.nombre);
})();

