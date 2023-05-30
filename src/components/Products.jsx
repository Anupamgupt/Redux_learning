import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { STATUSES, fetchProducts } from '../store/productSlice';



const Products = () => {
    const dispatch = useDispatch();
    // const [products, setProducts] = useState([]);
    const {data : products,status}= useSelector(state=>state.product)
    // const {products:data} = item;

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     // console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd =(product)=>{
        dispatch(add(product))
    }

    if(status===STATUSES.LOADING){
        return <div>
            loading...
        </div>
    }
    if(status===STATUSES.ERROR){
        return <div>
            Something went wrong...
        </div>
    }
  
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button  className="btn" onClick={()=>handleAdd(product)}>
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;