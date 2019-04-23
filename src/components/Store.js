import React, {Component} from 'react'
import {getFunName} from '../helpers'
export default class Store extends Component{

    goToStore = (e) => {
        e.preventDefault()
        const inputValue = this.refs.store.value
        this.props.history.push(`/store/${inputValue}`)
    }

    render(){
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <input type="text" ref="store" placeholder="Store name" required defaultValue={getFunName()}/>
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}