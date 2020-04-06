/*==================================================================*/
var btn = document.getElementById("btn1").addEventListener("click",getPost);
var con = 0;
var div = document.getElementById("card");

function getPost(){
  fetch("https://jsonplaceholder.typicode.com/photos/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
      div.innerHTML =`
        <div class="card col-3 m-1 mx-auto">
          <img class="card-img-top" src="${data[con].url}">
          <div class="card-body">
              <h5 class="card-title">"${data[con].albumId}"</h5>
              <p class="card-text">"${data[con].id}"</p>
              <p class="card-text">"${data[con].title}"</p>
              <img class="card-img-top" src="${data[con].thumbnailUrl}">
          </div>
          </img>
        </div>
     `
      
      con = con + 1;
      console.log(data);
  })
  .catch((error)=>{
    console.log(error);
  });
}
/*==================================================================*/

var div = document.getElementById("card");
$("#btn2").click(function(){
    
    $.ajax({
      type: 'POST',
      url: "https://jsonplaceholder.typicode.com/photos/",
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        div.innerHTML =`
        <div class="card col-3 m-1 mx-auto">
         <div class="card-body">
         <h5 class="card-title">"${data.id}"</h5>
         </div>
        </div>
        `
        console.log(data);
      },
      error: function (xhr, status) {
  
        console.log("Error");
                      
      }
    });
  
  });

/*==================================================================*/

$("#btn3").click(function(){
    
    $.ajax({
      type: 'PUT',
      url: "https://jsonplaceholder.typicode.com/photos/6",
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        div.innerHTML =`
        <div class="card col-3 m-1 mx-auto">
         <div class="card-body">
         <h5 class="card-title">"${data.id}"</h5>
         </div>
        </div>
        `
        console.log(data);
      },
      error: function (xhr, status) {
  
        console.log("Error");
                      
      }
    });
  
  });

/*==================================================================*/

$("#btn4").click(function(){
    
    $.ajax({
      type: 'PATCH',
      url: "https://jsonplaceholder.typicode.com/photos/6",
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        div.innerHTML =`
        <div class="card col-3 m-1 mx-auto">
        <img class="card-img-top" src="${data.url}">
         <div class="card-body">
         <h5 class="card-title">"${data.albumId}"</h5>
         <p class="card-text">"${data.id}"</p>
         <p class="card-text">"${data.title}"</p>
         <img class="card-img-top" src="${data.thumbnailUrl}">
         </div>
        </div>
        `
        console.log(data);
          
      },
      error: function (xhr, status) {
  
        console.log("Error");
                      
      }
    });
  
  });

/*==================================================================*/

$("#btn5").click(function(){
    
    $.ajax({
      type: 'DELETE',
      url: "https://jsonplaceholder.typicode.com/photos/6",
      contentType: "application/json",
      dataType: 'json',
      success: function(data) {
        div.innerHTML =`
        <div class="card col-3 m-1 mx-auto">
         <div class="card-body">
         <h5 class="card-title">"${JSON.stringify(data)}"</h5>
         </div>
        </div>
        `
        console.log(data);
          
      },
      error: function (xhr, status) {
  
        console.log("Error");
                      
      }
    });
  
  });