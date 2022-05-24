import React, { useEffect } from 'react';
import styles from "./style.module.css"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaShoppingBasket } from "react-icons/fa";
import CartCard from './cartCard/cartCard';
import { useDispatch, useSelector } from 'react-redux';
import { cartStatus } from '../../store/actions/status';


const Cart = () => {
    const status = useSelector((state) => state.cart.open)
    const dispatch = useDispatch()

    return (
        <div
            className={styles.cartContainer}
            style={status === false ? { display: "none" } : {}}
        >
            <header className={styles.cartHeader}>
                <section className={styles.myCart}>
                    <div
                        className={styles.back}
                        onClick={() => { dispatch(cartStatus(false)); console.log("hey") }}
                    >
                        <AiOutlineArrowLeft />
                    </div>
                    <h4>My Cart</h4>
                </section>
                <section className={styles.cartIcon}>
                    <p>4</p>
                    <FaShoppingBasket size='30px' />
                </section>
            </header>
            <div>
                <CartCard
                    product="Okazi Leaves"
                    price="$30"
                    initial1="M"
                    color1="#406767"
                />
                <CartCard
                    product="Okazi Leaves"
                    price="$120"
                    initial1="R"
                    color1="#406767"
                />
                <CartCard
                    product="Rice Bean Lea..."
                    price="$50"
                    initial1="M"
                    color1="#277292"
                    initial2="P"
                    color2="#D1B378"
                />
                <CartCard
                    product="Efo Stew Ingre..."
                    price="$45"
                    initial1="M"
                    color1="#0A1E3D"
                />
            </div>
            <div className={styles.summaryContainer}>
                <section className={styles.shopSummary}>
                    <small>TOTAL</small>
                    <h4>$2,560</h4>
                </section>
                <button>DONE SHOPPING</button>
            </div>
        </div >
    )
}

export default Cart