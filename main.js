
alert("Bienvenido a esta tienda virtual")

let nombre = prompt("Ingrese su nombre")
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre");
        
    }
    console.log(nombre) 


    class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio
    }
}

const pantalon = new Producto ("pantalon", 7600);
const camisa = new Producto ("camisa",4500);
const remera = new Producto ("remera", 3500);
const gorra = new Producto ("gorra", 1500);
const medias = new Producto ("medias", 350);
const short = new Producto ( "short", 800 )
const camiseta = new Producto ("camiseta", 5300);

const arrayProductos = [pantalon, camisa, remera, gorra, medias, short, camiseta];

console.log(arrayProductos);

arrayProductos.forEach((producto)=>{
    console.log(producto.nombre);
    
});

const arrayProductosConIva = arrayProductos.map ( (producto =>{
    return {
        nombre: producto.nombre,
        precio: (producto.precio*1.21)
    }
}))
console.log(arrayProductosConIva);


    let prodSeleccionado = parseInt(prompt("Cual producto lleva?\n1)Pantalón\n2)Camisa\n3)Remera\n4)Gorra\n5)Medias\n6)Short\n7)Camiseta"))

    



