// Write your code here
import {GeneratorButton} from './styledComponents'

export const GradientDirectionItem = props => {
  const {details, changeDirection, actives} = props
  const {directionId, value, displayText} = details
  const changeBgColor = () => {
    changeDirection(value, directionId)
  }
  //   const activeBtn =

  return (
    <GeneratorButton
      value={value}
      onClick={changeBgColor}
      activates={actives === directionId ? 'true' : 'false'}
    >
      {displayText}
    </GeneratorButton>
  )
}
export default GradientDirectionItem
