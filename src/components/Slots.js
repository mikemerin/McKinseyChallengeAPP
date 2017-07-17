import React, { Component } from 'react'

export const Slots = (props) => {

    // on rerender height scales with each hourly division (12 total)
    let hour_slot_height = props.height / 12

    let obj = [ {start_time: '10:30', end_time: '11:00'},
                {start_time: '14:30', end_time: '21:00'} ]

    // break down each into floats
    let floats = obj.map((x, i) => {
      let start = x.start_time.split(":")
      let end = x.end_time.split(":")

      // min = 0 max = 12
      start = ( parseInt(start[0], 10) + parseInt(start[1], 10)/60 ) - 9
      end = ( parseInt(end[0], 10) + parseInt(end[1], 10)/60 ) - 9

      // size boxes to max height
      start *= hour_slot_height
      end *= hour_slot_height

      return { key: i, start_time: start, end_time: end }
    })

    

    // time-slots is 525px at normal height
    // earliest with 25 sections, each half-hour is 21px
    // each minute is .7px

    return (
      <div id='time-slots'>
        boxes
      </div>
    )

}

export default Slots
