import React, {Component} from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

export default class App extends Component{

    state = {
        fishes:{},
        order: {}
    }

    addFish = fish => {
        console.log('Fish Added to store!!')
    }

    render (){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh is strength"></Header>
                </div>
                <Order/>
                <Inventory addFish={this.addFish}/>
            </div>
        )
    }
}