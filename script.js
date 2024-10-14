document.addEventListener('DOMContentLoaded', function() {
    const formularioRegistro = document.getElementById('formularioRegistro');
    const tablaUsuarios = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];
    const botonListarUsuarios = document.getElementById('listarUsuarios');

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
        { nombre: "Daniel", apellido: "Franco", cedula: "123456", correo: "danielf@email.com" },
        { nombre: "Adriana", apellido: "Navarro", cedula: "654321", correo: "anav@email.com" },
        { nombre: "Karen", apellido: "Caraballo", cedula: "112233", correo: "karen@email.com" }
    ];

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    formularioRegistro.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('cedula').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const nombreUsuario = document.getElementById('nombreUsuario').value;

        if (usuarios.find(usuario => usuario.cedula === cedula)) {
            alert("Id de usuario ya existente.");
            return;
        }

        const nuevoUsuario = {
            nombre,
            apellido,
            cedula,
            correo,
            telefono,
            direccion,
            fechaNacimiento,
            nombreUsuario
        };

        usuarios.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert("Usuario registrado con éxito.");
        formularioRegistro.reset();
    });

    botonListarUsuarios.addEventListener('click', function() {
        tablaUsuarios.innerHTML = '';

        usuarios.forEach(function(usuario) {
            const fila = tablaUsuarios.insertRow();

            const celdaNombre = fila.insertCell(0);
            const celdaApellido = fila.insertCell(1);
            const celdaCedula = fila.insertCell(2);
            const celdaCorreo = fila.insertCell(3);

            celdaNombre.textContent = usuario.nombre;
            celdaApellido.textContent = usuario.apellido;
            celdaCedula.textContent = usuario.cedula;
            celdaCorreo.textContent = usuario.correo;
        });
    });
});
