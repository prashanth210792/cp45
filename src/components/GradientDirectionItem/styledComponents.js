// Style your elements here
import styled from 'styled-components'

export const GeneratorButton = styled.button`
  background-color: ${props =>
    props.activates === 'true' ? '#ffffff' : '#ffffff79'};
  border-radius: 3px;
  border-width: 0px;
  border-style: solid;
  height: 30px;
  width: 80px;
  cursor: pointer;
  opacity: ${props => (props.activates === 'true' ? 1 : 0.5)};
`
