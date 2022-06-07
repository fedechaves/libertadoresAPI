document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const club = document.querySelector('input').value
    try{
        const response = await fetch(`https://libertadores-api-100devs.herokuapp.com/api/${club}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.copas
    }catch(error){
        console.log(error)
    }
}