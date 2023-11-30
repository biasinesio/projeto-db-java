package br.com.beatrizsinesio.queixaexpressa.controller;

import br.com.beatrizsinesio.queixaexpressa.dto.UsuarioDTO;
import br.com.beatrizsinesio.queixaexpressa.model.Usuario;
import br.com.beatrizsinesio.queixaexpressa.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<UsuarioDTO> listar() {
        List<Usuario> usuarioList = usuarioService.listaUsuarios();
        List<UsuarioDTO> usuarioDTOList = new ArrayList<>();
        for (Usuario usuario : usuarioList) {
            usuarioDTOList.add(UsuarioDTO.builder()
                    .nome(usuario.getNome())
                    .build());
        }

        return usuarioDTOList;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario salvar(@RequestBody Usuario usuario) {
        return usuarioService.salvaUsuario(usuario);
    }
}