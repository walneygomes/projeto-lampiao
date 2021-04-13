
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 


function App() {



  return (
    <div className="App">
      <div class=" " >
      <nav class="  cabeca" >
    <div class="container-fluid">
       Tropeiros Modernos 

    </div>
    
  </nav>
  </div>



<div class="container-fluid">
  
<div class="row">
  
      <div class="col">
      <img src='http://www.marcianunesindenizacao.com.br/img/loading.gif' width="30" height="30"/>
          Ao vivo
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Estados</th>
              <th scope="col">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>

              <td>São Paulo</td>
              <td>720</td>

            </tr>
            <tr>

              <td>Minas Gerais</td>
              <td>328</td>

            </tr>
            <tr>
              <td>Pernambuco</td>
              <td>248</td>

            </tr>
            <tr>
              <td>Paraíba</td>
              <td>220</td>

            </tr>
            <tr>
              <td>Ceará</td>
              <td>96</td>

            </tr>
          </tbody>
        </table>

      </div>
    </div>




       <div class="row">
      <div class="col">

        <table class="table table-dark">
          <thead>
            <tr>
              <p></p>
              <th scope="col">EMPRESA COM MAIS CHAMADOS</th>
              <th scope="col">TOTAL DE PRODUTOS</th>

            </tr>
          </thead>

          <tbody>
            <tr>

              <td>Accenture</td>
              <td>39.962</td>

            </tr>

          </tbody>

        </table>

      </div>
    </div>

    </div></div>
  );
}

export default App;
