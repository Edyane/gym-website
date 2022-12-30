import React from "react";
import "../../styles/Pricing.css";

const Pricing = () => {
    return <section>
        <div className="container">
            <div className="pricing__top">
                <h2 className="section__title">Gym <span className="highlights">Pricing</span> Plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br></br> elit. Rerum molestias odit numquam
                perferendis.</p>
            </div>

        {/* ------ Pricing Wrapper ------ */}
        <div className="pricing__wrapper">
            <div className="pricing__item">
                <div className="pricing__card-top">
                    <h2 className="section__title">Regular Members</h2>
                    <h2 className="pricing section__title">$50 <span>/month</span></h2>
                </div>

                <div className="services">
                    <ul>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the gym</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i></span> Customer support</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i></span> Personal trainer</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                        <li><span><i className="ri-checkbox-blank-circle-fill"></i></span> 5 classes per week</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </section>
}

export default Pricing;