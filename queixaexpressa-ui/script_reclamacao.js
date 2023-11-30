function pegarDadosCadastro() {
        
        let nomeUsuarioSelect = document.querySelector("#ListaUsuarios");

        console.log(nomeUsuarioSelect)
        let nomeUsuario = nomeUsuarioSelect.value;

        let emailReclamacao = document.getElementById("emailReclamacaoInput").value;
        let mensagemReclamacao = document.getElementById("mensagemReclamacao").value;
    
        let dadosCadastro = { nome: nomeUsuario, email: emailReclamacao, mensagem: mensagemReclamacao };
        console.log(nomeUsuario)
        console.log(dadosCadastro)
        inserirMensagem(dadosCadastro);
        document.getElementById('reclamacaoForm').reset();
    }