

// // Funcion para crear usuarios
// const signForm= document.querySelector('#registro')











// // Clase persona

// class usuario {
//     constructor(user,password,email,phone){
//         this.user=

//     }
// }


// class Persona {
//     constructor(nombre,edad,tiempo){
//         this.nombre=nombre;
//         // this.edad=edad;
//         // this.tiempo=tiempo;
//         this.objetivos=[];
//         this.performance=0;
//     }

//     agregarObjetivo(ListaObjetivo){
//         this.objetivos=ListaObjetivo;
//     }

    
// }


// // Definir la clase Objetivos

// class Objetivo {
//     constructor (obj,min,max,peso){
//         this.obj= obj;
//         this.min=min;
//         this.max=max;
//         this.peso=peso;
//         this.real=0;
//         this.pesoreal=0;
//     }


// }

// //funcion para ingresar datos de persona 

// function IngresarDatosPersona(){
//     const nombre= prompt("Ingresar nombre de colaborador:");

//     // const edad= prompt("Ingresar edad de colaborador:");
//     // const tiempo= prompt("Ingresar tiempo de colaborador:");

//     return new Persona(nombre);
// }


// //Funcion para ingresar datos de cinco objetivos

// function ingresarObjetivos() {
//     const objetivos = [];
//     let pesototal=0;
  
//     for (let i = 0; i < 4; i++) {
    
//       let obj= prompt ("Ingresa nombre del objetivo "+(i+1));
//       console.log(obj);
//       let min = parseFloat(prompt("Ingresa el valor mínimo para el objetivo "+(i + 1)));
//       console.log(min);
//       let max = parseFloat(prompt("Ingresa el valor máximo para el objetivo "+(i + 1)));
//       console.log(max);
//       let peso= parseFloat(prompt("Ingresa el peso para el objetivo"+ (i + 1)));
//       console.log(peso)

//       pesototal+=peso;
        
//       objetivos.push(new Objetivo(obj,min, max, peso));
//       console.log(pesototal);
//     }

//     if (pesototal!=100){
//         alert("La suma de los pesos debe ser mayor a 100");
//         return ingresarObjetivos()
//     }


//     return objetivos;
//   }
  







// // haciendo la funcion del calculo inversamente proporcional 



// function calculoInverso(min,max,pesos,numero) {

//     let puntaje;

//     if (numero>=min){
//         puntaje=0;
//     } 
//     else if (numero <=max) {
//         puntaje=pesos;
//     }
//     else if (numero>max && numero<min) {
//         puntaje= (numero-min)*(100/(max-min))/100*pesos;
//     }
//     return puntaje
// }


// // funcion calculo directo 

// function calculoDirecto(min,max,pesos,numero) {

//     let puntaje;

//     if (numero>=max){
//         puntaje=pesos;
//     } 
//     else if (numero<=min) {
//         puntaje=0;
//     }
//     // else if (numero>min && numero>max) {
//     else{
//         puntaje= ((pesos)/(max-min))*(numero-min);
//     }
       
    
//     return puntaje
// }

// // Haciendo funcion para  calcular resultados

// function calcularResultado(colaborador){
//     let perf = 0
//     for(const i of colaborador.objetivos){;
//         i.real = parseFloat(prompt("Ingrese valor real de objetivo "+i.obj));

//         if(i.max> i.min){

//             i.pesoreal=calculoDirecto(i.min,i.max,i.peso,i.real)
//         }

//         else{
//             i.pesoreal=calculoInverso(i.min,i.max,i.peso,i.real)
//         }

//         perf+=i.pesoreal
//     }

//     colaborador.performance=perf;
// }


// const personas= []

// while(true){
//     const colab = IngresarDatosPersona();
//     const objetivos = ingresarObjetivos();
    
//     colab.objetivos = objetivos;
//     personas.push(colab);

//     const continuar = confirm("¿Quieres ingresar datos de otra persona?");
//     if (!continuar) {
//       break;
//     }
// }

// let nomColabEvaluar = prompt("Ingrese nombre de la persona que quiera evaluar: ")

// const personaEvaluar = personas.find((el)=> el.nombre===nomColabEvaluar);

// calcularResultado(personaEvaluar)
// console.log(personaEvaluar.objetivos)
// console.log(personaEvaluar)

// alert("El desempeño de "+personaEvaluar.nombre+" es "+personaEvaluar.performance)



// var objpersona = []

// function guardarenmemoria(){
//     let nombrepersona = document.getElementById('txtNombres').value;
//     let posicion = document.getElementById('txtPosicion').value;
//     let obj1nombre = document.getElementById('txtObj1Nom').value;
//     let obj1peso = document.getElementById('txtObj1Peso').value;
//     let obj1min = document.getElementById('txtObj1Min').value;
//     let obj1max = document.getElementById('txtObj1Max').value;
//     let obj1pesonactualizado = 0;

//     objpersona.push({
//         nombrepersona:nombrepersona,
//         posicion:posicion,
//         obj1nombre:obj1nombre,
//         obj1peso:obj1peso,
//         obj1min:obj1min,
//         obj1max:obj1max
//     })

//     localStorage.setItem("ListaNomObj",JSON.stringify(objpersona));
//     lsttabla = JSON.parse(localStorage.getItem("ListaNomObj"));
//     mostrarDatosEnTabla();

// }

// function mostrarDatosEnTabla() {
//     var tabla = document.getElementById('tblEvaluacion').getElementsByTagName('tbody')[0];

//     // Limpiar el contenido previo de la tabla
//     tabla.innerHTML = "";

//     // Recorrer el JSON y agregar filas a la tabla
//     for (var i = 0; i < lsttabla.length; i++) {
//         var fila = tabla.insertRow(tabla.rows.length);
//         var celda1 = fila.insertCell(0);
//         var celda2 = fila.insertCell(1);
//         var celda3 = fila.insertCell(2);
//         var celda4 = fila.insertCell(3);
//         var celda5 = fila.insertCell(4);
//         var celda6 = fila.insertCell(5);
//         // Agrega más celdas según la estructura de tu JSON

//         // Asignar valores a las celdas
//         celda1.innerHTML = lsttabla[i].nombrepersona; // Reemplaza 'propiedad1' con el nombre real de la propiedad en tu JSON
//         celda2.innerHTML = lsttabla[i].posicion; // Reemplaza 'propiedad2' con el nombre real de la propiedad en tu JSON
//         celda3.innerHTML = lsttabla[i].obj1nombre;
//         celda4.innerHTML = lsttabla[i].obj1peso;
//         celda5.innerHTML = lsttabla[i].obj1min;
//         celda6.innerHTML = lsttabla[i].obj1max;    
        
//         // Asigna más propiedades según la estructura de tu JSON
//     }
// }




const input_obj= document.getElementById('ingresar-objetivo');
const input_peso= document.getElementById('ingresar-peso');
const input_max= document.getElementById('ingresasr-max');
const input_min=document.getElementById('ingresar-min')
const boton_agregar=document.getElementById('boton-agregar')
const boton_guardar=document.getElementById('boton-guardar')
const lista_objetivos= document.getElementById('lista-objetivos')

function agregarObjetivo() {
    if(input_obj.value){
        //Crear objetivo
        let nuevo_objetivo= document.createElement('div');
        nuevo_objetivo.classList.add('objetivo');
       
        //texto ingresado por el usuario 

        let texto= document.createElement('p');
        texto.innerText=input_obj.value;
        nuevo_objetivo.appendChild(texto);

        //Crear y agregar el contenedor de los iconos

        let iconos=document.createElement('div');
        iconos.classList.add('iconos');
        nuevo_objetivo.appendChild(iconos);

        //iconos

        let editar=document.createElement('i');
        editar.classList.add('bi','bi-pencil-fill','icono-editar');

        let eliminar=document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');

        iconos.append(editar,eliminar);

        //Agregar tarea a lista

        lista_objetivos.appendChild(nuevo_objetivo);

    } else{
        alert('Por favor ingresar una tarea')
    }
}

boton_agregar.addEventListener('click',agregarObjetivo);
