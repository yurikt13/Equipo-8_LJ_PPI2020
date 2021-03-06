import React, { Component } from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

class Main1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: []
    }
  }

  peticionGet = () => {
    axios.get('https://backpachamama.herokuapp.com/api/usuario/:id')
      .then(res => {
        this.setState({
          dataUser: res.data
        })
      }).catch(err => {
        console.log(err.message)
      })
  }

  componentDidMount() {
    this.peticionGet()
  }

  render () {
    console.log(this.state.dataUser);

          return (

        <div className="container text-center mt-5">
            <form className="form-group">
          <div className="form text-center">
          <label for="inputEmail" className="sr-only" placeholder="Ingrese su usuario"></label>
          <input type="user" className="form-control" id="exampleInputUser1" aria-describedby="userHelp" placeholder="Ingrese su usuario"/>
          <label for="inputPassword" className="sr-only" placeholder="Contraseña"></label>
          <input type="password" id="inputPassword" className="form-control mt-3" placeholder="Password" required=""/>
          </div>      
          <Link to="/inicio" className="text-decoration-none">
          <button className="btn btn-lg btn-success btn-flex mt-3" type="submit">Ingresar</button>
          </Link>
          <div>
          <p className="text mt-3">- o -</p>
          </div>
          <div>

          <Link to="/facebook" className="text-decoration-none">

          <button className="btn btn-lg btn-primary btn-flex mt-3" type="submit">Ingresar con Facebook</button>
          </Link>
          </div>
          <div>
          <button className="btn btn-lg btn-danger btn-flex mt-3" type="submit">Ingresar con Google</button>
          </div>

          <p className="text mt-5">¿No tiene usuario?</p>
          <Link to="/registrese" className="text-decoration-none">
          <button className="btn btn-lg btn-success btn-flex" type="submit">REGISTRESE</button>
          </Link>
        </form>
        </div>
    
    )
          }
};

export default Main1;