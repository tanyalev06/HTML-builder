// const fs = require('fs');
// const path = require('path');
// const readline = require('readline');
// const rl = readline.createInterface({ input, output });
// const answer = await rl.question(
//     'здесь вы можете ввести приветствие'
//   );
//   console.log(
//     `Thank you for your answer: ${answer}`
//   );
//   rl.close();
// fs.writeFile("hello.txt", answer, function(error){
 
//     if(error) throw error; // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });
const path = require('path').join(__dirname, 'hello.txt');
const fs = require('fs');
const readline = require('readline');
const writeableStream = fs.createWriteStream(path, 'utf-8');
const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});
function question() {
    rl.question("Write your greeting, please\n", (input) => {
        if(input === 'exit') rl.close();
        else {
            writeableStream.write(input +'\n');
            question();
        };
});

}

rl.on("close", () => {
    rl.output.write("Bye, have a good time");
});
fs.promises.writeFile(path, '');
question();
