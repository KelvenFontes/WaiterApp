import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './Styles';

const orders: Order[] = [
  {
    '_id': '876',
    '_table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'pizza',
          'imagePath': '1669331174262-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '0987'
      },
      {
        'product': {
          'name': 'pizza',
          'imagePath': '1669331174262-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '-098765'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕑"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
