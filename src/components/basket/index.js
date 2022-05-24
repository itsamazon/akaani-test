import React from "react";
import styles from "./styles.module.css";
import { IoSearch } from "react-icons/io5";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { FiCreditCard } from "react-icons/fi";
import { Card } from "../cards";
import { DisplaySidebar } from "../sidebar/sidebar";
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import { useLocation } from "react-router"
import Cart from "../cart";
import { useDispatch, useSelector } from "react-redux";
import { cartStatus } from "../../store/actions/status";
export * from "./basketLinks"


export const Basket = () => {
    const status = useSelector((state) => state.cart.open)
    const dispatch = useDispatch()
    const { pathname } = useLocation();
    const path = pathname.split("/")[2];


    return (
        <div className={styles.basketContainer}>
            <div>
                <header className={styles.header_container}>
                    <h1>Good Evening, Laura!</h1>
                    <div className={styles.searchsection}>
                        <i><IoSearch /></i>
                        <input type='text' placeholder="Search Basket" />
                    </div>
                </header>
                <section className={styles.cardSection}>
                    <Card
                        background="rgba(94, 126, 210, 0.2)"
                        color="#5E7ED2"
                        text="In-Transit Jobs"
                        detail="0"
                        icon={<BsTruck size='24px' />}
                    />
                    <Card
                        background="rgba(86, 177, 160, 0.2)"
                        color="#56B1A0"
                        text="Total Paid"
                        detail="$0.00"
                        icon={<FiCreditCard size='24px' />}
                    />
                    <Card
                        background="rgba(134, 141, 181, 0.2)"
                        color="#868DB5"
                        text="Completed Jobs"
                        detail="0"
                        icon={<BsBoxSeam size='24px' />}
                    />

                </section>
                <section className={styles.basketSection}>
                    <header>
                        <h3>Baskets </h3>
                        <button>Create Basket</button>
                    </header>
                    <div className={styles.linksContainer}>
                        <NavLink
                            to=""
                            className={!path ? styles.basketLinks_active : styles.basketLinks}>Paid
                        </NavLink>
                        <NavLink
                            to="pending"
                            className={path === 'pending' ? styles.basketLinks_active : styles.basketLinks} >Pending
                        </NavLink>
                        <NavLink
                            to="completed"
                            className={path === 'completed' ? styles.basketLinks_active : styles.basketLinks}>Completed
                        </NavLink>
                    </div>
                </section>


                <div className={styles.basketOutlet}>
                    <Outlet />
                    <div
                        className={styles.cartIcon}
                        style={status === true ? { display: "none", background: "red" } : {}}
                        onClick={() => dispatch(cartStatus(true))}
                    >
                        <p>4</p>
                        <FaShoppingBasket size='32px' />
                    </div>
                </div>
            </div>
            <DisplaySidebar />
            <div className={styles.basketCart}>
                <Cart />
            </div>
        </div>
    )
}