



function Carousel({search,setsearch}) {
  
    const clicked = (e)=>{
        e.preventDefault()
       setsearch("")
    }
  return (
   <>
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" alt="no image right now"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?fruit" className="d-block w-100" alt="pizza.jpg"/>
    </div>
  </div>
 
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
  
</div>
<form action="" className='fm'>
<input type="text" placeholder='search...' value={search} onChange={(e)=>{
 setsearch(e.target.value)
}}/>
<button className='btn' onClick={clicked}>show all food</button>
</form>

   </>
  )
}

export default Carousel
