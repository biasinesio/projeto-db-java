function fazerCadastro() {
    let nome = document.getElementById("nome").value;

    let dadosCadastro = {nome: nome};

    console.log(dadosCadastro)
    cadastrarUsuario(dadosCadastro)
    
    document.getElementById('CadastroEsc').reset();
}