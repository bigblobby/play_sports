import shopLogo from '../../images/gmbnTextBlack.svg';
import youtubeLogo from '../../images/YouTubeLogo.png';

function ActionCTAs(){
    return (
        <div className="action-ctas">
            <a className="action-ctas__link" href="/">
                <img src={shopLogo} alt=""/>
                <span>Shop</span>
            </a>
            <a className="action-ctas__link" href="/">
                <img src={youtubeLogo} alt=""/>
                <span>Subscribe</span>
            </a>
        </div>
    )
}

export default ActionCTAs;