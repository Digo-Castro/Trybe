const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const newOrder = {
  order: {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 20,
      },
      calabresa: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 0,
    }
  }
}

const customerInfo = (order) => {
  const arrayOfValuesAddress = Object.values(order.address);
  const arrayOfValuesDelivery = Object.values(order.order.delivery);
  console.log(`Olá ${arrayOfValuesDelivery[0]}, entrega para: ${Object.values(order)[0]}, Telefone ${Object.values(order)[1]}, ${arrayOfValuesAddress[0]}, Nº. ${arrayOfValuesAddress[1]}, Apto: ${arrayOfValuesAddress[2]}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  Object.assign(order, newOrder);
  const arrayOfValuesPayment = Object.values(order.payment);
  const arrayOfOrderPizza = Object.keys(order.order.pizza);
  const arrayOfOrderDrinksCoke = Object.values(order.order.drinks.coke);
  console.log(`Olá ${Object.values(order)[0]}, o total do seu pedido de ${arrayOfOrderPizza[0]}, ${arrayOfOrderPizza[1]} e ${arrayOfOrderDrinksCoke[0]} é R$ ${arrayOfValuesPayment},00.`);
}

orderModifier(order);


