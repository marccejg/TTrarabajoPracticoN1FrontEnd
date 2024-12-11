let lista = document.getElementById("lista");
let totalText = document.getElementById("totalText");
let total = 0;

const productos = [
    { nombre: "Señuelo para dorado Silver", precio: 2000, stock: 5, image: "../image/señuelo1.png" },
    { nombre: "Señuelo para dorado Red", precio: 1500, stock: 5, image: "../image/señuelo2.png" },
    { nombre: "Señuelo para dorado Red", precio: 1100, stock: 7, image: "../image/señuelo3.png" },
    { nombre: "Señuelo para dorado Red", precio: 1100, stock: 7, image: "../image/señuelo4.png" },
    { nombre: "Señuelo para dorado Red", precio: 1100, stock: 7, image: "../image/señuelo5.png" },
];

function pintarProductos(arrayProductos) {
    for (let i = 0; i < arrayProductos.length; i++) {
        lista.innerHTML +=
            ` 
            <li class="contendor">
                <img class= "imagen" src="${arrayProductos[i].image}">
                <p class = "figcaption">Producto: ${arrayProductos[i].nombre} </p >  
                <p class = "precio">Precio: $${arrayProductos[i].precio} </p > 
                <input type="number" class= "stock" id="stock${i}" value="${arrayProductos[i].stock}"readonly >
                <input type="number" class= "cantidad"  id="cantidad${i}" placeholder="Ingrese cantidad" >
                <button class= "btn-compra" id="btn-compra${i}" >Agregar al carrito</button>
                
            </li>

`
    }


    for (let i = 0; i < arrayProductos.length; i++) {
        document.getElementById(`btn-compra${i}`).addEventListener("click", () => {
            comprar(i, productos)
        })
    }
}


function comprar(index, arrayProductos) {
    let stockElement = document.getElementById(`stock${index}`);
    let cantidadElement = document.getElementById(`cantidad${index}`);
    let stock = stockElement.value;
    let cantidad = cantidadElement.value;
    let precio = arrayProductos[index].precio;

    if (cantidad > 0 && cantidad <= stock) {
        total += cantidad * precio;
        alert("Compra exitosa. Pescaste un Total $" + total);
        totalText.innerHTML = `Compra Total = $${total}.-`
        stockElement.value = stock - cantidad;
    } else {
        alert("Compra invalida. La cantidad debe ser mayor a 0 y menor o igual al stock")
    }

}

document.getElementById("btn-finalizar").addEventListener("click", () => {

    alert(`Compra FInalizada por ${total}.- .Buena pesca!!!`)
});

pintarProductos(productos);

