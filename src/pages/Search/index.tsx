import React from 'react';
import Button from '../../core/components/Button';
import SearchCard from './components/SearchCard';
import './styles.css';


const Search = () => (
     <div className="search-container">
        <div className="search-content">
        <h1 className="search-title">
            Encontre um perfil Github
        </h1>
        <Button text="Encontrar"/>
      </div>
      <div className="content-card">
         <SearchCard />
         <SearchCard />
         <Button text="Ver perfil" />
      </div>
    </div>

);

export default Search;