(function(){


    const miFuncion = function( a: string ) {
        return a.toUpperCase();
    }

    const miFuncionF = ( a: string ) => a.toUpperCase();

    const sumarN = function( a:number, b:number) {
        return a + b;
    }

    //const sumarF = ( a:number, b:number ) => a + b;
    //Definiendo el tipo de retorno
    const sumarF = ( a:number, b:number ):number => a + b;

    const nombre = ( ): string => 'Hola Luisa';

    const hulk = {
        nombre: 'Hulk',
        smash() {
            
            //Ejecutar en determinado tiempo
            setTimeout( () => {
                
                console.log(`${ this.nombre } smash!!!`);

            }, 1000 );
            
        }
    }


    hulk.smash();

})();



