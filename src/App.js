import logo from './logo.svg';
import './App.css';
import Navbar from './module/Navbar';
import TextForm from './module/TextArea';
import HighestSellingItem from './module/HighestSellingItem';

function App() {
  return (
    <>
    <Navbar title={'Store Item Analyzer'}/>
    <HighestSellingItem heading="Highest Selling Item"></HighestSellingItem>    
    </>
  );
}

export default App;
