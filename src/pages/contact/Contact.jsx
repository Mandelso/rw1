import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur fugiat facere, eum,
        nihil quos laborum culpa cum eveniet excepturi
        fugit quia cupiditate officia. Dicta praesentium cupiditate quaerat, soluta itaque nihil.
      </Header>
      <section className="contact">
        <div className="container contact__container">
            <div className="contact__wrapper">
              <a href="mailto:support@egator.com" target='_blank' rel='norreferrer noopener'><MdEmail /></a>
              <a href="https://m.me/nelson_afari" target='_blank' rel='norreferrer noopener'><BsMessenger /></a>
              <a href="https://wa.me/+0506656930" target='_blank' rel='norreferrer noopener'><IoLogoWhatsapp /></a>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact