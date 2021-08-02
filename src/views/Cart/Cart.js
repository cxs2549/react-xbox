import styled from 'styled-components'

const StyledCart = styled.div`
  color: white;
  max-width: var(--maxWidth);
  margin: 0 auto;
  > div:first-child {
    padding: 3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--borderColor);
    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }
    @media (min-width: 1536px) {
      padding: 3rem 0;
    }
    a {
      text-decoration: none;
      color: var(--brandGreenLight);
    }
    h2 {
      font-size: 160%;
      @media (min-width: 1280px) {
        font-size: 200%;
      }
    }
  }
  > div:last-child {
    padding: 2rem 1rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--borderColor);
    @media (min-width: 768px) {
      padding: 3rem 1.5rem;
    }
    @media (min-width: 1536px) {
      padding: 3rem 0;
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
