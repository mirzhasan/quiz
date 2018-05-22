import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width:768px;
    text-align:center;
    padding-top:50px;
`;

const Text = styled.p`
  font-size:3em;
  display: ${props=>props.visible? 'block': 'none'};
`;

const Button = styled.button`
  background-color: #ff8400;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

class App extends Component {
  constructor(props){
    super(props);

    this.state = { showText:false };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState(){
    this.state.showText? this.setState({showText:false}): this.setState({showText:true});
  }

  render() {
    return (
        <Container>
          <Button  onClick={this.toggleState}>{this.state.showText?"Hide": "Show"}</Button>
          <Text visible={this.state.showText}>This sentence is shown</Text>
        </Container>    
    );
  }
}

export default App;
