const fs  = require('fs')



// Sync - Blocking Request
// fs.writeFileSync('./testfile.txt', 'Az Bytes')

// Async - Non-Blocking Request
// fs.writeFile('./testfile1.txt', 'Az Bytes', (err) => {})


console.log(1)

fs.readFile('./users.txt', 'utf-8', (err, res) => {
    console.log(res)
})

console.log(2)
console.log(2)
console.log(2)
