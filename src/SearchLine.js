import React from 'react'   
import './App.css'
import {searchSet} from './searchSlice';
import {sortSet} from './catalogSlice';
import { useSelector, useDispatch } from 'react-redux';
import { catalogTypeSet} from './catalogSlice'

function SearchLine(props){

    const dispatch = useDispatch();

    const onSearchChangeInput = (e)=>{
        dispatch(searchSet(e.target.value))
    }

    const onSortChange = (e)=>{
        dispatch(sortSet(e.target.value))
    }

    return(
        <div>
            <input type={'text'} style={{width: '100%', height: '40px', fontSize: 20}} placeholder='Поиск по каталогу' onChange={onSearchChangeInput}/>
            <div className='ButtonContainer'>
                <button value={'price'} onClick={onSortChange}>Цена</button>
                <button value={'count'} onClick={onSortChange}>Количество</button>
                <button value={'name'} onClick={onSortChange}>Название</button>
            </div>
        </div>
    )
}

export default SearchLine;
