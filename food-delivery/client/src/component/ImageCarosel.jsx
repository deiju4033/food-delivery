import React from 'react'


function ImageCarosel() {
  return (
   
        <>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{width:'100%', height:'500px'}} src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg" class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img style={{width:'100%', height:'500px'}} src="https://img.freepik.com/premium-photo/photo-closeup-shot-delicious-food_829042-89.jpg" class="d-block w-100" alt="..."/>
     
    </div>
    <div class="carousel-item">
      <img style={{width:'100%', height:'500px'}} src="https://img.freepik.com/free-photo/front-view-yummy-french-fries-with-cheeseburgers-dark-background-snack-dish-fast-food-toast-burger-dinner_140725-158687.jpg" class="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
        </>
   
  )
}

export default ImageCarosel