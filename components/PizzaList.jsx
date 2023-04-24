import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  const nonvegPizza = pizzaList.filter((pizza) =>
    pizza.title.endsWith('Chicken')
  );

  const vegPizzas = pizzaList.filter((pizza) => pizza.title.endsWith('🟢'));

  const sides = pizzaList.filter((pizza) => pizza.title.endsWith('Stix'));

  const desserts = pizzaList.filter((pizza) => pizza.title.startsWith('Choco'));

  return (
    <div className={styles.container}>
      <div className='py-10 px-12'>
        <div className='mt-20'>
          <h1 className={`font-Poppins text-4xl font-semibold ${styles.title}`}>
            Made with Love ❣️ Baked to Perfection 🍕🥖
          </h1>
          <p className={`font-Poppins mt-10 ${styles.desc}`}>
            Our commitment to quality, flavor, and innovation shines through in
            every bite, as we strive to deliver a truly unforgettable pizza
            experience to our customers. Get ready to embark on a pizza
            adventure like no other, where every slice is a masterpiece of taste
            and satisfaction.
          </p>
        </div>
        {/* Divider */}
        <div className='relative flex py-5 items-center mt-20'>
          <div className='flex-grow border-t border-gray-400'></div>
          <span className='flex-shrink mx-4 text-gray-800 text-2xl font-semibold font-Poppins'>
            Vegetarian Pizzas
          </span>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>

        {/* Vegetarian Pizzas */}
        <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {vegPizzas.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} dropdown={true} />
          ))}
        </div>

        {/* Divider */}
        <div className='relative flex py-5 items-center mt-8'>
          <div className='flex-grow border-t border-gray-400'></div>
          <span className='flex-shrink mx-4 text-gray-800 text-2xl font-semibold font-Poppins'>
            Non Vegetarian Pizzas
          </span>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>

        <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {nonvegPizza.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} dropdown={true} />
          ))}
        </div>

        {/* Divider */}
        <div className='relative flex py-5 items-center mt-8'>
          <div className='flex-grow border-t border-gray-400'></div>
          <span className='flex-shrink mx-4 text-gray-800 text-2xl font-semibold font-Poppins'>
            Sides & Wings
          </span>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>

        <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {sides.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} dropdown={true} />
          ))}
        </div>

        {/* Divider */}
        <div className='relative flex py-5 items-center mt-8'>
          <div className='flex-grow border-t border-gray-400'></div>
          <span className='flex-shrink mx-4 text-gray-800 text-2xl font-semibold font-Poppins'>
            Desserts and Icecreams
          </span>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>

        <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {desserts.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaList;
