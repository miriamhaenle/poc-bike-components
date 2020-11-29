import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Form({ title, formFields, submitHandler }) {
  function onSubmit(event) {
    event.preventDefault()
    submitHandler()
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      <h4>{title}</h4>
      {formFields.map((formField) => {
        return (
          <label key={formField.id}>
            {formField.label}
            {formField.type === 'select' ? (
              <select
                onChange={(event) => formField.setValue(event.target.value)}
                value={formField.value}
              >
                {formField.options.map((bike, index) => {
                  return (
                    <React.Fragment key={formField.id}>
                      {index === 0 && (
                        <option value={index} defaultValue={index}>
                          Select a bike
                        </option>
                      )}
                      <option value={bike.id}>{bike.brand}</option>
                    </React.Fragment>
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
      <Button>Add</Button>
      <Button background="var(--secondary-light)">Cancel</Button>
    </FormWrapper>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  formFields: PropTypes.array,
  submitHandler: PropTypes.func,
}

const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  justify-content: center;
  padding: 1rem;

  label {
    display: flex;
    flex-direction: column;
  }
  input {
    font-family: sans-serif;
    margin-top: 0.4rem;
    padding: 3px;
  }
`
