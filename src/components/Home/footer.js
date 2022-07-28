import React from "react";
import './footer.css';

const Footer = () => {
    return(
        <footer>
            <div className="contanier">
                <div className="row">
                    <div className="col-lg-12 col-md-12 text-center">
                        <a href="#">Register</a>
                        <a href="#">Forum</a>
                        <a href="#">Affiliate</a>
                        <a href="#">FAQ</a>
                    </div>
                </div>
            </div>
            <section className="footer-copy">
                <div className="contanier">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 text-center">
                            © 2021. Foodera. All rights reserved. 
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        
    )
}

export default Footer;