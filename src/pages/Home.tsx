import { useState } from 'react'
import { Card } from '../components/Card';
import { Counter } from '../components/Counter';
import Header from '../components/Header';
import Star from '../assets/star.png';

const Home = () => {

  const [count, setCount] = useState(0);

  const products = [
    {
      name: 'Producto 1',
      price: 130
    },
    {
      name: 'Producto 2',
      price: 130
    },
    {
      name: 'Producto 3',
      price: 130
    }
  ]

  return (
    <div>
        <Header />
        <div className='photo_container'>
          <span className='photo_text'>Photo</span>
        </div>
        <div className="product-info_container">
          <span className='product-info_text'>Pantalones para Dama "The Sideswept Dhoti"</span>
          <div className="product-info_stars">
            <span className="star">
              <img src={Star} />
            </span>
            <span className="star">
              <img src={Star} />
            </span>
            <span className="star">
              <img src={Star} />
            </span>
            <span className="star">
              <img src={Star} />
            </span>
            <span className="star">
              <img src={Star} />
            </span>
            <span className='star_text'>4 de 5</span>
          </div>
          <div className="product-info-price">
            <span className='product-info-price_text'>$ 139.99s</span>
          </div>
        </div>

        <div className="attributes-container">
          <div className="attribute-container">
            <span className='attribute-container_title'>
              TAMAÑO
            </span>
            <div className="attribute-container_option option-disabled">
              <span className='attribute-container_option_text'>S</span>
            </div>
            <div className="attribute-container_option">
              <span className='attribute-container_option_text'>M</span>
            </div>
            <div className="attribute-container_option option-selected">
              <span className='attribute-container_option_text'>L</span>
            </div>
            <div className="attribute-container_option option-disabled">
              <span className='attribute-container_option_text'>XL</span>
            </div>
            <div className="attribute-container_option option-disabled">
              <span className='attribute-container_option_text'>XXL</span>
            </div>
          </div>

          <div className="attribute-container">
            <span className='attribute-container_title kit_title'>
              KIT
            </span>
            <div className="attribute-container_option option-selected kit-option">
              <span className='attribute-container_option_text'>HOME</span>
            </div>
            <div className="attribute-container_option kit-option">
              <span className='attribute-container_option_text'>AWAY</span>
            </div>
            <div className="attribute-container_option kit-option">
              <span className='attribute-container_option_text'>THIRD</span>
            </div>
          </div>

          <div className="attribute-container">
            <span className='attribute-container_title kit_title'>
              CANTIDAD
            </span>
            <Counter count={count} setCount={setCount}/>
          </div>
        </div>

        <div className="add-cart_container">
          <button className="add-cart_button">
            <span className='add-cart_text'>AÑADIR AL CARRITO</span>
          </button>
        </div>

        <div className="description-container">
          <span className='description-container_title'>Descripción</span>
          <span className='description-container_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore distinctio nesciunt quidem harum debitis laudantium quae repellendus </span>
          <a href="#" className='description-container_read-more'>LEER MÁS</a>
        </div>

        <div className='related-container'>
          <span className='related-container_title'>También te podría gustar</span>
          <div className="related-container_cards">
            { products.map((product, index) => <Card product={product} key={index}/> )}
          </div>
        </div>
        
        <div className='footer'>
          <span className='footer_text'>© Copyright</span>
        </div>
    </div>
  )
}

export default Home