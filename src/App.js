import './App.css';



const Person = (props) => {
  return (
    <div>
    <h1>Name :{props.name}</h1>
    <h2>Age :{props.age}</h2>
    <h3>Gender :{props.gender }</h3>

  </div>
  );
}

const App = (props)=> {
  return (
  <div className='App'>
  
    <Person name='satish' age='22' gender='M'> </Person>
    <Person name='sumith' age='20' gender='M'> </Person>
    <Person name='sumalatha' age='36' gender='F'> </Person>
    <Person name='saibaba' age='46' gender='M'> </Person>
  </div>  
  );
}



export default App;
