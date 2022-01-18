function piso(nPisos,altura){
    //to do
    return"<p>" + "####" + "</p>";
}
let nPisos;
do{
nPisos=Number(prompt("ingrese el numero de pisos"))
}while(nPisos%1 !=0||nPisos>10||nPisos<=0||isNaN(nPisos))
let contenido="";
for(let i=1;i<=nPisos;i++){
    contenido=contenido+piso(i,nPisos)
}

let contenedor=document.querySelector("#contenedor");
contenedor.innerHTML= contenido;






