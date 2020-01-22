import React from 'react'
import RoomsFilter from './RoomsFilter.js'
import RoomList from './RoomList.js'

export default function RoomsContainer() {
  return (
    <div>
      hello from rooms container
      <RoomsFilter/>
      <RoomList/>
    </div>
  )
}
