import React, { useState } from 'react';

const LineItemDetails = () => {
  const [lineItem, setLineItem] = useState({
    glDesc: 'Original cost-Plant & ...',
    glCode: '0020200000',
    debitSelected: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLineItem({
      ...lineItem,
      [name]: value
    });
  };

  return (
    <div className="line-item-details">
      <h2>Line Item Details</h2>
      <form>
        <div>
          <label>Select Debit:</label>
          <input type="checkbox" name="debitSelected" checked={lineItem.debitSelected} onChange={handleChange} />
        </div>
        <div>
          <label>GL Description:</label>
          <input type="text" name="glDesc" value={lineItem.glDesc} onChange={handleChange} />
        </div>
        <div>
          <label>GL Code:</label>
          <input type="text" name="glCode" value={lineItem.glCode} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default LineItemDetails;
