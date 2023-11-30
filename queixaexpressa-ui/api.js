function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'http://localhost:8080/reclamacao',
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Request-With'
    },
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });
    
    console.log(retorno)
    return retorno;
}

function inserirMensagem(obj) {

    console.log(JSON.stringify(obj));
    var consulta = $.ajax({

        url: 'http://localhost:8080/reclamacao',
        method: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json',
        async: false,
        contentType: 'application/json',
        success: function () {
            alert('Reclamação enviada com sucesso!');
            
        },
        error: function () {
            alert('Erro ao enviar reclamação.');
        }
    });
}

function cadastrarUsuario(obj) {

    $.ajax({
        url: 'http://localhost:8080/usuarios',
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Request-With'
    },
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function () {
            alert('Usuário cadastrado com sucesso!');
            limparFormulario();
        },
        error: function () {
            alert('Erro ao cadastrar usuário.');
        }
    });
}

function listaUsuarios() {
    var retorno = [];

    var consulta = $.ajax({
        url: 'http://localhost:8080/usuarios',
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Request-With'
    },
        dataType: 'json',
        async: false
    }).fail(function(){
        return retorno;
    });

    consulta.done(function(data) {
        retorno = data;
    });
    
    console.log(retorno)
    return retorno;
}

function limparFormulario() {
    document.getElementById('CadastroEsc').reset();
}

