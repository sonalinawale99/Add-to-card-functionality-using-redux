import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  incrementQty,
  decrementQty,
} from '../action/actions';

const Home = () => {
  const arr = [
    { name: 'Bread', price: 25 },
    { name: 'Milk', price: 30 },
    { name: 'Soup', price: 40 },
    { name: 'Butter', price: 50 },
    { name: 'Cheese', price: 22 },
  ];
  

  const cardItem = useSelector(state => state.cart.cardItem);
  const qty = useSelector(state => state.cart.qty);
  const totalPrice = cardItem.reduce(
    (total, item) => total + item.price * qty[item.name],
    0
  );

  const dispatch = useDispatch();

  const addItem = (productData) => {
    dispatch(addItemToCart(productData));
  };

  const addQty = (productName) => {
    dispatch(incrementQty(productName));
  };

  const subQty = (productName) => {
    dispatch(decrementQty(productName));
  };

  return (
    <div className="productCard">
      <table style={{ fontSize: '25px', margin: '20px' }} className="col-md-3"  id="tablestyle">

        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        
        <tbody>
          {
          
          arr.map((item, index) => (
            <tr key={index}>
                 <td>{item.name}</td>
                 <td>{item.price}</td>
                 <td>
                     <button key={index} onClick={() => addItem(item)} style={{ marginLeft: '15px' }} className="btn btn-success">
                          Add
                     </button>
                 </td>
            </tr>
          ))}

        </tbody>
      </table>

      <div className="col-md-4" id="liststyle">
        <p className="cardstyle">Cart</p>
        
          {
          cardItem.map((item, index) => (
          
          <div key={index} className="card">
             
             <ul className="list-group list-group-flush">
                
                  <li className="list-group-item" id="productName">
                        {item.name} Price-{item.price}
                   </li>
             
               <p className="list-group-item">
                     <button onClick={() => addQty(item.name)} class="btn btn-primary" id="btn">+</button>

                       {qty[item.name]}

                     <button onClick={() => subQty(item.name)} class="btn btn-primary" id="btn">-</button>
               </p>
           
            </ul>
                      <p>Product Amount-{item.price * qty[item.name]} </p>
         
          </div>
        ))}
                   <div className="card-footer" id="footer">Total amount: {totalPrice}</div>
      </div>
    </div>
  );
};

export default Home;
