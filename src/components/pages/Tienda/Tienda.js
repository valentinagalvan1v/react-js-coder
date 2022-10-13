import NavTienda from "./NavTienda"
import ItemListContainer from "./ItemListContainer"
import Footer from "../../Footer"


export default function Tienda() {

    return (
        <>
            <div className="Tienda">
                <NavTienda />
                <ItemListContainer />
                <Footer />
            </div>
        </>
    )
}