export const stripePromise = async () => {
  const stripe = await import('@stripe/stripe-js');
  return stripe.loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');
};

export const handleStripePayment = async (amount: number, token: string) => {
  const response = await fetch('/api/checkout/stripe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: Math.round(amount * 100),
      token,
    }),
  });
  return response.json();
};

export const handlePayPalPayment = async (amount: number, orderId: string) => {
  const response = await fetch('/api/checkout/paypal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      orderId,
    }),
  });
  return response.json();
};

export const handleKlarnaPayment = async (amount: number, orderId: string) => {
  const response = await fetch('/api/checkout/klarna', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount,
      orderId,
    }),
  });
  return response.json();
};
