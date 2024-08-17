import Produto from '../Produto/index'

const ListaProdutos = ({ produtos }) => {
    return(
      <div> {produtos.map( 
          (p)=> (<Produto valor={p} ></Produto>) 
        )}
      </div>
    );
  }

export default ListaProdutos;