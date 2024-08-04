const funkos = [
    {
        id: 1,
        nombre: "Ant-Man",
        precio: 22000,
        img: "img/ant-man.jpg",
    },
    {
        id: 2,
        nombre: "Capitan America",
        precio: 60000,
        img: "img/capitan-america.jpg"
    },
    {
        id: 3,
        nombre: "Black Panther",
        precio: 45000,
        img: "img/blackpanther.jpg"
    },
    {
        id: 4,
        nombre: "Black Widow",
        precio: 33000,
        img: "img/black-widow.jpg"
    },
    {
        id: 5,
        nombre: "Groot",
        precio: 25000,
        img: "img/groot.jpg"
    },
    {
        id: 6,
        nombre: "Iron Man",
        precio: 65000,
        img: "img/iron-man.jpg"
    },
    {
        id: 7,
        nombre: "Iron Spider",
        precio: 58000,
        img: "img/iron-spider.jpg"
    },
    {
        id: 8,
        nombre: "Batman",
        precio: 60000,
        img: "img/batman.jpg"
    },
    {
        id: 9,
        nombre: "Joker",
        precio: 45000,
        img: "img/jocker.jpg"
    },
    {
        id: 10,
        nombre: "Thanos",
        precio: 32000,
        img: "img/thanos.jpg"
    }
]

const productosSection = document.getElementById("productos")
const carritoItems = document.getElementById("carrito-items")
const totalSpan = document.getElementById("total")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

//para buscar
const buscadorFunko = document.getElementById("buscador-funko")
buscadorFunko.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const filteredFunkos = funkos.filter(funko => funko.nombre.toLowerCase().includes(searchTerm))
    mostrarProductos(filteredFunkos)
})

function mostrarProductos(mostrar) {
    productosSection.innerHTML = ""
    mostrar.forEach(el => {
        productosSection.innerHTML +=
            `<div class="productoss">
        <h2>${el.nombre}</h2>
        <p>$${el.precio}</p>
        <img src="${el.img}" class= "funkosImg"/>
        <button class="boton" onclick="agregarCarrito(${el.id})"> comprar</button>
        </div>`
    })
}

funkos.forEach((el) => {
    productosSection.innerHTML +=
        `<div class="productoss">
    <h2>${el.nombre}</h2>
    <p>$${el.precio}</p>
    <img src="${el.img}" class= "funkosImg"/>
    <button class="boton" onclick="agregarCarrito(${el.id})"> comprar</button>
    </div>`
})

function agregarCarrito(id) {
    const producto = funkos.find(el => el.id === id)
    const productosEnCarrito = carrito.find(item => item.producto.id === id)
    if (productosEnCarrito) {
        productosEnCarrito.cantidad++
    } else {
        carrito.push({ producto, cantidad: 1 })
    }
    actulizarCarrito()
}

function eliminarCompra(id,) {
    const productosEnCarrito = carrito.find(item => item.producto.id === id)
    if (productosEnCarrito) {
        productosEnCarrito.cantidad--

        if (productosEnCarrito.cantidad <= 0) {
            carrito = carrito.filter(item => item.producto.id !== id)
        }
    }
    actulizarCarrito()
}

function actulizarCarrito() {
    carritoItems.innerHTML = ""
    let total = 0
    carrito.forEach(item => {
        const { producto, cantidad } = item
        carritoItems.innerHTML +=
            `<div classs="carrito-items">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <p>Cantidad ${cantidad}</p>
        <button onclick= "agregarCarrito(${producto.id})">+</button>
        <button onclick= "eliminarCompra(${producto.id})">-</button>
        </div>`
        total += producto.precio * cantidad
    })
    totalSpan.innerText = total
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

document.getElementById("finalizar-compras").addEventListener("click", () => {
    const mensajeTotal = document.getElementById("mensaje-total")
    const total = totalSpan.innerText
    mensajeTotal.innerText = `Total a pagar : $${total}`
    carrito = []
    actulizarCarrito()
})












