import React from "react";
import Card from "../Card/Card";
import { ReactComponent as Loader } from '../../assets/images/loader.svg';

const Main = (props) => {
    const { isLoading, hotels } = props;
    return (
        <div className="container">
            <div className="hero is-small has-text-centered">
                <div className="hero-body">
                    <h1 className="title has-text-weight-bold">Bienvenido a Maimo</h1>
                    <h2 className="subtitle">Los mejores hoteles</h2>
                </div>
                    
            </div>
            
            {!isLoading ? (
                hotels.length > 0 ? (
                    <div className="columns is-multiline is-mobile">
                        {hotels.map((hotel) =>
                            <Card key={hotel.name} hotel={hotel} />
                        )}
                    </div>
                )
                    :
                    (<p> NO HAY RESULTADOS </p>)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Main;
