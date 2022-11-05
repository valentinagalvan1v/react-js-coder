import React from "react"
import ItemListContainer from "../Tienda/ItemListContainer.js";
import Footer from "../../Footer.js"
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <>

            <div className="Home">
                <div className="Portada">
                    <div className="TextRight">
                        <div>
                            <img src="/img/manzanas.jpg" alt="" />
                        </div>
                        <div className="TextPortada">
                            <h1>Ooh My Juice!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste odit aliquam praesentium aliquid soluta eius hic quibusdam ea, fugiat voluptatibus, maxime eaque dolore quam recusandae distinctio nisi, quidem ipsa sint exercitationem. Ad, laudantium, consequuntur eos modi ducimus assumenda quos molestiae quae nobis enim dolores in pariatur aut culpa tempora.</p>
                        </div>
                    </div>
                </div>

                <div className="ProductosDestacados">
                    <div className="NavBlock">
                        <h2>
                            Productos destacados
                        </h2>
                        <Link to='/tienda'>Ver todos los productos</Link>
                    </div>
                    <ItemListContainer page={'home'} />
                </div>

                <div className="ProcesoHome">
                    <div className="NavBlock">
                        <h2>
                            Proceso
                        </h2>
                        <Link to='/proceso'>Ver Proceso</Link>
                    </div>
                    <h1>
                        ¿Cold press?
                    </h1>
                    <div className="TextRight">
                        <div></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste odit aliquam praesentium aliquid soluta eius hic quibusdam ea, fugiat voluptatibus, maxime eaque dolore quam recusandae distinctio nisi, quidem ipsa sint exercitationem. Ad, laudantium, consequuntur eos modi ducimus assumenda quos molestiae quae nobis enim dolores in pariatur aut culpa tempora.</p>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )

}