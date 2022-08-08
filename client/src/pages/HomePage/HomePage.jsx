import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button';
import './HomePage.css'

const HomePage = () => {
  return (
    
    <div className='pic-background'>
      <div class="item imgnormalizada">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://oasis.opstatics.com/content/dam/oasis/page/2022/na/home/10pro-video/10provideo-mo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>OnePlus 10T 5G Launch Event</h3>
          <p>OnePlus United States</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.rossellimac.es/wp-content/uploads/iPhone-13-pro-family-1-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>iPhone 13 plus</h3>
          <p>iPhone 13 plus</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.adslzone.net/app/uploads-adslzone.net/2022/05/Samsung-1.jpg?x=480&y=375&quality=40"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Samsung Galaxy S22 Ultra</h3>
          <p>
          Samsung Galaxy S22 Ultra
          </p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='buttonHome'>
    <Button variant="outline-dark">Search the best options</Button>
    </div>
    </div>
    </div>
   
  )
}

export default HomePage