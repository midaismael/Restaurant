import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";
import prideimg from './../../assets/1.png';
import foodimg from './../../assets/2.png';
import Data from '../../Data';
import Carousel from 'react-bootstrap/Carousel';
import item1 from './../../assets/man.jpg'
import item2 from './../../assets/girl.jpg'

const Home = () => {
    
    const blogitem = Data.map((item) =>{
        return(
            <div className='col-md-4 '>
                <div className="box">
                    <img src={item.img} alt="" />
                    <h5>{item.title}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price} <del>{item.priceold}</del></h6>
                    </div>
                    <button><a href="#">Order Now</a></button>
                </div>
        )
    })
    return (
        <Fragment>
            <Header/>
            <section className="numbers">
                <div className="contanier">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1544+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7544+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>

                </div>

            </section>
            <section className='pride'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={prideimg} title='prideimg' alt="" />
                        </div>
                        <div className="col-md-6">
                            <h2>
                            We pride ourselves on making real food from the best ingredients.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <button><a href="#A ">learn more</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ingredients'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>
                            We make everything by hand with the best possible ingredients.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href="#">learn more</a></button>
                        </div>
                        <div className="col-md-6">
                           < img src={foodimg} title='foodimg' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="paralex">
                <div className="container">
                    <div className="col-lg-12 col-md-12">            
                        <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <a href="#">Watch Our Story</a>
                    </div>
                </div>
            </section>
            <section className="blogs">
                <div className="contanier">
                    <div className="row">
                        <div className="col-md-12 col-lg-12 mb-4">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                        <div className='row'>
                            {blogitem}
                        </div>
                    </div>
                </div>
            </section>
            <section className="sliderx">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>Testimonials</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                                    <Carousel>
                            <Carousel.Item>
                                <img
                                src={item1}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                                <span>Ahmed Ismael</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={item2}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
                                <span>Farida Ismael</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={item1}
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                <p>
                                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."
                                </p>
                                <span>Ali Ismael</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <section className="questions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-lg-6">
                            <h5>~ Do you bake breads containing animal fats or products?</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-lg-6">
                            <h5>~ Can I order your products online?</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                        <div className="col-lg-6">
                            <h5>~ When are you opening a shop near me?</h5>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bakers">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h3>Baked fresh daily by bakers with passion.</h3>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <button><a href="#">Learn More</a></button>
                        </div>                                   
                    </div>
                </div>
            </section>
            <section className="subscribe">
                <div className="contanier">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>Hurry up! Subscribe our newsletter <br/> and get 25% Off</h1>
                            <p>Limited time offer for this month. No credit card required.</p>
                            <form>
                                <input placeholder="Email Address here"></input>
                                <button><a href="#">subscribe</a></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
        
    )
}

export default Home;