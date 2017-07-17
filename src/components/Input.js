import React from 'react'

export default function Input(props) {
  return (
    <div className=" ui left icon input loading">
      <input type="text" placeholder="Input Object Here" value={props.input} onChange={props.handleInputChange}/>
      <i className="search icon"></i>
    </div>
  )
}
