import React from 'react'
import {Container} from './styles'

 const Layout: React.FC = () => {

    return (
        <Container>
            <div className="landing">
                <h1>Let's pay.</h1>
                <h3>It's easy.</h3>
                <span>Total: $120.20</span>
            </div>
            <div className="card">
                <div className="circles">
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                </div>
                <div className="credit-card">
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/03/Mastercard-Logo-1.png" alt="master"></img>
                    <span>CARD NUMBER</span>
                    <span id="numbers">**** **** **** 2234</span>

                    <div className="bottom-card">
                         <span>LUIS FELIPE D LIMA</span>
                         <div className="valid-thru">
                            <span>VALID THROUGH</span>
                            <span>01/28</span>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            <div className="form">
                <form>
                    <div className="card-number">
                    <label>Card Number</label>
                    <input type="text"/>
                    </div>
                 

                    <div className="validate">
                    <label>Valid Until</label>
                    <input type="text"/>
                    </div>
                   

                    <div className="name">
                    <label>Name</label>
                    <input type="text"/>
                    </div>
                   

                    <div className="cvv">
                    <label>CVV</label>
                    <div className="input-button">
                        <input type="text"/>
                        <button>Pay Now</button>
                    </div>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Layout;