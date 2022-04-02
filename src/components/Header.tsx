import '../styles/app-theme.css';
import Logo from '../assets/Logo.png';
import Search from '../assets/search.png';
import Hearth from '../assets/hearth.png';
import Bag from '../assets/bag.png';

const Header = () => {
  return (
    <div className="header">
        <span className="logo">
            <img src={Logo} alt=""/>
        </span>
        <div className="menu-item">
            <span className="menu-item_icon">
                <img src={Search} alt=""/>
            </span>
        </div>
        <div className="menu-item">
            <span className="menu-item_icon">
                <img src={Hearth} alt=""/>    
            </span>
        </div>
        <div className="menu-item">
            <span className="menu-item_icon">
                <img src={Bag} alt=""/>
                <div className='floating-count'>1</div>
            </span>
        </div>
        <div className="menu-item">
            <span className="menu-item_icon">
                <div className='menu-item_icon-line'></div>
                <div className='menu-item_icon-line second'></div>
                <div className='menu-item_icon-line third'></div>
            </span>
        </div>
    </div>
  )
}

export default Header