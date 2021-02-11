var btn = document.getElementById("btn").addEventListener("click",getData);
var con = 0; 
var div= document.getElementById("cardDiv");

function getData(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
        return res.json();
    })
    .then((get)=>{
        for(let con=0; con<9;con++)
        {
            div.innerHTML+=`
            <div id="removediv" class="card col-sm-4 col-md-4 col-lg-4 m-1 mx-auto ">
            
          
            <img class="card-img-top" src="${get[con].thumbnailUrl}">
                <div class="card-body">
                <h5 class="card-text">${get[con].id}</h5>
                <p class="card-title">${get[con].title}</p>
                <button onclick="document.getElementById('removediv').style.display='none'" 
                type="button" class="close" data-dismiss="alert" style="border:none; background-color:white">&times;</button>
               
                </div>
            `    
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })
}

