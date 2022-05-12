import React from 'react'
import SectionTitle from '../common/SectionTitle'
import s from './Promo.module.css'

const Promo = () => {
  return (
    <section id="promo" className={`${s.promo} section`}>
      <SectionTitle>Привет! <br/> Меня зовут Роман. <br/> Я front-end разработчик</SectionTitle>
    </section>
  )
}

export default Promo