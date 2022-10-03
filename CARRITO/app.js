const productos = [
    {nombre: "Maat Mousse", precio: 5000},
    {nombre: "Card title", precio: 4000},
    {nombre: "Hidrisage Aquaprim Crema Hidratante", precio: 4500},
    {nombre: "Hidrisage Lumed Resverax", precio: 7500},
    {nombre: "Hidrisage Yeux - Contorno de ojos", precio: 2000},
    {nombre: "Hidrisage Lumed Base Compacta", precio: 5000},
];

let carrito = []

let seleccion = prompt("Hola! Desea comprar algun producto?")

while (seleccion != "si" && seleccion!= "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Hola! Desea comprar algo? Si o no")
}

if(seleccion=="si"){
    alert("A continuacion le mostramos nuestra lista de productos")
    let todoslosProductos = productos.map ((productos => productos.nombre + "" + productos.precio + "$"));
    alert (todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("¡Gracias por visitar nuestra tienda, hasta pronto!")
}

while (seleccion != "no"){
    let productos = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(productos == "Maat Mousse" || 
    productos== "Card title" || 
    productos=="Hidrisage Aquaprim Crema Hidratante" || 
    productos=="Hidrisage Lumed Resverax" || 
    productos=="Hidrisage Yeux - Contorno de ojos" || 
    productos=="Hidrisage Lumed Base Compacta"){
        switch(productos){
            case "Maat Mousse":
                precio= 900;
                break;
            case "Card title":
                precio= 1400;
                break;
            case "Hidrisage Aquaprim Crema Hidratante":
                precio= 900;
                break;
            case "  Hidrisage Lumed Resverax  ":
                precio= 1490;
                break;
            case "Hidrisage Yeux - Contorno de ojos":
                precio= 1400;
                break;
            case " Hidrisage Lumed Base Compacta ":
                precio= 1390;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuanta cantidad quiere llevar?"))

    carrito.push({productos, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion=="no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal)=> {
            console.log(`productos: 
            ${carritoFinal.productos}, 
            unidades: ${carrito.unidades},
            total a pagar por productos ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce ((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar por su pedido: ${total}`)