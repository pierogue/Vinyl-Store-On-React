import React from 'react'   
import logo from './imgs/logo.svg'
export default function AppFooter(){
    return(<div className='AppFooter' style={{display:"flex", justifyContent:"center"}}>
        <img src={logo} style={{height:180}}/>
    </div>)
}