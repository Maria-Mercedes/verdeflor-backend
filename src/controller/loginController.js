import { gerarToken } from "../utils/jwt.js";
import loginService from "../service/login/loginService.js";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/login', async (req, resp) => {
    try {
        let credenciais = req.body;

        let info = await loginService(credenciais);

        let token = gerarToken(info);

        resp.send({token})
    } catch (err) {
        resp.status(401).send({erro: err.message});
    }
}) 

export default endpoints;