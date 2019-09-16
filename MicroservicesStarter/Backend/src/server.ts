
import { Server } from 'http';
import { AddressInfo } from 'net';

import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';

const readDirAsync = promisify(fs.readdir),
    readFile = promisify(fs.readFile);

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.json());

app.get('/', async (req, res, next) => {
    const path = req.query['path'];
    //TODO: Divide and move script to different files
    res.write(`
    <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script>
        const startMicroservices = () => {
            const checkedCheckboxes = [...document.querySelectorAll('input:checked')].map(e=>e.name);
            const urlParams = new URLSearchParams(location.search);
            const basePath = urlParams.get('path');
            const microservicesPaths = checkedCheckboxes.map(msName => basePath + '/' + msName);
            $.ajax({
                type: 'POST',
                url: '/start',
                data: JSON.stringify(microservicesPaths),
                contentType: 'application/json'
            });
        };
    </script>
    </head>
    <body>
    <h1>Yohoho and a bottle o\' Rum</h1>
    `);

    try {
        const microservices = await getNodeMicroservices(path);
        if (microservices.length) {
            res.write(`<form>`);
            microservices.forEach(ms => {
                res.write(`<label><input type='checkbox' name='${ms}' value='${ms}'/>${ms}</label>`);
            });
            res.write(`<input type="button" value="Start" onclick="startMicroservices()">`);
            res.write(`</form>`);
        }
        else {
            res.write('<h1>No files available</h1>');
        }
    }
    catch (err) {
        console.log(err);
        res.write('<h1>No such path</h1>');
    }

    res.write(`
    </body>
    </html>
    `);
    res.end();
});

app.post('/start', async (req, res, next) => {
    const msPaths: [] = req.body;
    for (const index in msPaths) {
        const path = msPaths[index];
        const startCommand = await getStartCommand(path + '/microservice');

        exec(`start cmd.exe /k "cd ${path} & ${startCommand}"`, (err, stdout, stderr) => {
            if (err) {
                console.log(err);
            }

            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        });
    }
});

const server: Server = app.listen(80, 'localhost', () => {
    const host = (server.address() as AddressInfo).address;
    const port = (server.address() as AddressInfo).port;
    console.log(`MicroserviceStarter is listening at http://${host}:${port}`);
});


const resWriteHeader = (res: express.Response) => {
};

const getNodeMicroservices = async (path: string): Promise<string[]> => {
    const nodeMicroservices = [];

    const dirContent = await readDirAsync(path);
    const subDirs = dirContent.filter(content => fs.statSync(`${path}/${content}`).isDirectory());
    for (const index in subDirs) {
        const subDir = subDirs[index];
        const subDirContent = await readDirAsync(`${path}/${subDir}`);
        if (subDirContent.includes('microservice')) {
            nodeMicroservices.push(subDir);
        }
    }

    return nodeMicroservices;
};

const getStartCommand = async (path: string): Promise<string> => {
    const fileString = await readFile(path, 'utf8');
    const fileSerialized = JSON.parse(fileString);
    return fileSerialized['startCommand'];
};

//TODO: Create a function to read the content of 'microservice' file in order to receive the microservice initialization command
//  Example microservice file content:
//  
//  In node microservice
//      start-command: 'npm start'
//
//  Node microservice that requires arguments
//      start-command: 'npm start arg1 arg2'
//
//  In dotnet microservice
//      start-command: 'dotnet run'
//
// To run the commands, use the following:  https://stackoverflow.com/questions/38032047/how-to-execute-npm-run-command-programmatically