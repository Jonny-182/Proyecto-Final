import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "¿Está seguro?",
            text: "¡No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, ordenar!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "¡Completo!",
                text: "Su pedido se ha realizado con éxito",
                icon: "success"
              });
            }
          });
    }
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>Especiales de la semana</h2>
                <button>Menú</button>
            </div>


            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt=""/>
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Ordene ahora</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;