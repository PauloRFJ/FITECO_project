import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'
import { useContext } from 'react';
import { TrilhasContext } from '../../context/TrilhasContext';

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {addTrilha} = useContext(TrilhasContext);
  // const onSubmit = data => console.log(data);
  // console.log(errors);

  function onSubmit(trilhas) {
    console.log(trilhas);
    console.log(errors);

    addTrilha(trilhas);
    alert("Nova trilha cadastrada com sucesso!");
      reset();
  }

  function addTrilhas(trilha) {
    fetch('/public/trilhas.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trilha),
    })
      .then(response => response.json())
      .then(result => {
        console.log('Dados salvos com sucesso:', result);
      })
      .catch(error => {
        console.error('Erro ao salvar os dados:', error);
      });

      addTrilhas(trilha);
  }

  function handleVoltar() {
    window.history.back();
  }
  

  return (
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <input className='w596' type="text" placeholder="Nome da trilha" {...register("titulo", {required: true})} />
      <div className="inputsRow">        
         <input className='w286' type="number" placeholder="Duração estimada (min)" {...register("duracaoMin", {required: true})} />
         <input className='w286' type="number" placeholder="Trajeto (km)" {...register("trajeto", {required: true})} />
      </div>
      <div className="inputsRow">
         <input className='w286' type="text" placeholder="Cidade" {...register("cidade", {required: true, maxLength: 50})} />
         <select defaultValue={"Selecione"} className='w286' {...register("estado", { required: true })}>
            <option value="Selecione">------------------- Estado -------------------</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AP">AP</option>
            <option value="AM">AM</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
            <option value="MG">MG</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PR">PR</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RJ">RJ</option>
            <option value="RN">RN</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
      </div>
      <div className="inputsRow">
          <input className='w286' type="text" placeholder="Nome completo usuário" {...register("autor", {required: true, max: 0, maxLength: 50})} />
          <select defaultValue={"SelecioneD"} className='w286' {...register("dificuldade", { required: true })}>
            <option value="SelecioneD">----------------- Dificuldade ----------------</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Moderado">Moderado</option>
            <option value="Experiente">Experiente</option>
          </select>
      </div>
      <select defaultValue={"SelecioneT"} className='w596' {...register("tipo", { required: true })}>
        <option value="SelecioneT">------------------------------------------------ Tipo de trilha ------------------------------------------------------</option>
        <option value="Caminhada">Caminhada</option>
        <option value="Trekking">Trekking</option>
        <option value="Aquatrekking">Aquatrekking</option>
      </select>
      <input className='w596' type="url" placeholder="URL imagem da trilha" {...register("image", {})} />

      <div className="buttons">
        <button type='submit'>Cadastrar</button>
        <button className='btn-voltar voltar' onClick={handleVoltar}>Voltar</button>
      </div>
    </form>
  );
}