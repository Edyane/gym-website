import React from "react";
import "../../styles/Exercises.css";
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

const Exercises = () => {
    return (
        <section>
            <div className="container exercise__container">
                <div className="exercise__top">
                    <h2 className="section__title">
                        Benefits of <span className="highlights">Exercise</span>
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    </p>
                </div>

                {/*------ Exercise List ------*/}
                <div className="exercise__wrapper">
                    <div className="exercise__item">
                        <span className="exercise__icon">
                            <img src={lunges} alt="" />
                        </span>

                        <div className="exercise__content">
                            <h4>Healthy Life</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Exercises;