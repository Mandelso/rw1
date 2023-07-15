import React from 'react'
import Image from '../images/values.jpg'
import { GiCutDiamond } from 'react-icons/gi'
import SectionHeader from './SectionHeader'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Values Image" />
                    </div>
                </div>
                <div className="values__right">
                    <SectionHeader icon={<GiCutDiamond />} title="Values"></SectionHeader>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sapiente quo fugit
                        culpa incidunt ab, atque accusamus sit magnam non animi doloribus aspernatur eveniet
                        quidem repellat porro optio suscipit qui!
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({id, icon, title, desc}) => {
                                return <Card key={id} className="values__value">
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                </Card>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values