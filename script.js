var lang_spanish = {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    }
}
var almacen = {
    nombre: "Informática",
    ubicacion: "CAR Tijuana",
    articulos: [],
    registrar: function(){
        const numInventario = document.getElementById('numInventario').value;
        const numSerie = document.getElementById('numSerie').value;
        const marca = document.getElementById('marca').value;
        const modelo = document.getElementById('modelo').value;
        console.log(numInventario);
        if(numInventario.trim() != '' && numSerie.trim() != '' && marca.trim() != '' && modelo.trim() != ''){
            var articulo = new Articulo(numInventario, numSerie, marca, modelo);
            this.articulos.push(articulo);
            this.display();
        }
    },
    eliminar: function(index){
        this.articulos.splice(index, 1);
        this.display();
    },
    display: function(){
        //console.log(this.articulos.length);
        var dataTable = document.createElement('table');
        dataTable.setAttribute('id', 'myTable');
        dataTable.setAttribute('class', 'table table-striped table-bordered');
        var tHead = document.createElement('thead');
        var rowHead = document.createElement('tr');
        tHead.append(rowHead);
        var th1 = rowHead.insertCell();
        th1.setAttribute('scope', 'col');
        th1.innerHTML = "Número de inventario";
        var th2 = rowHead.insertCell();
        th2.setAttribute('scope', 'col');
        th2.innerHTML = "Número de serie";
        var th3 = rowHead.insertCell();
        th3.setAttribute('scope', 'col');
        th3.innerHTML = "Marca";
        var th4 = rowHead.insertCell();
        th4.setAttribute('scope', 'col');
        th4.innerHTML = "Modelo";
        var th5 = rowHead.insertCell();
        th5.setAttribute('scope', 'col');
        th5.innerHTML = "Eliminar";
        var tBody = document.createElement('tbody');
        tBody.setAttribute('id', 'tableBody');
        dataTable.append(tHead);
        for(var i=0; i<this.articulos.length; i++){
            var tRow = document.createElement("tr");
            var td1 = tRow.insertCell();
            td1.innerHTML = `<td>${this.articulos[i].numInventario}</td>`;
            var td2 = tRow.insertCell();
            td2.innerHTML = `<td>${this.articulos[i].numSerie}</td>`;
            var td3 = tRow.insertCell();
            td3.innerHTML = `<td>${this.articulos[i].marca}</td>`;
            var td4 = tRow.insertCell();
            td4.innerHTML = `<td>${this.articulos[i].modelo}</td>`;
            var td5 = tRow.insertCell();
            var deleteButton = document.createElement('button');
            deleteButton.setAttribute('type', 'button');
            deleteButton.setAttribute('class', 'btn btn-outline-danger');
            deleteButton.setAttribute('onclick', `almacen.eliminar(${i})`);
            deleteButton.innerHTML = `<i class='fa fa-times'></i>`;
            td5.append(deleteButton);
            tBody.append(tRow);
        }
        dataTable.append(tBody);
        var tableDiv = document.getElementById('tableDiv');
        while(tableDiv.firstChild){
            tableDiv.removeChild(tableDiv.firstChild);
        }
        tableDiv.append(dataTable);
        $(document).ready( function () {
            $('#myTable').DataTable( {
                "language": lang_spanish
            });        
        });
    }
}
class Articulo{
    constructor(numI, numS, marca, modelo){
        this.numInventario = numI;
        this.numSerie = numS;
        this.marca = marca;
        this.modelo = modelo;
    }
}