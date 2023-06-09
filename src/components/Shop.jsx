import React from 'react'
import { NavLink } from 'react-router-dom';
import SHOPDATA from '../ShopData';
import GoToTop from './GoToTop';

const Shop = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-1 py-4 mb-5" key={item.id} style={{width: "15rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">{item.price} INR</p>
                        <NavLink to={`/allProducts/${item.id}`} class="btn btn-outline-warning">Buy Now</NavLink>
                    </div>
                    <GoToTop/>
</div>
                );
    }
                return (
                <div>
                    <div className="container mt-3 mb-0 py-5">
                        <div className="row">
                            <div className="col-12 text-center " style={{color: 'grey'}}>
                                <h2>All Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {SHOPDATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Shop
