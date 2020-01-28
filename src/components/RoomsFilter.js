import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'

const getUnique = (items,value) =>{
  return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
  const context = useContext(RoomContext)
  const {type,capacity, price, minPrice, maxPrice, minSize,maxSize,breakfast,pets, handleChange} = context

  let types = getUnique(rooms,"type")
  types = ['all',...types]
  types = types.map((item,index)=>{
    return <option value={item} key={index}>{item}</option>
  })

  let capacities = getUnique(rooms,'capacity')
  
  console.log(capacities)
  return (
    <section className="filter-container">
      <Title title="search rooms"/>
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
            {types}
          </select>
        </div>
      </form>
    </section>
  )
}
