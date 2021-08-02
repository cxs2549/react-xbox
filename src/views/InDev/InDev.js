import styled from 'styled-components'

const StyledInDev = styled.div`
  color: var(--brandGreenLight);
  padding: 3rem 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  h1 {

    font-size: 250%;
    margin-bottom: .75rem;
  }
  span {
    transform: rotate(47deg) translateY(17px) translateX(11px);
    display: inline-block;
  }
`

const InDev = () => {
  return (
    <StyledInDev>
      <h1>under constructio<span>n</span></h1>
      <p>Thank you for understanding.</p>
    </StyledInDev>
  )
}

export default InDev
