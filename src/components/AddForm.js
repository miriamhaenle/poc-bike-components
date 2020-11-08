import React from 'react'
import styled from 'styled-components/macro'

export default function AddForm({ title, formFields, submitHandler }) {
  function onSubmit(event) {
    event.preventDefault()
    submitHandler()
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <h4>{title}</h4>
      {formFields.map((formField, index) => {
        return (
          <label key={index}>
            {formField.label}
            {formField.type === 'select' ? (
              <select
                onChange={(event) => formField.setValue(event.target.value)}
                value={formField.value}
              >
                {formField.options.map((bike, index) => {
                  return (
                    <>
                      {index === 0 && (
                        <option value={index} selected>
                          Select a bike
                        </option>
                      )}
                      <option value={bike.id}>{bike.brand}</option>
                    </>
                  )
                })}
              </select>
            ) : (
              <input
                type={formField.type}
                name={formField.name}
                value={formField.value}
                onChange={(event) => formField.setValue(event.target.value)}
              />
            )}
          </label>
        )
      })}
      <button type="submit">Add</button>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
  }
`
