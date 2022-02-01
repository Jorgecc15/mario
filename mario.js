function piso(nPisos,altura){
    let texto = <p></p>
    return"<p>" + "#" + "</p>";
}
let nPisos;
let altura;
do{
nPisos=Number(prompt("ingrese el numero de pisos"))
}while(nPisos%1 !=0||nPisos>10||nPisos<=0||isNaN(nPisos))
do{
altura=Number(prompt("ingrese la altura"))
}while(altura%1 !=0||altura>10||altura<=0||isNaN(altura))
let contenido="";

for(let i=1;i<altura-nPisos;texto+'&nbsp'){
    return texto
}
for(let i = 1;nPisos;texto+"#")


let contenedor=document.querySelector("#contenedor");
contenedor.innerHTML= contenido;
