import React, { Component } from 'react';

class InvoiceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: 'INR',
      invBasicAmt: 15000,
      invTaxAmt: 1000,
      totalInvAmt: 16000,
      // Other fields
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/save-draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state),
    });
    const result = await response.json();
    console.log(result);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Currency:</label>
        <input type="text" name="currency" value={this.state.currency} onChange={this.handleChange} />
        <button type="submit">Save Draft</button>
      </form>
    );
  }
}

export default InvoiceForm;
