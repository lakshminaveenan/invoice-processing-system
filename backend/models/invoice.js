const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  currency: String,
  invBasicAmt: Number,
  invTaxAmt: Number,
  totalInvAmt: Number,
  advancePaid: Number,
  tcsApplicable: Boolean,
  netPayableAmt: Number,
  alternatePayee1: String,
  glCode: String,
  glDesc: String,
});

module.exports = mongoose.model('Invoice', invoiceSchema);
