import logo from '../../images/gmbnLogo.svg';
import logoMobile from '../../images/gmbnLogo-text.svg'
import ActionCTAs from './ActionCTAs';
import SocialContainer from './SocialContainer';

function Header(){
    return (
        <header className="header">
            <div className="container-xl">
                <div className="header__inner">
                    <img className="header__logo d-none d-lg-inline" src={logo} alt="logo"/>
                    <img className="header__logo d-inline d-lg-none" src={logoMobile} alt="logo"/>
                    <div className="d-none d-lg-flex me-2">
                        <SocialContainer />
                        <ActionCTAs />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;