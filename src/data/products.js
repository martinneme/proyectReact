export  const products= [{
    "id": 1,
    "title": "robust style",
    "description": "For Champions",
    "price": "$245",
    "urlImg": "./img/watch1.jpg"
}, {
    "id": 2,
    "title": "Montreal Style",
    "description": "For fresh people",
    "price": "$255",
    "urlImg": "./img/watch2.jpg"
}, {
    "id": 3,
    "title": "Classic style",
    "description": "For classic people",
    "price": "$256",
    "urlImg": "./img/watch3.jpg"
},
{
    "id": 4,
    "title": "Smart watch",
    "description": "For working time",
    "price": "$257",
    "urlImg": "./img/watch4.jpg"
}

]


export  const newTask = new Promise ((resolve, reject) => {
    setTimeout(() => {
      let StateOfAnswer = true;
      if(StateOfAnswer){
         resolve(products);
      }else{
        reject("No se han podido obtener los datos del servidor")
      } 
    }, 3000)
    
  })