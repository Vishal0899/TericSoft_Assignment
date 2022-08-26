import React, { useState } from "react";
import faker from "faker"

export const Faker = () => {
  const array = [...Array(5)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
  }));

  const [products] = useState(array);
  return (
    <div>
      {products.map((prod) => (
        <span>{prod.name}</span>
      ))}
    </div>
  );
};
