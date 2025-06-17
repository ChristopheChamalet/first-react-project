import ComponentImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TaButton from './components/TaButton.jsx';
import {useState} from 'react';
import { EXAMPLES } from './data.js';

function App() {
const [selectedTopic , setSelectedTopic] = useState('');


    function handleSelect(selectedButton) {
     setSelectedTopic(selectedButton);
    };

  return (
    <div>
      <Header></Header> 
      <main>  
        <section id="core-concepts">
        <h2>Core Concept</h2>
        <ul>
          
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item}/>
          ))}
      
        </ul>
        </section>
        <section id='examples'>
    <h2>Examples</h2>
    <menu>
    <TaButton isSelected={selectedTopic ==='components'} onSelect={() => handleSelect('components')} >Components</TaButton>
    <TaButton isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')} >JSX</TaButton>
    <TaButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')} >Props</TaButton>
    <TaButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} >State</TaButton>
    </menu>
    {!selectedTopic ? <p>Please select a topic.</p> :null}
     {selectedTopic ? <div id="tab-content">
        
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div> : null} 
        </section>
      </main>
    </div>
  );
}

export default App;
