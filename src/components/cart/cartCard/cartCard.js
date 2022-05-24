import React from 'react'
import styles from './style.module.css'
import coconut from "../../../assets/coconut.svg"

const CartCard = ({ product, price, initial1, initial2, color1, color2 }) => {
    return (
        <div className={styles.cardCartContainer}>
            <div className={styles.CartIcon}>
                <img src={coconut} alt="coco" />
            </div>
            <div className={styles.CartText}>
                <small>{product}</small>
                <h4>{price}</h4>
            </div>
            <div className={styles.cartSelect}>
                <select>
                    <option value="1">1 kg</option>
                    <option value="2">2 kg</option>
                    <option value="3">3 kg</option>
                    <option value="4">4 kg</option>
                    <option value="5">5 kg</option>
                </select>
            </div>
            <div className={styles.cartInitial}>
                <p style={{ backgroundColor: `${color1}` }}>{initial1}</p>
                <p style={{ marginLeft: "-.5rem", background: `${color2}` }}>{initial2}</p>
            </div>
        </div >
    )
}

export default CartCard