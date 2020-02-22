const http = require('http');
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const server = http.createServer((req, res)=>{
    let data = '';
    let sendData = [];
    if(req.method == 'POST'){
        req.on('data',(chunk)=>{
            data+=chunk.toString('utf8');
            fs.writeFile(`./tasks/${uuidv1()}.txt`, data, (error)=>{
                if(error) console.log(error);
            });
        });
        req.on('end', ()=>{
            res.end('Complete write data!');
        })
    }
    if(req.method == 'GET'){
        res.writeHead(200);
        fs.readdir('/SoftServerITAcademy-Node.js/lesson08_HW_Node.js/tasks', (err, data) => {
            if(err) console.log(err);

            /*
            * Как обернуть это в промсы так, чтобы снчала обрабатывались файлы,
            * а после этого уже отправлялся ответ????
            * */

            // new Promise((resolve, reject)=>{
            //     data.forEach(file=>{
            //         new Promise((resolve1, rejected) => {
            //             fs.readFile(`./tasks/${file}`, (err, data)=>{
            //                 if(err) reject(err);
            //                 resolve(data.toString('utf8'));
            //             })
            //         }).then(data=> sendData.push(data));
            //     })
            //     resolve(sendData);
            // }).then(data=>console.log(data));
        });
    }
});

server.listen(7777);