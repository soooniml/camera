import { Link } from 'react-router-dom';
import { Navlist } from '../Utils.js/Navlist';
import './Header.css'

const Header = () =>{
    return(
        <>
            <div class="navBackground back">
                <div class="navCenter">
                    <div class="navInline">
                        <ul class="hg">
                            <li>
                                INSTANT
                            </li>
                        </ul>

                        <ul class="list">
                           {
                               Navlist.map(item =>(
                                <li>
                                    <Link to={`/${item.route}`}>{item.title}</Link>
                                </li>
                               ))
                           }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;