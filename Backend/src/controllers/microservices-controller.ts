import fs from 'fs';
import { promisify } from 'util';
import { exec } from 'child_process';

const readDirAsync = promisify(fs.readdir),
    readFileAsync = promisify(fs.readFile);

export async function getMicroservices(req: any, res: any, next: any) {
    const path = req.query['path'];
    try {
        const microservicesNames: string[] = await fsGetMicroservices(path);
        res.status(200).send(microservicesNames);
    }
    catch (err) {
        res.status(422).send(err.message);
    }
}

export async function startMicroservices(req: any, res: any, next: any) {
    const msPaths: [] = req.body;
    for (const index in msPaths) {
        const path = msPaths[index];
        const startCommand = await getStartCommand(path + '/microservice');

        exec(`start cmd.exe /k "cd ${path} & ${startCommand}"`, (err, stdout, stderr) => {
            if (err) {
                //TODO: Test the err
                res.status(400).send(err);
            } else {
                res.status(200).send();
            }
        });
    }
}

const fsGetMicroservices = async (path: string): Promise<string[]> => {
    const microservices = [];

    const dirContent = await readDirAsync(path);
    const subDirs = dirContent.filter(content => fs.statSync(`${path}/${content}`).isDirectory());
    for (const index in subDirs) {
        const subDir = subDirs[index];
        const subDirContent = await readDirAsync(`${path}/${subDir}`);
        if (subDirContent.includes('microservice')) {
            microservices.push(subDir);
        }
    }

    return microservices;
};

const getStartCommand = async (path: string): Promise<string> => {
    const fileString = await readFileAsync(path, 'utf8');
    const fileSerialized = JSON.parse(fileString);
    return fileSerialized['startCommand'];
};

// module.exports = {
//     getMicroservices: async (req: any, res: any, next: any) => {
//         const path = req.query['path'];
//         try {
//             const microservicesNames: string[] = await fsGetMicroservices(path);
//             res.status(200).send(microservicesNames);
//         }
//         catch (err) {
//             res.status(422).send(err.message);
//         }
//     },
//     startMicroservices: async (req: any, res: any, next: any) => {
//         const msPaths: [] = req.body;
//         for (const index in msPaths) {
//             const path = msPaths[index];
//             const startCommand = await getStartCommand(path + '/microservice');

//             exec(`start cmd.exe /k "cd ${path} & ${startCommand}"`, (err, stdout, stderr) => {
//                 if (err) {
//                     //TODO: Test the err
//                     res.status(400).send(err);
//                 } else {
//                     res.status(200).send();
//                 }
//             });
//         }
//     }
// }