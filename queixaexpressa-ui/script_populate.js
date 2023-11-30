document.addEventListener('DOMContentLoaded', function populateSelect(){
    const listaUsuariosHtml = document.getElementById('ListaUsuarios');
        
    var listaUsuariosSelect = listaUsuarios();
    
    listaUsuariosSelect.forEach(user => {
        const option = document.createElement('option');
        option.value = user.nome;
        option.text = user.nome;
        listaUsuariosHtml.add(option);
    });
})