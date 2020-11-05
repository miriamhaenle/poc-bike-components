import React from 'react'

export default function AddForm({ title, formFields, submitHandler }) {
  function onSubmit(event) {
    event.preventDefault()
    submitHandler()
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>{title}</h4>
      {formFields.map((formField, index) => {
        return (
          <label key={index}>
            {formField.label}
            <input
              type={formField.type}
              name={formField.name}
              value={formField.value}
              onChange={(event) => formField.setValue(event.target.value)}
            />
          </label>
        )
      })}
      <button type="submit">Abfahrt</button>
    </form>
  )
}
