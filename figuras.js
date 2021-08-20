// cuadrado
console.group("Cuadrado");
const ladoC = 5;
console.log("los lados del cuadrado miden: " +ladoC + "cm");

const perimetroC = ladoC * 4;
console.log("el perimetro del cuadrado es: " +perimetroC + "cm");

const areaC = ladoC * ladoC;
console.log("el área del cuadrado es: " +areaC + "cm²");
console.groupEnd();

// triangulo
console.group("Triangulo");
const ladoT1 = 6;
const ladoT2 = 6;
const ladoT3 = 4;
const altT = 5.5;
const perTri = ladoT1+ladoT2+ladoT3 
const area = (ladoT3 * altT)/2;

console.log("los lados del triangulo son: " 
    + ladoT1 + "cm " 
    + ladoT2 + "cm " 
    + ladoT3 + "cm "
);
console.log("la altura es: " +altT + "cm ");
console.log("el perimetro es: " +perTri + "cm ");
console.log("el area es: " +area + "cm² ");


console.groupEnd();


// circulo
console.group("Circulo");

const radio = 5;
const diametroC = 2 * radio;
const pi = Math.PI;
const perimetroC = diametroC * pi;
const areaC = (radio*radio) * pi;

console.log("el radio es: " +radio + "cm");
console.log("el diametro es: " +diametroC + "cm");
console.log("el PI es: " + pi + "cm");
console.log("el perimnetro es: " +perimetroC + "cm");
console.log("el area es: " +areaC + "cm²");

console.groupEnd();



