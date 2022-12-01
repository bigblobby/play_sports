import {useState} from 'react';
import ActionCTAs from './ActionCTAs';
import SocialContainer from './SocialContainer';

function Navigation(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({});

    function toggleMenu(){
        setMenuOpen(prevState => !prevState);
    }

    function toggleDropdown(e){
        const id = e.currentTarget.dataset.dropdownId;
        const dropdownsCopy = {...dropdowns};

        if(Object.hasOwn(dropdownsCopy, id)){
            dropdownsCopy[id] = !dropdownsCopy[id];
        } else {
            dropdownsCopy[id] = true;
        }

        setDropdowns(dropdownsCopy);
    }

    return (
        <nav className="nav">
            <div className="container-xl">
                <div className="nav__inner">
                    <button className={"nav__menu " + (menuOpen ? "nav__menu--open" : "")} onClick={toggleMenu}>
                        <span className="nav__menu-line"></span>
                        <span className="nav__menu-line"></span>
                        <span className="nav__menu-line"></span>
                    </button>
                    <button className="nav__item-search d-flex d-lg-none">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <div className={"nav__container " + (menuOpen ? "nav__container--open" : "") }>
                        <ul className={"nav__list"}>
                            <li className="nav__item">
                                <a className="nav__link" href="">Dirt Shed Show</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">How To</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">MTB Maintenance</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">Martyn Ashton</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">Ask GMBN</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">Features</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">Top 10s</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="">GMBN Tech</a>
                            </li>
                            <li className={"nav__item nav__dropdown " + (dropdowns['presenter-id'] ? "nav__dropdown--open" : "")} data-dropdown-id="presenter-id" onClick={toggleDropdown}>
                                <div className="d-flex align-center justify-content-between">
                                    <a className="nav__link" href="/">Presenters</a>
                                    <span><i className="fa-solid fa-chevron-down"></i></span>
                                </div>
                                <ul className="nav__list-inner">
                                    <li><a className="nav__link" href="/">A</a></li>
                                    <li><a className="nav__link" href="/">B</a></li>
                                    <li><a className="nav__link" href="/">C</a></li>
                                    <li><a className="nav__link" href="/">D</a></li>
                                    <li><a className="nav__link" href="/">View all</a></li>
                                </ul>
                            </li>
                            <li className="nav__item-search d-none d-lg-flex">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </li>
                        </ul>

                        <div className="d-block d-lg-none">
                            <SocialContainer />
                        </div>
                        <div className="d-flex d-lg-none justify-content-center py-4 mb-5">
                            <ActionCTAs />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;