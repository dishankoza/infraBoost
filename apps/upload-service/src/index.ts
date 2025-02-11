import { createServer } from './server'
import { log } from "@repo/logger";
import dotenv from 'dotenv';
import { generate } from './utils/generate';
import { getAllFiles } from './utils/getFiles';
import simpleGit from 'simple-git';
import path from 'path';

dotenv.config();
const app = createServer();
const port = process.env.PORT || 3004;

app.post("/deploy", async (req, res) => {
    
    try {
        const repoUrl = req.body.repoUrl;
        const id = generate();
        await simpleGit().clone(repoUrl, path.join(__dirname, "..", `repos/${id}`))
        const files = getAllFiles(path.join(__dirname, '..', `repos/7ixtn`))
        console.log(files)
        res.json({id});   
    } catch (error) {
        res.status(400)
    }
});


app.listen(port, () => {
    log(`Server listening on port ${port}`)
})