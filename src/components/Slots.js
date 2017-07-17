import React from 'react'

export const Slots = (props) => {

    // on rerender height scales with each hourly division (12 total)
    let hour_slot_height = props.height / 12

    //sample objects, now as inputs

    let obj = [ {start_time: '10:30', end_time: '11:00'},
                {start_time: '19:30', end_time: '21:00'} ]


    // note: ran out of time to link up inputs to slots,
    // using hard-coded inputs instead
    // let boxes = "Enter an input above"
    //
    // if (props.input !== undefined) {

    // add ids to object elements if none exists
    obj = obj.map((x, i) => {
      return Object.assign({}, x, {id: i})
    })

    // break down each into floats
    let floats = obj.map(x => {
      let start = x.start_time.split(":")
      let end = x.end_time.split(":")

      // min = 0 max = 12
      start = ( parseInt(start[0], 10) + parseInt(start[1], 10)/60 ) - 9
      end = ( parseInt(end[0], 10) + parseInt(end[1], 10)/60 ) - 9

      // size boxes to max height
      start *= hour_slot_height
      end *= hour_slot_height
      let height = end - start

      return { id: x.id, start: start, end: end, height: height }
    })

    // time-slots is 525px at normal height
    // earliest with 25 sections, each half-hour is 21px
    // each minute is .7px

    // create boxes using the float dimensions
    let boxes  = floats.map(x => {
      let box = 'background: #FFFFFF '
      box += `top: ${x.start}px `
      box += `height: ${x.height}px `
      console.log(`<div style="${box}">Sample Item</div>`)
      return `<div style="${box}">Sample Item</div>`
    })

  // }

// { boxes.forEach(x => document.getElementById('time-slots').append(`x`)) }

    return (
      <div id='time-slots'>
        { boxes }
      </div>
    )

}

export default Slots
