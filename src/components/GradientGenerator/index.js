import {Component} from 'react'
import {Generator, Div, GenerateBtn} from './styledComponents'
import {GradientDirectionItem} from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    direction: 'top',
    hexCodeOne: '#8ae323',
    hexCodeTwo: '#014f7b',
    hexCodes: ['#8ae323', '#014f7b'],
    actives: 'TOP',
  }

  //   changeDirection = event => {
  //     this.setState({direction: event.target.value})
  //   }

  changeDirection = (value, directionId) => {
    this.setState({direction: value, actives: directionId})
  }

  changeHexCodeOne = event => {
    this.setState({hexCodeOne: event.target.value})
  }

  changeHexCodeTwo = event => {
    this.setState({hexCodeTwo: event.target.value})
  }

  generateBg = () => {
    const {hexCodeOne, hexCodeTwo} = this.state
    this.setState({hexCodes: [hexCodeOne, hexCodeTwo]})
  }

  render() {
    const {direction, hexCodeOne, hexCodeTwo, hexCodes, actives} = this.state
    console.log(actives)

    return (
      <Generator
        // data-testid="gradientGenerator"
        direction={direction}
        hexCodeOne={hexCodes[0]}
        hexCodeTwo={hexCodes[1]}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <Div>
          {gradientDirectionsList.map(each => (
            <li key={each.directionId}>
              <GradientDirectionItem
                details={each}
                actives={actives}
                changeDirection={this.changeDirection}
              />
            </li>
          ))}
        </Div>

        <p>Pick the Colors</p>
        <Div>
          <li>
            <p>{hexCodeOne}</p>
            <input
              type="color"
              value={hexCodeOne}
              onChange={this.changeHexCodeOne}
            />
          </li>
          <li>
            <p>{hexCodeTwo} </p>
            <input
              type="color"
              value={hexCodeTwo}
              onChange={this.changeHexCodeTwo}
            />
          </li>
        </Div>
        <GenerateBtn onClick={this.generateBg}>Generate</GenerateBtn>
      </Generator>
    )
  }
}
export default GradientGenerator
