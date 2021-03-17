import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.css';

const Home = () => (
    <div className="home-container">
      <h2 className="home-title">
          Desafio do Capítulo 3,<br/>
           Bootcamp DevSuperior
      </h2>
      <p className="home-text">
      Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
      Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/>
      Este design foi adaptado a partir de Ant Design System for Figma, de<br/>
      Mateusz Wierzbicki: antforfigma@gmail.com
      </p>
      <Link to="/search">
      <Button text="Começar" />
      </Link>
    </div>
);

export default Home;