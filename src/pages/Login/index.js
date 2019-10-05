import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }){
    
        //estado é qualquer informação que armezenamos em um componente
        const [email, setEmail] = useState('');
      
        async function handleSubmit(event){
            event.preventDefault();
            
            //passo o e-mail do usuário por post
            const response = await api.post('/sessions', {email});
            
            
            const { _id } = response.data;
            
            //salva no localStorage o id do usuário
            localStorage.setItem('user', _id)
            
            //navegação
            history.push('/dashboard')
    }


    return (
        <>
            <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail</label>
                <input
                id="email"
                type="email"
                placeholder="Seu melhor e-mail" 
                value= {email}
                onChange={event => setEmail(event.target.value)}
                />

                <button type="submit" className="btn">Entrar</button>

            </form>
        </>
    )
}