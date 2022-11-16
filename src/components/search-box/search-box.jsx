import React, { Component } from 'react'
import "./search-box.styles.css"
export default class SearchBox extends Component {
  
    render() {
    return (
      <div>
        <input
          className={this.props.className}
          type="search"
          name=""
          id=""
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    )
  }
}
