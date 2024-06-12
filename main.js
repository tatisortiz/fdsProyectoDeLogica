export const fn = (a, b, c) => {

   const precioA = 12;     
   const precioB = 14;     
   const precioC = 16;     
}


//verifico que ninguna de las cantidades de empanadas sean 0
if (a < 0 || b < 0 || c < 0) {                                              
   throw new Error("Introduzca una cantidad de empanadas valida");
}

// verif que no se exceda de 40 empanadas
else if ((a + b + c) >= 40) {                                                 
   throw new Error("Excede la cantidad máxima de empanadas");
}