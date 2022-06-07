const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

const libertadores = {
    'olimpia':{
        'name': 'Club Olimpia',
        'libertadores':3,
    },
    'unknown':{
        'name': 'unknown',
        'libertadores':'unknown',
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:club', (request,response)=>{
    const club = request.params.club.toLowerCase()
    if(libertadores[club]){
        response.json(libertadores[club])
    }else{
        response.json(libertadores['unknown']) 
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})