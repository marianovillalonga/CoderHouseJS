function validar(){


  if($('#nombre').val()==""){
    alert("Debes agregar el nombre");
    return false;
  }else if($('#email').val()==""){
    alert("Debes agregar el email");
    return false;
  }else if($('#msj').val()==""){
    alert("Debes agregar el mensaje que quieres mandar");
    return false;
  }

}


let botonesCompra = document.querySelectorAll(".botonCompra");
let carrito = [];



for( let boton of botonesCompra){

    boton.addEventListener("click" , agregarCarrito);

}


console.log(botonesCompra);



function agregarCarrito(e){

    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let titulo = padre.querySelector("h5").textContent;
    let parrafo = padre.querySelector("p").textContent;
    let imagen = padre.querySelector("img").src;


    let producto = {
        nombre: titulo,
        desc:parrafo,
        img: imagen
    };


    carrito.push(producto)
    console.log(padre);
    console.log(titulo);

}

let usuarioGlobal = "mariano";
let passGlobal = Mariano2021;
let mensaje =  document.getElementById("mensaje")

function validar(){

    let usuario =  document.getElementById("nomUsu");
    let pass =  document.getElementById("passUsu");

    if (usuario.value == usuarioGlobal && pass.value == passGlobal){
        console.log("Bienvenido a mi sistema");
        let parrafo = document.createElement("p");
        parrafo.innerHTML="Bienvenido a mi sistema";
        mensaje.appendChild(parrafo);
    }else{
        console.log("Usuario o contraseña incorrecta")
    }
    
    console.log(usuario.value);
    console.log(pass.value);

}

function template(){
    let usuario = "Mariano";
    let edad = 22;
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = `<h2>Datos del usuario</h2>
                        <p>nombre del usuario: ${usuario}</p>
                        <p>Edad del usuario: ${edad}</p>`
}
