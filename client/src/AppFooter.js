import React from 'react'   
import logo from './imgs/logo.svg'

export default function AppFooter(){
    return(<div className='AppFooter' style={{display:"flex", justifyContent:"center",flexDirection:'column'}}>
        <img src={logo} style={{height:180}}/>
        <span style={{color:'white', textAlign:'left'}}>Поборцев Анатолий Егорович ФИТ ИСиТ 1 группа 2022г.</span>
    </div>)
}