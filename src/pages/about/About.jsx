import React from 'react'
import './about.css';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto impedit deleniti deserunt
        quisquam accusantium ab excepturi non odio, laborum fuga quidem aliquid suscipit unde libero sint,
        nulla dolor provident laudantium.
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis,
              optio dicta possimus voluptate alias autem rem ipsa consequuntur tempora harum,
              sequi labore cupiditate, quia praesentium veniam quos fugiat enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint quae perspiciatis
              aliquid quo ipsum libero nemo, numquam dignissimos quaerat sit nesciunt debitis mollitia
              optio asperiores architecto delectus dolorum repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex dicta?
              Necessitatibus eius fugit dolor. Fugiat non corrupti dolor placeat
              quisquam nobis, pariatur sunt? Ullam accusamus expedita minima unde molestias!
            </p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className="container about__vision-container">
        <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis,
              optio dicta possimus voluptate alias autem rem ipsa consequuntur tempora harum,
              sequi labore cupiditate, quia praesentium veniam quos fugiat enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint quae perspiciatis
              aliquid quo ipsum libero nemo, numquam dignissimos quaerat sit nesciunt debitis mollitia
              optio asperiores architecto delectus dolorum repudiandae?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facilis,
              optio dicta possimus voluptate alias autem rem ipsa consequuntur tempora harum,
              sequi labore cupiditate, quia praesentium veniam quos fugiat enim.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint quae perspiciatis
              aliquid quo ipsum libero nemo, numquam dignissimos quaerat sit nesciunt debitis mollitia
              optio asperiores architecto delectus dolorum repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ex dicta?
              Necessitatibus eius fugit dolor. Fugiat non corrupti dolor placeat
              quisquam nobis, pariatur sunt? Ullam accusamus expedita minima unde molestias!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About