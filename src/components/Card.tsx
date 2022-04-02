import '../styles/card.css';

interface CardProps {
    product: Product;
}

interface Product {
    name: string;
    price: number;
}

export const Card = ({ product }: CardProps) => {
  return (
    <div className='card_container'>
        <div className='card_photo'>

        </div>
        <span className='card_title'>
            {product.name}
        </span>
        <span className='card_price'>
            ${product.price}
        </span>
    </div>
  )
}
