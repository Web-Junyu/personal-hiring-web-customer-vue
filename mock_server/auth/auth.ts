import { Express, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
function generateJWT() {
    const secretKey = fs
        .readFileSync(path.resolve(__dirname, './secretKey.txt'))
        .toString();
    const token = jwt.sign(
        {
            admin: true,
        },
        secretKey,
        {
            expiresIn: 86400,
        },
    );
    console.log(__dirname);
    console.log('token=', token);
}

const authCallback = (request: Request, response: Response) => {
    console.log('request.params', request.params);
    response.send({
        param: request.query,
        body: request.body,
        headers: request.headers,
    });
};

const AuthController = (app: Express) => app.get('/auth', authCallback);

export default AuthController;
