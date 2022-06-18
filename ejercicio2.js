//Busqueda de planos falsos
function filtrarDatos(plano1,plano2,plano3,plano4,plano5,plano6,plano7,plano8,plano9,plano10,buscarPlanos){ 
    setTimeout(function(){ 
        let planos = [plano1,plano2,plano3,plano4,plano5,plano6,plano7,plano8,plano9,plano10] 
        let planosFiltrados = planos.filter(function(plano){ 
         return plano<=10; 
    }) 
    buscarPlanos(planosFiltrados) 
    },10000) 
} 
     
filtrarDatos(100,20,15,16,40,14,20,50,13,22,function(planos){ 
    if(planos.length>0){ 
        console.log("Chewbacca y Han despegaron de la nave"); 
    } 
    else{ 
        console.log("Busque los planos") 
    }
});