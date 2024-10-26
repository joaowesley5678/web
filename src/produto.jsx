import { useEffect, useState } from 'react'

const Produto = ({idProduto,Produto}) => {
    const [visibleProduct, setVisibleProduct] = useState(idProduto);

    return (
        <div className='mt-20 w-full h-screen'>
            <h1>Pagina de produto</h1>
            {Produto.filter(produto => produto.id === visibleProduct).map(produto => (
                <div key={produto.id} className='border border-gray-600'>
                    <h1>{produto.name}</h1>
                    <img src={produto.imgSrc} alt={produto.name} />
                    <p>{produto.oferta}</p>
                    <p className=''>{produto.preco}</p>
                    <button>Adicionar à sacola</button>
                    <p>Descricao do produto.</p>
                </div>
            ))}
        </div>
    );
};
 
export default Produto;