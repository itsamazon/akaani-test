import React from 'react'
import styles from './styles.module.css'
import akaani from "../../assets/logos/akaani-logo.svg"
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaShoppingBasket, FaHistory } from "react-icons/fa";
import { useLocation } from "react-router";



const logout = <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.290632 7.29222L7.29098 0.293383C7.91601 -0.331513 8.9994 0.105914 8.9994 1.0016C8.9994 3.21037 10.79 5.00094 12.9987 5.00094H14.6664C15.2205 5.00094 15.6664 5.4467 15.6664 6.00077V10.0001C15.6664 10.5542 15.2205 10.9999 14.6664 10.9999H12.9987C10.79 10.9999 8.9994 12.7905 8.9994 14.9993C8.9994 15.8908 7.92018 16.3324 7.29098 15.7075L0.290632 8.70866C-0.0968875 8.31705 -0.0968875 7.68383 0.290632 7.29222ZM12.9996 0.501682V2.16807C12.9996 2.44303 13.2246 2.66799 13.4996 2.66799H16.9998C17.7373 2.66799 18.3332 3.26372 18.3332 4.0011V11.9998C18.3332 12.7372 17.7373 13.3329 16.9998 13.3329H13.4996C13.2246 13.3329 12.9996 13.5579 12.9996 13.8328V15.4992C12.9996 15.7742 13.2246 15.9991 13.4996 15.9991H16.9998C19.2082 15.9991 21 14.2077 21 11.9998V4.0011C21 1.79314 19.2082 0.0017643 16.9998 0.0017643H13.4996C13.2246 0.0017643 12.9996 0.226728 12.9996 0.501682Z" fill="#726C6C" />
</svg>


export const Sidebar = () => {

    const { pathname } = useLocation();
    const path = pathname.split("/")[1];

    return (
        <div className={styles.sidebar_container}>
            <section className={styles.logo}>
                <img src={akaani} alt="AKAANI" />
            </section>
            <NavLink
                to=""
                className={
                    !path ? `${styles.navlink_active}` : `${styles.navlink}`
                }
            >
                <FaUserCircle size='1.5rem' />
                <p>Profile</p>
            </NavLink>

            <NavLink
                className={
                    path === 'basket' ? `${styles.navlink_active}` : `${styles.navlink}`
                }
                to="basket">
                <FaShoppingBasket size='1.5rem' />
                <p>Baskets</p>
            </NavLink>

            <NavLink
                className={
                    path === 'history' ? `${styles.navlink_active}` : `${styles.navlink}`
                }
                to="history">

                <FaHistory size='1.5rem' />
                <p>Order History</p>
            </NavLink>

            <div className={styles.sidebar_profile}>
                <div className={styles.profileImage}>
                    LE
                </div>
                <h5>Laura Edson</h5>
                <small>lauraedson@work.com</small>
                <div className={styles.logout}> {logout}</div>
            </div>
        </div>
    )
}

export const DisplaySidebar = () => {
    return (
        <div className={styles.displaySidebar}>

            {/* INVITES SECTION */}

            <section className={styles.invites}>
                <h3>INVITES </h3>
                <small>You have no invites.</small>
            </section>

            {/*RECENT PAYMENTS*/}

            <section className={styles.payments}>
                <h3>RECENT PAYMENTS</h3>
                <small>No Payment has been made. </small>
            </section>

            {/*PREVIOUS ORDERS*/}

            <section>
                <h3>PREVIOUS ORDERS</h3>
                <small>You have created no order.</small>
            </section>
        </div>
    )
}
