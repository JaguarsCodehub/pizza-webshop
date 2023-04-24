import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartSlice';

const PizzaCard = ({ pizza, dropdown }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, quantity }));
  };

  const addToCart = () => {
    const pizzas = {
      ...pizza,
      extras: extras,
      price: price,
      quantity: quantity,
    };
    dispatch(addProduct(pizzas));
  };

  return (
    <div className='p-6'>
      <div className='bg-white my-1 rounded cursor-pointer shadow-2xl shadow-gray-400 hover:shadow-slate-400 dark:shadow-gray-900 dark:bg-gray-800 duration-300 hover:-translate-y-4'>
        <Link href={`/product/${pizza._id}`} passHref>
          <Image src={pizza.img} alt='' width='700' height='500' />
        </Link>
        <div className='p-4'>
          <h1 className={styles.title}>{pizza.title}</h1>
          <p className={styles.desc}>{pizza.desc}</p>

          {dropdown ? (
            <>
              <label
                htmlFor='countries'
                className='block mb-2 mt-8 text-sm font-normal text-gray-900 dark:text-white'
              >
                Select your size and crust
              </label>
              <select
                id='countries'
                className='bg-gray-200 text-black font-semibold text-sm rounded-sm focus:ring-gray-500 focus:border-gray-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
              >
                <option selected>Small Pan</option>
                <option value='SM'>Medium Pan</option>
                <option value='MSP'>Medium Shezwan Pan</option>
                <option value='MSC'>Medium Stuffed Cheese</option>
              </select>
            </>
          ) : (
            <></>
          )}

          <div className='flex flex-row mt-4 justify-around focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-sm w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
            {/* <Link href={`/product/${pizza._id}`} passHref> */}
            <button type='button' className='' onClick={addToCart}>
              Add
            </button>
            {/* </Link> */}
            <span className={styles.price}>₹{pizza.prices[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
