import React from 'react'
import Product from './Product'
import Category from './Categories'
import GoToTop from './GoToTop'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide m-3" data-bs-ride="carousel">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/banner.png" class="d-block w-100" alt="IPhone" height="700px"/>
    </div>
                        <div class="carousel-item">
                            <img src="/assets/images/1.png" class="d-block w-100" alt="IPhone" height="700px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/2.png" class="d-block w-100" alt="IPhone" height="700px"/>
    </div>
                            <div class="carousel-item">
                                <img src="/assets/images/3.png" class="d-block w-100" alt="IPhone" height="700px"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Category/>
                        <Product/>   
                        <GoToTop/>             
                    </div>
                    )
}

                    export default Home
