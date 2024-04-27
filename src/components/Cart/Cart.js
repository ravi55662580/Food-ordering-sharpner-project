import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  const handleDeleteItem = (itemId) => {
    removeItemFromCart(itemId); // Assuming removeItemFromCart removes the item from the cart
  };

  const cartItemsList = cartItems.map((item) => (
    <li key={item.id}>
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <button onClick={() => handleDeleteItem(item.id)}>Remove</button>
    </li>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        {cartItemsList}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
