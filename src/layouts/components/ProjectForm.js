import React from 'react'

const ProjectForm = () => {
  return (
    <div>
      <form>
        Title:
        <input type="text" />
        Image:
        <input type="file" />
        Description
        <textarea name="textarea" rows="10" cols="50">
          Write your description here
        </textarea>
        <input type="submit" />
      </form>
    </div>
  )
}

export default ProjectForm
