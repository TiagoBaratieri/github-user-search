
import React, { useState } from 'react';
import Button from '../../core/components/Button';
import { SearchResult } from '../../core/types/Searchs';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoader';
import './styles.scss';


const Searchs = () => {
   
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

   return(
   <div className="search-container">
      <div className="search-box">
         <h1 className="search-title">
            Encontre um perfil Github
         </h1>
          <form onSubmit={handleSubmit} >
         <input type="text" className="search-box-input text"
         required
         value={search}
         onChange={handleChange}
         placeholder ="Usuário Github"
         />
         <div className="search-btn">
            <Button text ="Encontrar"/>
         </div>
         </form>
         
        
      </div>
      {userData && (
      <div className="result-container">
            {isLoading ?
        <div className="loader">
        <ImageLoader/>
        <InfoLoader/>
       </div>:(
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
                                 <div><strong>Bio:</strong> {userData.bio}</div>
                                 <div><strong>Nome:</strong> {userData.name}</div>
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
                                <Button text="Ver perfil"/>
                               </a>
                        </div>
                       
                     </div>
                  )}
            </div>
              )}
      </div>
   )
    }


export default Searchs;