export const fn = (a, b, c) => {

  const precioA = 12;     
  const precioB = 14;     
  const precioC = 16;     

  if (a < 0 || b < 0 || c < 0) {                                                
     throw new Error("Introduzca una cantidad de empanadas válida");
  }

  else if ((a + b + c) >= 40) {                                                
     throw new Error("Excede la cantidad máxima de empanadas");
  }

  else if ((a + b + c) % 3 != 0) {                                              
     throw new Error("No se aplica oferta 3x1");
  }
  else {
     let salida = Math.ceil(((a * precioA) + (b * precioB) + (c * precioC))   / 3);        

     return salida;                                                                        
  };

}
