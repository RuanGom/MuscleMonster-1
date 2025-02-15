import { Router } from "express";
import { CadastroEndereco } from "../repository/enderecoRepository.js";

let endpoints = Router()

endpoints.post('/endereco', async (req, resp) => {

    try {
        let endereco = req.body;

        if(!endereco.contato)
            throw new Error(' Nome para Contato obrigatório')

        if(!endereco.telefone)
            throw new Error(' Telefone para Contato obrigatório')

        if(!endereco.cep)
            throw new Error(' CEP obrigatorio')

        if(isNaN(endereco.cep))
            throw new Error(' CEP Inválido')

        if(!endereco.rua)
            throw new Error(' Rua obrigatória')

        if(!endereco.bairro)
            throw new Error(' Bairro obrigatório')

        if(!endereco.cidade)
            throw new Error('Cidade obrigatória')

        

        let dados = await CadastroEndereco(endereco)
        resp.status(200).send(dados)

    } catch (err) {
        resp.status(404).send({erro: err.message})
    }
})

export default endpoints;