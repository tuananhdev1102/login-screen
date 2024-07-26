import './Css/Header.css';
import userImg from '../../assets/user.jpg';

function Header() {
    return (
        <>
            <header className="header">
                <h1 className="headerLogo">
                    LOGO
                </h1>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Our Services</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                <div className="headerUser">
                    {/* <img src="/assets/user.jpg" alt='User' /> */}
                    <img src={userImg} alt="" />
                </div>
            </header>
        </>
    );
}

export default Header;
