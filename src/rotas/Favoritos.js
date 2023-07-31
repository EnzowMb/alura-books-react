import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa';

//Isto aqui é para implementar o CSS na propria classe com styled-components
//Então n precisa criar um className
const AppContainer = styled.div` 

    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;
