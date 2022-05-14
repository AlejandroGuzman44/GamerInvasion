import React from 'react'
import { Cart } from '../Cart/Cart'
import { Productos } from '../Productos/Productos'
import styles from '../Tienda/styles.module.scss'

export const Store = () => {
  return (
    <div className={styles.tienda}>
      <Productos />
    </div>
  )
}
