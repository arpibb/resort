import  React, {Component} from 'react'
import Title from './Title.js'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services: [{
            icon:<FaCocktail/>,
            title:"Free Cocktails",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas."
        },
        {
            icon:<FaHiking/>,
            title:"Endless Hiking",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas."
        },
        {
            icon:<FaShuttleVan/>,
            title:"Free Shuttle",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas."
        },
        {
            icon:<FaBeer/>,
            title:"Strongest Beer",
            info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas."
        }]

    }
    render(){   
        return (
            <div>
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </div>
        )
    }
}
