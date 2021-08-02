import styled from 'styled-components'

const StyledCart = styled.div`
  color: white;
  > div:first-child {
    padding: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--borderColor);
    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }
    a {
      text-decoration: none;
      color: var(--brandGreenLight);
    }
  }
  > div:last-child {
    padding: 2rem 1rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--borderColor);
    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }
    p:first-child {
      margin-bottom: 2rem;
    }
   
  }
`

const Cart = () => {
  return (
    <StyledCart>
      <div>
       <h2>Cart</h2>
       <a href="/">Keep shopping</a> 
      </div>
      <div>
        <p>Your cart is empty.</p>
        <p>Need help?</p>
        <span>Call 1-877-7786</span>
      </div>
    </StyledCart>
  )
}

export default Cart
