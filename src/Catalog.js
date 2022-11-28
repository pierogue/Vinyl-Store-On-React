import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// Импортируем нужные действия




function Catalog(props){

    const search = useSelector((state) => state.search.value);
	const content = useSelector((state)=> state.catalog.value)
    function checkQuery(product){
        return (
            product.name.includes(search)
            || product.price.toString().includes(search)
            || product.amount.toString().includes(search)
            // || (product.year ? product.year.toString().includes(search) : 0)
			// || (product.author ? product.author.toString().includes(search) : 0)
			// || (product.genre ? product.genre.toString().include(search) : 0)
        )
    }

    return(
      
        content.map((product)=>{
            if(checkQuery(product)){
                return(<div className='CatalogProduct' >
                    <div style={{width:300, height:300, display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={product.image} style={product.author?{boxShadow:'black 0px 0px 5px', width:250}:{width:250}}/>
                    </div>
                    <span style={{textAlign:'center', fontWeight:'bolder'}}>{product.name}</span>
					{product.author ? <span style={{textAlign:'center'}}>{product.author}</span> : <></>}
                    <span style={{textAlign:'center', fontWeight:"bold"}}>{product.price} BYN</span>
					{product.year ? <span style={{textAlign:"center"}}>{product.year} г.</span>:<></>}
                </div>)
            }
            else {
                return(<></>)
            }
        })
    )

}

export default Catalog;
