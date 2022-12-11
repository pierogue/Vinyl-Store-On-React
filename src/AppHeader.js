import React from 'react'
import logo from './imgs/logo.svg'
import user from './imgs/user.svg'
import cart from './imgs/shopping-cart.svg'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import { catalogTypeSet } from './catalogSlice'
import { useDispatch } from 'react-redux'

function AppHeader(props) {

    const dispatch = useDispatch();

    return (
        <header className='AppHeader'>
            <div className='ButtonContainer'>
                <Link to={'/'}>
                    <button>Каталог</button>
                </Link>
                {/* <Link to={'/'}>
                    <button onClick={() => dispatch(catalogTypeSet("players"))}>Проигрыватели</button>
                </Link> */}
            </div>
            <div className='HeaderCover'>
                <img src={logo} style={{ width: 500 }} />
                <div className='HeaderControl'>
                    <div>
                        <Link to={'/login'}>
                            <img src={user} />
                        </Link>
                    </div>
                    <div>
                        <Link to={"/cart"}>
                            <img src={cart} />
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );

}

export default AppHeader;