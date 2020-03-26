import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import HeroesImg from '../../assets/heroes.png';

import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try {

            const response = await api.post('sessions', {id});

            console.log(response.data.name);

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch (err) {
            alert("Falha no logon!")
        }
    }
    return(
        <div className="Logon">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" className="logo"/>

                <form onSubmit={handleLogon} className="logon">
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes" className="heroes"/>
        </div>
    );
}