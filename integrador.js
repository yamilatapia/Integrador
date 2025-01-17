/*1. Estructura de Datos 
a) Crear un array de objetos llamado libros que contenga al menos 10 libros.*/

const prompt= require('prompt-sync') ();

const libros = [

    {
        id:1,
        titulo:"Cien años de soledad",
        autor:" juan Lopez",
        anio: 2024,
        genero: "Drama",
        disponible:true
    
    },
    {
      id:2,
      titulo:"El principito",
      autor: "Antoni Saint" ,
      anio:1943,
      genero:" Fabula",
      disponible: false 
    },
    {
        id:3,
        titulo:"El señor de los anillos",
        autor:"Sara Parker",
        anio:2006,
        genero:"Ficcion",
        disponible: true,
    },
    {
        id:4,
        titulo:"fundamentos de enfermeria",
        autor: "Perez Miguel",
        anio:1985,
        genero:"Medicina",
        disponible: true,
    
    },
    {
        id:5,
        titulo:"fundamentos de nutricion",
        autor: "Garcia lucas",
        anio: 1998,
        genero: "Salud",
        disponibilidad: false,
    },
    {
        id:6,
        titulo:"Poemas de locura y muerte",
        autor: "Lorca",
        anio:1012,
        genero: "Romance",
        disponibilidad: true,
    },

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
        librosPrestados: [2, 3]
    },
    {
        ID: 5,
        nombre: 'Deborah',
        email: 'debo@hotmail.com',
        librosPrestados: [1]
    },

]



/*2-------------------------------------------------
 a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) 
que agregue un nuevo libro al array libros.*/

console.log("-------------Los libros actuales son---------------  . ");
console.log(libros);

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
console.log("\n -------Libros actualizados son------------- ");
console.log (libros); //mostramos por consola a libros y pushea el nuevo libro que le pasamos 

/*b) Crear una función buscarLibro(criterio, valor) que permita buscar 
libros por título, autor o género utilizando el algoritmo de búsqueda 
lineal.*/


/*3------------------------------------------------------
Implementar una función registrarUsuario(nombre, email) que 
agregue un nuevo usuario al array usuarios. */

console.log("\n--------Los usuarios son--------------");
console.log(usuarios);

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

 //console.log(registrarUsuario("Frank", "frank@hotmail.com"));//muestro el nuevo

 registrarUsuario("Frank", "frank@hotmail.com"); //registramos un nuevo usuario
 console.log("\n---------------nUsuarios actualizados---------------------");
 //console.log(usuarios);// muestro el nuevo array


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

console.log(buscarUsuario('yamilatapia@hotmail.com'));



/* Implementar una función borrarUsuario(nombre, email) que elimine el 
usuario seleccionado.*/


console.log("---------------------------------------------------")
// 2. Crear la función `borrarUsuario`
function borrarUsuario(nombre, email) {
    // 3. Uso del método `filter`
    const usuariosFiltrados = usuarios.filter(usuario => !(usuario.nombre === nombre && usuario.email === email));
    
    // 4. Comparar la longitud de los arrays
    if (usuarios.length === usuariosFiltrados.length) {
        // 5. Imprimir mensaje si el usuario no se encontró
        console.log(`No se encontró ningún usuario con nombre: ${nombre} y email: ${email}`);
    } else {
        // 5. Imprimir mensaje si el usuario fue eliminado
        console.log(`Usuario con nombre: ${nombre} y email: ${email} ha sido eliminado.`);
    }

    // 6. Retornar el nuevo array
    return usuariosFiltrados;
}

// Ejemplo de uso de la función
const nuevosUsuarios = borrarUsuario("Faby", "faby@hotmail.com"); // Elimina a 
console.log("\n---------------La nueva lista de usuarios es-----------------------")
console.log(nuevosUsuarios);


