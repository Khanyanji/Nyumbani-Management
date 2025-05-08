// controllers/paymentController.js
exports.recordPayment = async (req, res) => {
    try {
      const { amount, method, reference } = req.body;
      
      const [paymentId] = await db('payments').insert({
        tenant_id: req.params.tenantId,
        payment_date: new Date(),
        amount,
        method,
        reference
      });
  
      res.status(201).json({ id: paymentId });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.getPaymentHistory = async (req, res) => {
    try {
      const payments = await db('payments')
        .where('tenant_id', req.params.tenantId)
        .join('tenants', 'payments.tenant_id', 'tenants.id')
        .select('payments.*', 'tenants.rent_amount');
  
      res.json(payments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };