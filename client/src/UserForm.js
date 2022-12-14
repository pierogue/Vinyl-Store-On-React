import React from 'react'   
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSet } from './authSlice';
import { userSet } from './userSlice';
import { login, registration } from './http/userAPI';
import './App.css'
import userIcon from './imgs/user.png'
import { createProduct } from './http/productAPI';

export default function UserForm(props) {
    
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const [catalogType, setCatalogType] = React.useState('players');
    const [name, setName] = React.useState('');
    const [author, setAuthor] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [year, setYear] = React.useState(null);
    const [genre, setGenre] = React.useState(null);
    const [amount, setAmount] = React.useState(null);
    const [img, setImg] = React.useState(null);

    const click = async () => {
        try{
            let data
            if(auth.value) {
                data = await login(email, password)
                console.log(data)
            }
            else {
                if(password !== password2) {
                    return alert('Пароли не совпадают')
                }
                data = await registration(email, password)
            }
            dispatch(userSet(data));
            // history.push('/')
        } catch (e) {
            alert(e.response.data.message)
        }
       
    }

    const addProduct = async () => {
        const formData = new FormData()
            formData.append('catalogType', catalogType)
            formData.append('name', name)
            formData.append('author', author)
            formData.append('price', `${price}`)
            formData.append('year', `${year}`)
            formData.append('genre', genre)
            formData.append('amount', `${amount}`)
            formData.append('img', img)
            console.log(formData)
            await createProduct(formData).then(data => console.log(data))
    }

    const selectFile = e => {
        setImg(e.target.files)
    }


    return (
        !user.value?
        <div className='UserForm' style={{display:"flex", width:'100%', alignItems:'center',justifyContent:'center', flexDirection:'column', flexWrap:'nowrap', height:360}}>
            <div className='UserFormContainer'>
                <div className='UserFormTitle'>
                    <h1 style={{textAlign:"center", margin:10}}>{auth.value? 'Вход' :'Регистрация'}</h1>
                </div>
                <div className='UserFormBody'>
                    <div className='UserFormInput'>
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='UserFormInput'>
                        <input type='password' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {!auth.value && 
                        <div className='UserFormInput'>
                            <input type='password' placeholder='Повторите пароль' onChange={(e)=>setPassword2(e.target.value)}/>
                        </div>}
                    <div className='UserFormInput'>
                        {auth.value? <button type='submit' value='Войти' style={{backgroundColor:'black'}} onClick={click}>Войти</button>:
                        <button type='submit' value='Зарегистрироваться' style={{backgroundColor:'black'}} onClick={click}>Регистрация</button>
                        }
                    </div>
                </div>
            </div>
            {auth.value? <span style={{margin:10}}>Нет аккаунта? <Link onClick={()=>dispatch(authSet(false))}>Регистрация</Link></span> :
            <span style={{margin:10}}>Уже есть аккаунт? <Link onClick={()=>dispatch(authSet(true))}>Войти</Link></span>}
           
        </div>
        :
        <div className='UserBlock' style={{display:'flex', flexDirection:'column', flexWrap:'nowrap', alignItems:"center"}}>
            <span style={{fontSize:40, fontWeight:'bold'}}>Добро пожаловать</span>
            <img src={userIcon} style={{width:100, margin:50}}/>
            <span style={{margin:10}}>Вы авторизованы под почтой <b>{user.value.email}</b></span>
            <Link onClick={()=>{dispatch(userSet(null)); localStorage.clear()}}>Выйти</Link>
            {auth.value && user.value.role === 'ADMIN' &&
            <>
            <span>АДМИН ПАНЕЛЬ</span>
            <div style={{display:'flex', flexDirection:'column'}}>
                <select onChange={(e)=>setCatalogType(e.target.value)}>
                    <option value={'players'}>Добавить проигрыватель</option>
                    <option value={'vinyl'}>Добавить альбом</option>
                </select>
                <input type='text' value={name} placeholder='Название' onChange={(e)=>setName(e.target.value)}/>
                {catalogType === 'vinyl' && <input type='text' value={author} placeholder='Исполнитель' onChange={(e)=>setAuthor(e.target.value)}/>}
                {catalogType === 'vinyl' && <input type='text' value={year} placeholder='Год выпуска' onChange={(e)=>setYear(e.target.value)}/>}
                {catalogType === 'vinyl' && <input type='text' value={genre} placeholder='Жанр' onChange={(e)=>setGenre(e.target.value)}/>}
                <input type='text' placeholder='Цена' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                <input min={1} type='number' placeholder='Количество' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <input type='file' placeholder='Фото' onChange={selectFile}/>
                <button onClick={addProduct}>Добавить</button>
            </div>
            </>
            }
        </div>
    );
}