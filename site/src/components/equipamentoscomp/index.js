
import './index.scss';


export default function PaginaEquipamentos(props) {

    return (
        <div className="props-equipamentos">
            <img src={props.imagem}/>
    
            <div>
            <h4>{props.categoria}</h4>    
            <h3>{props.nome}</h3>
            
            <h2>{'R$ ' + props.preco}</h2>
            </div>
        </div>
      );
}