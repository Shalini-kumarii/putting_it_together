import logo from './logo.svg';
import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  const person= [
    { "firstName": "Doe","lastName": "jane","age":45,"hair_color":"Black"},
    { "firstName": "Smith","lastName": "John","age":88,"hair_color":"Brown"},
    
  ];
  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
       {
       person.map(name =>{
         return <PersonCard firstName={name.firstName} lastName={name.lastName} age={name.age} hair_color={name.hair_color}/>
       })
        
     

       }
      </div>
    </fieldset>
  );
}

export default App;