document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('btnAñadir').addEventListener('click', function(){
        const nombre = document.getElementById('nombrePro').value;
        const precio = document.getElementById('precioPro').value;
        const id = document.getElementById('idPro').value;
        
        agregarProducto(nombre, precio, id);
    });

});

function agregarProducto(nombre, precio, id){

    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerText = nombre;

    const td2 = document.createElement('td');
    td2.innerText = precio;

    const td3 = document.createElement('td');
    td3.innerText = id;

    const td4 = document.createElement('td');
    const btnLmnr = document.createElement('button');
    btnLmnr.setAttribute('class', 'btn btn-danger');
    btnLmnr.innerText = 'Eliminar';
    td4.appendChild(btnLmnr);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    const tabla = document.getElementById('miTabla');

    tabla.querySelector('tbody').appendChild(tr);
    return tabla;
}