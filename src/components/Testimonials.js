import React from "react";
import testi from "../testi";

const Testimonials = () => {

return (
<div className="testi-container">
            <div className="testi-header">
                <h2>Testimonios</h2>
            </div>

            <div className="cards-test">
                {
                    testi.map(testi => <div key={testi.id} className="testi-items">
                        <img src={testi.image} alt=""/>
                        <div className="testi-content">
                            <div className="heading">
                                <h5>{testi.title}</h5>
                                <p>{testi.price}</p>
                            </div>
                            <p>{testi.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonials;