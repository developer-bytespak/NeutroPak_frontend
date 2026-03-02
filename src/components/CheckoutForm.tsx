import React from 'react';

const CheckoutForm: React.FC = () => {
  return (
    <form className="checkout-form">
      <fieldset>
        <legend>Shipping Information</legend>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Street Address</label>
          <input type="text" id="address" name="address" required />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input type="text" id="state" name="state" required />
          </div>

          <div className="form-group">
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" name="zip" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select id="country" name="country" required>
            <option value="">Select Country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Shipping Method</legend>

        <div className="shipping-options">
          <label>
            <input type="radio" name="shipping" value="standard" defaultChecked />
            Standard Shipping (5-7 days) - Free
          </label>
          <label>
            <input type="radio" name="shipping" value="expedited" />
            Expedited Shipping (2-3 days) - $15.99
          </label>
          <label>
            <input type="radio" name="shipping" value="overnight" />
            Overnight Shipping - $29.99
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Payment Information</legend>

        <div className="form-group">
          <label htmlFor="cardName">Cardholder Name</label>
          <input type="text" id="cardName" name="cardName" required />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" required />
          </div>
        </div>

        <label className="checkbox">
          <input type="checkbox" required />
          I agree to the Terms and Conditions
        </label>
      </fieldset>

      <button type="submit" className="btn btn-primary">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
