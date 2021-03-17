
import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { SearchResult } from '../../core/types/SearchsResult';
import ImageLoaders from '../Search/components/SearchLoaders/ImageLoaders';
import InfoLoader from './components/SearchLoaders/ImageLoaders/InfoLoader';
import './styles.css';


const Search = () => {
   const [search, setSearch] = useState('')
   const [userData, setUserData] = useState<SearchResult>();
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setIsLoading(true);

      fetch(`https://api.github.com/users/${search}`)
       .then(response => response.json())
       .then(userResponse => setUserData(userResponse))
       .finally(() => {
         setIsLoading(false)
      })
   }

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
   }

   return (
      <div className="search-container">
        <div className="search-content">
        <h1 className="search-title">
           Encontre um perfil Github
        </h1>
          <form onSubmit={handleSubmit}>
            <input type="text" 
            className="search-box-input" 
            required
            value={search}
            onChange={handleChange}
            placeholder="Usuário Github"
            />
            <Button text="Encontrar" />
          </form>
        </div> 

        {userData && (
           
        <div className="result-container ">
            {isLoading ?
        <div className="loader">
        <ImageLoaders />
        <InfoLoader />
        
        </div>: (
            <div>
            <div className="user-data-container">
               <img
                  src={userData.avatar_url}
                  alt=""
                  className="user-avatar"
               />
                <div className="user-data">
                              <div className="user-stats">
                                 <span>Repertorios Publicos: {userData.public_repos}</span>
                                 <span>Seguidores: {userData.followers}</span>
                                 <span>Seguindo: {userData.following}</span>
                              </div>
                              <div className="user-info">
                                 <h3 className="user-info-title">Informações</h3>
                                 <div><strong>Empresa:</strong> {userData.company}</div>
                                 <div><strong>Website/Blog:</strong> {userData.blog}</div>
                                 <div><strong>Localidade:</strong> {userData.location}</div>
                              </div>
                           </div>
                        </div>
                        <div className="btn-see-profile">
                           <a
                               href={userData.html_url}
                               target="_new"
                           >
                              <Button text="Ver Perfil" />
                           </a>
                        </div>
                     </div>
                  )}
            </div>
         )}
      </div>
  
   )
}
           
 

export default Search;