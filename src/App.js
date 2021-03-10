import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { name: 'photoshop', price: '$90.05' },
    { name: 'illustrator', price: '$70.05' },
    { name: 'pdf reader', price: '$50.65' },
    { name: 'pdf reader el', price: '$500.65' }
  ]


  // const productDetails = products.map(pd => pd.name);
  // console.log(productDetails);



  return (
    <div className="App">

      <header className="app-header">
        <Counter></Counter>
        <Users></Users>

        <ul>
          {products.map(pdName => <li>{pdName.name}</li>)}
        </ul>

        <Person name="naim" age="24"></Person>
        <Person name="naima" age="21"></Person>
        {
          products.map(pd => <Product productInfo={pd}></Product>)
        }





      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Users() {
  const[users, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])
  return (
    <div>
      <h3>dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}<br></br>{user.email}</li>)
        }
       
      </ul>
    </div>
  )
}
function Person(props) {
  const PersonStyle = {
    border: '1px solid red',
    padding: '20px',
    marginTop: '10px'
  }

  return (
    <div style={PersonStyle}>
      <h1>My name is {props.name} </h1>
      <h4>I am {props.age} years of old</h4>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    height: '300px',
    width: '300px',
    // float: 'left',
    backgroundColor: 'lightgray',
    margin: '10px 10px',
    padding: '30px'

  }
  // console.log(props)
  const { name, price } = props.productInfo;
  return (
    <div style={productStyle}>
      <h2>Name: {name} </h2>
      <h1>Price: {price}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, eligendi?</p>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
