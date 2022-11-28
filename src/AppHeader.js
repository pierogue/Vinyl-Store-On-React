import React from 'react'   
import logo from './imgs/logo.svg'
import user from './imgs/user.png'
import cart from './imgs/shopping-cart.png'

import { catalogTypeSet } from './catalogSlice'
import { useDispatch } from 'react-redux'

function AppHeader(props){

    const dispatch = useDispatch();

    return (
        <header className='AppHeader'>
            <div className='ButtonContainer'>
                <button onClick={()=>dispatch(catalogTypeSet("vinyl"))}>Пластинки</button>
                <button onClick={()=>dispatch(catalogTypeSet("players"))}>Проигрыватели</button>
            </div>
            <div className='HeaderCover'>
                <img src={logo} style={{width: 500}}/>
                <div className='HeaderControl'>
                    <div>
                        <img src={user}/>
                    </div>
                    <div>
                        <img src={cart}/>
                    </div>
                </div>  
            </div>
        </header>
    );

}

export default AppHeader;