import React from 'react'

import styles from './Login.module.css'
import '../App/App.css'

const Login = () => (
  <div className={styles.Login} data-testid='Login'>
    <ul className='inProgress'>
      <li className='list'>I</li>
      <li className='list'>N</li>
      <li className='list'>-</li>
      <li className='list'>P</li>
      <li className='list'>R</li>
      <li className='list'>O</li>
      <li className='list'>G</li>
      <li className='list'>R</li>
      <li className='list'>E</li>
      <li className='list'>S</li>
      <li className='list'>S</li>
    </ul>
  </div>
)

Login.propTypes = {}

Login.defaultProps = {}

export default Login
