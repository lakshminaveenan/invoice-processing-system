import React, { useState } from 'react';

const InvoiceDetails = () => {
  const [invoiceData, setInvoiceData] = useState({
    currency: 'INR',
    basicAmt: 15000,
    taxAmt: 1000,
    totalAmt: 16000,
    advancePaid: 0,
    tcsApplicable: false,
    netPayable: 16000,
    alternatePayee: '',
    glDesc: 'Original cost-Plant & ...',
    glCode: '0020200000'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInvoiceData({
      ...invoiceData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="invoice-details">
      <h2>Invoice Amount Details</h2>
      <form>
        <div>
          <label>Currency:</label>
          <input type="text" name="currency" value={invoiceData.currency} onChange={handleChange} readOnly />
        </div>
        <div>
          <label>Basic Amount:</label>
          <input type="number" name="basicAmt" value={invoiceData.basicAmt} onChange={handleChange} />
        </div>
        <div>
          <label>Tax Amount:</label>
          <input type="number" name="taxAmt" value={invoiceData.taxAmt} onChange={handleChange} />
        </div>
        <div>
          <label>Total Invoice Amount (Incl. of tax):</label>
          <input type="number" name="totalAmt" value={invoiceData.totalAmt} readOnly />
        </div>
        <div>
          <label>Advance Paid:</label>
          <input type="number" name="advancePaid" value={invoiceData.advancePaid} onChange={handleChange} />
        </div>
        <div>
          <label>TCS Applicable:</label>
          <input type="checkbox" name="tcsApplicable" checked={invoiceData.tcsApplicable} onChange={handleChange} />
        </div>
        <div>
          <label>Net Payable Amount (Excl. of TDS):</label>
          <input type="number" name="netPayable" value={invoiceData.netPayable} readOnly />
        </div>
      </form>
    </div>
  );
};

export default InvoiceDetails;
