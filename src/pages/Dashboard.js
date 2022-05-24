import React from 'react'
import styles from './styles.module.css'
import { Sidebar } from '../components/sidebar/sidebar'
import { Outlet } from 'react-router'

const Dashboard = () => {
    return (
        <div className={styles.dashboard_container}>
            <Sidebar />
            <div className={styles.midsection}>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard