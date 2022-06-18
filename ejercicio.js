//Funcion de aprendiz padawan
 
var nombre;
var edad;
var planeta;
var estatura;

function estudiantes(nombre,edad,planeta,estatura,callback){ 
       setTimeout(function() { 
     
        let aprendiz = { 
            nombre, 
            edad, 
            planeta, 
            estatura 
        } 
        callback(aprendiz); 
    },10000) 
    } 
    nombre="James";
    edad=14;
    planeta="Javin";
    estatura=2.1;
    estudiantes(nombre,edad,planeta,estatura,function(aprendiz){ 
    if(aprendiz.edad>15){ 
    console.log("El aprendiz padawan: "+aprendiz.nombre+" por su edad tendra manejo del sable de luz"); 
    } else{ 
    console.log("El aprendiz padawan: "+aprendiz.nombre+" manejo de la fuerza"); 
    }
    console.log("de edad: "+aprendiz.edad+ " del planeta: "+aprendiz.planeta+ " de estatura: " +aprendiz.estatura);
})