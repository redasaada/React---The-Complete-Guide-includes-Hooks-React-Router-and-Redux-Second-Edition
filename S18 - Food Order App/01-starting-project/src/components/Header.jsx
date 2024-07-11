import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumber, item) => {
        return totalNumber + item.quantity;
    },0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id={"main-header"}>
            <div id={"title"}>
                <img src={logoImg} alt="A restaurant"/>
                <h1>ReactFood</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    );
};