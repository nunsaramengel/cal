
import './App.css';
import Tabby from './components/Tabby';
import { Heading, Text } from '@chakra-ui/react'
import Calendar from './components/Calendar';


function App() {
  return (
   <div
    style={{padding: "20px 50px"}}
   >
    <Heading
      colorScheme="orange"
      color="orange.400"
    >Kalender</Heading>
    <div style={{margin: "20px 0"}}></div>
    <Tabby colorScheme="red" />
   </div>
  );
}

export default App;
