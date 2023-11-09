import fs from 'fs'

fs.appendFile('my-file.txt', 'Node.js file created', (err) => {
    if (err) throw err
    console.log('File saved!')
})

setTimeout(() => console.log('Over'), 25000)
