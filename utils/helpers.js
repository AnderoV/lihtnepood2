export const transformToStripe = (items) => {
  return items.map((item) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.img],
      },
    },
    quantity: item.quantity,
  }));
};
