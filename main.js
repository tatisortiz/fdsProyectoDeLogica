export const fn = (a, b, c) => {
   // Precios de las empanadas según el número de ingredientes
   const prices = [12, 14, 16];
 
   // Validar que las cantidades sean números positivos
   if (typeof a !== 'number' || a < 0 || typeof b !== 'number' || b < 0 || typeof c !== 'number' || c < 0) {
     throw new Error("Introduzca una cantidad de empanadas válida");
   }
 
   let promotionEmpanadas = [];
   let mitadEmpanadas = [];
   let total = 0;
 
   // Crear un array con los precios de todas las empanadas
   let empanadas = [];
   empanadas.push(...Array(a).fill(prices[0]));
   empanadas.push(...Array(b).fill(prices[1]));
   empanadas.push(...Array(c).fill(prices[2]));
 
   // Validar que se pueda aplicar la oferta 3x1
   if (empanadas.length % 3 !== 0) {
     throw new Error("No se aplica oferta 3x1");
   }
 
   // Generar todas las combinaciones posibles de mitades de empanadas
   for (let i = 0; i < empanadas.length; i++) {
     mitadEmpanadas.push((empanadas[i] + empanadas[(empanadas.length - 1) - i]) / 2);
   }
 
   // Ordenar las mitades de empanadas por precio descendente
   mitadEmpanadas.sort((x, y) => y - x);
 
   // Agrupar los tríos y sumar el precio más alto
   for (let i = 0; i < mitadEmpanadas.length; i++) {
     promotionEmpanadas.push(mitadEmpanadas[i]);
     if (promotionEmpanadas.length === 3) {
       promotionEmpanadas.sort((x, y) => y - x);
       total += promotionEmpanadas[0];
       promotionEmpanadas = [];
     }
   }
 
   return total;
 };
 
 