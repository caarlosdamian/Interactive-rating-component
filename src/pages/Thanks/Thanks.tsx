import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from '../../components/Container/Container'
import Check from '../../images/illustration-thank-you.svg'

export const Thanks = () => {
  const {state} = useLocation()
  return (
    <Container className="container thanks">
      <>
        <img className='card-img-thank' src={Check} alt="" />
        <span className='card-selected-span'>{`You selected ${state} out of 5`}</span>
        <h1 className="card-header">Thank you!</h1>
        <span className="thank-card-subtitle">
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </span>

      </>
    </Container>
  )
}
