import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css"

const Home = () => {
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
        </Fragment>
        
    )
}

export default Home;