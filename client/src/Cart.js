import React from 'react'
import { useSelector } from 'react-redux';
import cancel from './imgs/cancel.svg'
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart } from './cartSlice';

// import { contentVinyl, contentPlayers } from "./catalogSlice";


function Cart() {
    const cart = useSelector((state) => state.cart.value);
    const catalog = useSelector((state)=> state.catalog.value);
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();

    if (cart[0]) {

        let totalPrice = 0;
        for (const prod of cart) {
            totalPrice += (prod.price * prod.amount)
        }

        return (
            <div className='CartContainer' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                <span style={{ fontSize: 60, width: '100%', display: 'block', textAlign:"center", fontWeight: 'normal', flexShrink: 0 }}>
                    Корзина
                </span>
                <div className='OrderBlock'>
                    <form>
                        <div>
                            <label>Имя</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Телефон</label>
                            <input type="tel" />
                        </div>
                        <div>
                            <label>Ваш e-mail</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Город</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Адрес</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Варианты доставки</label>
                            <div>
                                <input type="radio" name="deliver" /><span className="rad">Самовывоз</span>
                            </div>
                            <div>
                                <input type="radio" name="deliver" /><span className="rad">Курьер по Минску</span>
                            </div>
                            <div>
                                <input type="radio" name="deliver" /><span className="rad">Почта</span>
                            </div>
                        </div>
                        <div>
                            <label>Комментарий</label>
                            <textarea></textarea>
                        </div>
                        <div>
                            <label>Промокод</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Способ оплаты</label>
                            <div>
                                <input type="radio" name="payType" /><span className="rad">Наличными при получении</span>
                            </div>
                            <div>
                                <input type="radio" name="payType" /><span className="rad">Онлайн оплата</span>
                            </div>
                        </div>
                        <span style={{display:"block", textAlign:"center", margin:10}}>{totalPrice} BYN</span>
                        <input type="submit" value="Заказать" />
                    </form>
                </div>
                <div className='CartBlock'>
                    {
                        cart.map((product) => {
                            let res = {};
                            Object.assign(res, product);
                            res.amount = catalog.find((i)=>i.name == res.name).amount;
                            
                            return (
                                <div className='CartProduct' key={product.name}>
                                    <img src={process.env.REACT_APP_API_URL + product.img} style={product.author?{boxShadow:'black 0px 0px 5px'}:{}}/>
                                    <span className='ProductName' style={{fontWeight:"bolder"}}>{product.name}</span>
                                    {product.author ? <span className='ProductAuthor'>{product.author}</span> : <></>}
                                    <div className='ProductInformation'>
                                        {product.genre ? <span className='ProductGenre'>{product.genre}</span> : <></>}
                                        {product.year ? <span className='ProductYear'>{product.year} г.</span> : <></>}
                                        <span className='ProductPrice'>{product.price} BYN</span>
                                    </div>
                                    <div className='ProductChangeCount'>
                                        <button onClick={()=>dispatch(deleteFromCart(product))}>
                                            -
                                        </button>
                                        <button onClick={()=>dispatch(addToCart(res))}>
                                            +
                                        </button>
                                    </div>
                                    <span className='ProductCount'>
                                        {product.amount} шт.
                                    </span>
                                    <button className='DeleteButton' onClick={()=>dispatch(deleteFromCart(res))}>
                                        {/* <img src={cancel} style={{height:20, width:20}}/> */}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
    else if (user == null){
        return <span style={{width:'100%',textAlign:"center", display:'inline-block', fontSize:40, marginTop:200, marginBottom:200}}>
                    Войдите в аккаунт!
                </span>
    }
    else {
        return <span style={{width:'100%',textAlign:"center", display:'inline-block', fontSize:40, marginTop:200, marginBottom:200}}>
                    Ваша корзина пуста!
                </span>
    }
}

export default Cart;