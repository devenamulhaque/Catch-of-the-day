import React, { Component } from 'react'

export default class AddFishForm extends Component {

    addFishToStore = (e) => {
        e.preventDefault()

        const fish = {
            name: this.refs.name.value,
            price: parseFloat(this.refs.price.value),
            status: this.refs.status.value,
            desc: this.refs.desc.value,
            image: this.refs.image.value,
        }

        console.log(fish)
    }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.addFishToStore}>
        <input type="text" ref="name" name="name" placeholder="Name"/>
        <input type="text" ref="price" name="price" placeholder="Price"/>
        <select name="status" ref="status">
        <option value="available">Fresh</option>
        <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref="desc" placeholder="Desc"></textarea>
        <input type="text" ref="image" name="image" placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}
