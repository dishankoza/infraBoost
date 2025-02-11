import fs from 'fs';
import path from 'path';

export const getAllFiles = (folderPath: string) => {
    let response: string[] = [];
    const allfilesAndFolder = fs.readdirSync(folderPath)
    allfilesAndFolder.map(file => {
        const filepath = path.join(folderPath, file);
        if(fs.statSync(filepath).isDirectory())
            response.concat(getAllFiles(filepath))
        else
            response.push(filepath);
    })
    return response;
}