import React from "react";

export default props => {
    const aprovados = ['Luana', 'Gustavo', 'Isbella', 'Apollo']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }
    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}