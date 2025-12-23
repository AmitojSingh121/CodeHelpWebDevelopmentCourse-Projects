import logo from './logo.svg';
import './App.css';

function App() {

  const userData=[
    {
      id:'Amitoj Singh',
      age:'20',
      email:'amitojsingh20@gmail.com'
    },
    {
      id:'Amitoj Singh',
      age:'21',
      email:'amitojsingh21@gmail.com'
    },

    {
      id:'Amitoj Singh',
      age:'22',
      email:'amitojsingh22@gmail.com'
    }
  ]
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user)=>
             <tr>
            <td>{user.id}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
          </tr>
          )}
        </tbody>
      </table>
       <table border="2px" align="center" >
          <thead>
             <tr>
                <td>user</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
             </tr>
          </thead>

          <tbody>
              <tr>
                  <td>1</td>
                  <td>Amitoj Singh</td>
                  <td>amitojsingh20</td>
                  <td>Age</td>

                  <td>2</td>
                  <td>Amitoj Singh</td>
                  <td>amitojsingh20</td>
                  <td>Age</td>

                  <td>3</td>
                  <td>Amitoj Singh</td>
                  <td>amitojsingh20</td>
                  <td>Age</td>
              </tr>
          </tbody>
       </table>
    </div>
  );
}

export default App;
