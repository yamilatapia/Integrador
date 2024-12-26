/*1. Estructura de Datos 
a) Crear un array de objetos llamado libros que contenga al menos 10 libros.*/

const prompt= require('prompt-sync') ();

const libros = [
    { 
        ID: 100,
        titulo: 'Rebelion en la granja',
        autor:'George Orwell',
        anio: 1945,
        genero: 'novela',
        disponible: true
    },

    { 
        ID: 101,
        titulo:'Rebelion en la granja',
        autor:'George Orwell',
        anio: 1945,
        genero: 'novela',
        disponible: false
    },
    { 
        ID: 102,
        titulo: 'Ana Frank',
        autor: 'Pepe',
        anio: 1945,
        genero: 'novela',
        disponible: false
    },
    { 
        ID: 103,
        titulo: '50 sombras de Grey',
        autor:'Pepita',
        anio: 1945,
        genero: 'Novela',
        disponible: false
    },
    /*{ ID: 104, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
    { ID: 105, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
    { ID: 106, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
    { ID: 107, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
    { ID: 108, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
    { ID: 109, titulo: 'Rebelion en la granja', autor:'George Orwell', anio: 1945, genero: 'novela', disponible: false},
*/
]


/*b) Crear un array de objetos llamado usuarios con al menos 5 usuarios. */

const usuarios = [
    {
        ID: 1,
        nombre: 'Yamila',
        email: 'yamilatapia@hotmail.com',
        librosPrestados: [101, 105]
    },
    {
        ID: 2,
        nombre: 'Celeste',
        email: 'celeste@hotmail.com',
        librosPrestados: [100, 103]
    },
    {
        ID: 3,
        nombre: 'Faby',
        email: 'faby@hotmail.com',
        librosPrestados: [102]
    },
    {
        ID: 4,
        nombre: 'Ana',
        email: 'ana@hotmail.com',
        librosPrestados: []
    },
    {
        ID: 5,
        nombre: 'Deborah',
        email: 'debo@hotmail.com',
        librosPrestados: []
    },

]

/*2-------------------------------------------------
 a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) 
que agregue un nuevo libro al array libros.*/

function agregarLibro(ID, titulo, autor, anio, genero,) {
    let nuevoLibro = {    //creamos un nuevo objeto para guardas las nuevas propiedades
        ID: ID,
        titulo: titulo,
        autor: autor,
        anio: anio,
        genero: genero,
    };
    libros.push(nuevoLibro);
    
}

agregarLibro(108,"Bambi", "Bernardita", 1993, "Infantil"); //llamamos a la funcion y le asignamos las nuevas propiedades de ese libro
console.log(libros) //mostramos por consola a libros y pushea el nuevo libro que le pasamos 

/*b) Crear una función buscarLibro(criterio, valor) que permita buscar 
libros por título, autor o género utilizando el algoritmo de búsqueda 
lineal.*/


/*3------------------------------------------------------
Implementar una función registrarUsuario(nombre, email) que 
agregue un nuevo usuario al array usuarios. */
 function registrarUsuario(nombre, email){
    let nuevoUsuario = {
        id: usuarios.length + 1, //Asignamos un id nuevo basado en la longitud de mi array de ususarios
        nombre: nombre,
        email: email,
        librosPrestados: [] //como es nuevo no tiene libros prestados

    };
    usuarios.push(nuevoUsuario); //agrego el nuevo usuario
    return nuevoUsuario; //retorno el nuevo usuario

 }

 console.log(registrarUsuario("Frank", "frank@hotmail.com"));//muestro el nuevo

 registrarUsuario("Frank", "frank@hotmail.com"); //registramos un nuevo usuario
 console.log(usuarios);// muestro el nuevo array


/*Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios*/

function mostrarTodosLosUsuarios (){
    return usuarios
}

console.log(mostrarTodosLosUsuarios());

/*) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email. 
*/

function buscarUsuario(email){
    for (let i = 0; i < usuarios.length; i++){
        if(usuarios[i].email === email) {
            return usuarios[i];
        }

    }
}

console.log(buscarUsuario("yamilatapia@hotmail.com"));