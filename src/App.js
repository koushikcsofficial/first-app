import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventHandler from './components/EventHandler'

function App() {
  return (
    <div className="App">
      <Greet name="Koushik"/>
      <Welcome name="Hero"/>
      {/*<Message/>*/}
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventHandler/>
    </div>
  );
}

export default App;
