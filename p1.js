let input =document.querySelector('#con')
let submit =document.querySelector('#submit')
let value = document.querySelector('#value')

submit.addEventListener('click',function(e){
    e.preventDefault()
     console.log(input.value)
    if(input.value === ''){
        alert('Please enterer value')

    }else{
       
         fun(input.value)
    }
})
async function fun(val) {

    let response =await fetch('https://restcountries.com/v3.1/name/'+val)
    let re =await fetch('https://restcountries.com/v3.1/name/'+ val)
  //  let cl = await fetch('https://restcountries.com/v3.1/name/'+val)
    
    
    let res = await response.json()
    let r = await re.json()
   // let c=await cl.json() 

    // console.log(Object.values(c[0].altSpellings)[0])
    console.log(Object.values(res[0].currencies)[0].name)
    console.log(Object.values(res[0].capital))
    
   // co.innerHTML = 'Name:- '+ Object.values(c[0].altSpellings)[0]
    cu.innerHTML = 'Capital:- '+ Object.values(res[0].capital)
    value.innerHTML = 'Currency :- '+ Object.values(res[0].currencies)[0].name 
    sy.innerHTML = 'Symbol:- '+ Object.values(res[0].currencies)[0].symbol
}