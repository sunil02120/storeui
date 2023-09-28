import logo from './logo.svg';
import './App.css';
import Navbar from './module/Navbar';
import TextForm from './module/TextArea';
import HighestSellingItem from './module/HighestSellingItem';
import HighestProfitItem from './module/HighestProfitItem';

function App() {
  return (
    <>
      <Navbar title={"Store Item Analyzer"} />
      <table>
        <tr>
          <td><HighestSellingItem heading="Highest Selling Item"></HighestSellingItem></td>
          <td><HighestProfitItem heading="Highest Profit Item"></HighestProfitItem></td>
        </tr>
      </table>
    </>
  );
}

export default App;
