import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css'

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <input className='w596' type="text" placeholder="Nome da trilha" {...register("Nome da trilha", {required: true})} />
      <div className="inputsRow">        
         <input className='w286' type="number" placeholder="Duração estimada (min)" {...register("Duração estimada (min)", {required: true})} />
         <input className='w286' type="number" placeholder="Trajeto (km)" {...register("Trajeto (km)", {required: true, max: 4})} />
      </div>
      <div className="inputsRow">
         <input className='w286' type="text" placeholder="Cidade" {...register("Cidade", {required: true, maxLength: 50})} />
         <select className='w286' {...register("Estado", { required: true })}>
            <option value="Selecione" selected>------------------- Estado -------------------</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>
      </div>
      <div className="inputsRow">
          <input className='w286' type="text" placeholder="Nome completo usuário" {...register("Nome completo usuário", {required: true, max: 0, maxLength: 50})} />
          <select className='w286' {...register("Dificuldade", { required: true })}>
            <option value="Selecione" selected>----------------- Dificuldade ----------------</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Moderado">Moderado</option>
            <option value="Experiente">Experiente</option>
          </select>
      </div>
      <select className='w596' {...register("Tipo de trilha", { required: true })}>
        <option value="Selecione" selected>------------------------------------------------ Tipo de trilha ------------------------------------------------------</option>
        <option value="Caminhada">Caminhada</option>
        <option value="Trekking">Trekking</option>
        <option value="Aquatrekking">Aquatrekking</option>
      </select>
      <input className='w596' type="url" placeholder="URL imagem da trilha" {...register("URL imagem da trilha", {})} />

      <div className="buttons">
        <button>Cadastrar</button>
        <button className='btn-voltar voltar'>Voltar</button>
      </div>
    </form>
  );
}