import Form from '../components/form/Form.jsx'
import './Cadastrar.css';


function Cadastrar() {
    return (
        <div className="cadastrar">
            <h1 className="t-cadastrar">Cadastro de nova trilha</h1>
            <div>
                <Form />
            </div>

        </div>
    );
}

export default Cadastrar;