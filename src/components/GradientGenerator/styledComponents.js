// Style your elements here
import styled from 'styled-components'

export const Generator = styled.div`
  //   background-image: linear-gradient(
  //     '${props => props.direction}',
  //     '${props => props.hexCodeOne}',
  //     '${props => props.hexCodeTwo}'
  //   );
  background-image: linear-gradient(to top, #8ae323, #014f7b);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
`
export const GenerateBtn = styled.button`
  color: #black;
  background-color: #00c9b7;
  border-radius: 3px;
  border-width: 0px;
  border-style: solid;
  height: 30px;
  width: 80px;
  cursor: pointer;
`
