import React from 'react'; 
import axios from 'axios';

export default class list extends React.Component {
  state = {
    res_data: []
  }

  componentDidMount() {
    axios.post(`http://devcrm.sorteostec.org/ServicioRuteoDinamico/v1/Service.svc/rest/iniciarSesion`, {body: JSON.stringify("{\"raiz\":{\"usuario\":\"liadm1\", \"contrasena\":\"liadm1\"}}")})
      .then(res => {
        const res_data = res.data;
        this.setState({ res_data });
        console.table(res_data)
    })
  }

  render() {
    return (
      <ul>
        { this.state.res_data.map(d => <li>{d.name}</li>)}
      </ul>
    )
  }
}