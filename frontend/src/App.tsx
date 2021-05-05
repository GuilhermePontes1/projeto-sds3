import DataTable from "componentes/DataTable";
import Footer from "componentes/Footer";
import NavBar from "componentes/NavBar";

function App() {
  return (
    <> 
    <NavBar/>
    <div className="container">
        <h1 className="text-primary">Olá mundo</h1>
        <DataTable/>
    </div>
        <Footer/>
    </>
 );
}
// utliza para delimitar a função como uma só 
export default App;