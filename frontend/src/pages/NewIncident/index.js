import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';

import api from '../../services/api';

export default function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };

        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch (err) {
            alert("Nao foi possivel criar caso!");
        }
    }

    return(
        <div className="NewIncident">
            <div className="container">
                <section>
                    <img src={LogoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Escreva detalhadamente para que você
                        possa encontrar um herói para resolver
                        isso.
                    </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Profile Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>

                    <input
                        placeholder="Titulo do Caso"
                        value={title}
                        onChange={ e => setTitle(e.target.value)}
                    />

                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={ e => setDescription(e.target.value)}
                    />

                    <input
                        placeholder="Valor em Reais"
                        value={value}
                        onChange={ e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}