import React from 'react'


export default class MovingButton extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            x: 50,
            y: 50
        }
    }
    
    
 
    
    
    movingAway = (e) => {
        console.log(`These are the positions: ${e.clientX} ${e.clientY}`);
        let width = window.innerWidth
        let height = window.innerHeight
        console.log(width, height);
    
        this.setState({
            x: Math.floor(Math.random() * width),
          });
        this.setState({
            y: Math.floor(Math.random() * width),
          });


      }
    
    
    
      


    render() {

        const styleButton = {    
            position:'absolute',
            top: this.state.x, 
            left: this.state.y, 
            backgroundColor:'#66faff',
            padding: 5, 
            border:'none', 
            fontWeight: '700',
            borderRadius: 5, 
            textShadow: '1px 2px #36dde3'
            
          }
    
        return (
            
        <button style={styleButton} onMouseEnter={this.movingAway}>30 Days Of React</button>
        )
    }
}







