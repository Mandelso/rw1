import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'


const Gallery = () => {
 const galleryLength = 15;
 const images = []

 for (let i = 1; i <= galleryLength; i++){
  images.push(require(`../../images/gallery${i}.jpg`))
 }

//  console.log(images);
  
  return (
    <>
    <Header title="Our Gallery Image" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Numquam quia in quis deserunt corporis quasi suscipit officia,
      ipsa facere ad ab nesciunt exercitationem soluta nostrum, pariatur adipisci sed optio officiis?
    </Header>
    <section className="gallery">
      <div className="container gallery__container">
       {
        images.map((image, index) =>{
          return <article key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </article>
        })
       }
      </div>
    </section>
    </>
  )
}

export default Gallery