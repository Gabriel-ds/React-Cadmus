/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import fotoOsvaldo from './foto-osvaldo.jpeg'

function PortifolioOsvaldo() {
  return (
    <div className='container'>
      <h1>Osvaldo Luis</h1>
      <img src={fotoOsvaldo}></img>
      <h3>Programador, formado em Ads</h3>
      <Link to="/jose">Ir para José</Link>
    </div>
  );
}

export default PortifolioOsvaldo;
