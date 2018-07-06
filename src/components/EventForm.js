import React from 'react'

const EventForm = () => {
  return (
    <div>
      <form>
        Title:
        <input type="text" />
        Image:
        <input type="file" />
        Date
        <input type="date" />
        City
        <input type="text" />
        Country:
        <input type="text" />
        Description:
        <textarea name="textarea" rows="10" cols="50">
          Write your description here
        </textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default EventForm
