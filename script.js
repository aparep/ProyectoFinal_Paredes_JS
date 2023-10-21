


// Manipulacion del DOM para ingresar Objetivos

const input_obj= document.getElementById('ingresar-objetivo');
const input_peso= document.getElementById('ingresar-peso');
const input_max= document.getElementById('ingresar-max');
const input_min=document.getElementById('ingresar-min');    
const boton_agregar=document.getElementById('boton-agregar');   
const boton_guardar=document.getElementById('boton-guardar');   
const lista_objetivos= document.getElementById('lista-objetivos');  
const input_nombre= document.getElementById('nombre');
const input_posicion=document.getElementById('posicion');

function agregarObjetivo() {
    if(input_obj.value){
        //Crear objetivo
        let nuevo_objetivo= document.createElement('div');
        nuevo_objetivo.classList.add('row');
       
        //textos ingresados por usuario

        let texto_objetivo= document.createElement('div');
        texto_objetivo.classList.add('col-lg-4')
        texto_objetivo.innerText=input_obj.value;

        let texto_peso= document.createElement('span');
        texto_peso.classList.add('col')
        texto_peso.innerText=input_peso.value;

        let texto_min= document.createElement('span');
        texto_min.classList.add('col')
        texto_min.innerText=input_min.value;

        let texto_max= document.createElement('span');
        texto_max.classList.add('col')
        texto_max.innerText=input_max.value;

        let iconos=document.createElement('span');
        iconos.classList.add('col');
        //agregar el contenedor al nuevo elemento

        nuevo_objetivo.appendChild(texto_objetivo);
        nuevo_objetivo.appendChild(texto_peso);
        nuevo_objetivo.appendChild(texto_min);
        nuevo_objetivo.appendChild(texto_max);
        nuevo_objetivo.appendChild(iconos);

        


        //Crear y agregar el contenedor de los iconos

        // let iconos=document.createElement('span');
        // iconos.classList.add('coliconos');
        // nuevo_objetivo.appendChild(iconos);

        //iconos

        

        let eliminar=document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea)

        iconos.append(eliminar);

        //Agregar tarea a lista

        lista_objetivos.appendChild(nuevo_objetivo);

    } else{
        alert('Por favor ingresar una tarea')
    }
}

function eliminarTarea(e){
    let tarea=e.target.parentNode.parentNode;
    tarea.remove();

}

boton_agregar.addEventListener('click',agregarObjetivo);

let objpersona = []

//Guardar los objetivos  y las personas


// ... Tu código anterior ...

// Función para guardar los datos en Local Storage y limpiar los campos
function guardarenmemoria() {
    if (input_nombre.value && input_posicion.value) {
        let nombre = input_nombre.value;
        let puesto = input_posicion.value;
        let obj = input_obj.value;
        let peso = input_peso.value;
        let min = input_min.value;
        let max = input_max.value;

        // Guardar datos en Local Storage
        objpersona.push({
            nombre: nombre,
            puesto: puesto,
            obj: obj,
            peso: peso,
            min: min,
            max: max
        });

        localStorage.setItem("ListaNomObj", JSON.stringify(objpersona));

        // Limpiar los campos después de guardar
        input_nombre.value = '';
        input_posicion.value = '';
        input_obj.value = '';
        input_peso.value = '';
        input_min.value = '';
        input_max.value = '';

        // También podrías limpiar la lista de objetivos aquí si es necesario
        lista_objetivos.innerHTML = '';

        alert('Datos guardados correctamente en Local Storage.');
    } else {
        alert('Por favor, ingrese un nombre y una posición antes de guardar.');
    }
}

boton_guardar.addEventListener('click', guardarenmemoria);

