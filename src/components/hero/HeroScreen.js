import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroId} = useParams();
    const navigate = useNavigate();

    const hero = useMemo ( () => getHeroById(heroId), [heroId]);
    

    if(!hero){
        return <Navigate to='/' />
    }

    const handleReturn = () => {
        navigate(-1);
    }

    // const imgPath = `/assets/img/heroes/${hero.id}.jpg`; //desde public

    return (
        <div className='row mt-5'>
           <div className='col-4'>
               <img 
                    src= {heroImages(`./${heroId}.jpg`)} 
                    alt = {hero.superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
           </div>

            <div className='col-8 animate__animated animate__fadeIn'>
                <h3>{hero.superhero}</h3>
                <ul className='list-list-group-flush'>
                    <li className='list-group-item'> <b>Alter ego:</b > {hero.alter_ego}</li>
                    <li className='list-group-item'> <b>Publisher:</b > {hero.publisher}</li>
                    <li className='list-group-item'> <b>First Appeareance:</b > {hero.first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{hero.characters}</p>
                
                <button 
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                Regresar
                </button>

            </div>

        </div>
    );
};
