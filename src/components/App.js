import React, { Component } from 'react';
import '../styles/App.css';
import {Navbar, Nav, NavbarBrand, NavItem, Button, Input} from 'reactstrap';


class Header extends Component {
  render() {
    return (
        <Navbar color='faded' light toggleable>
          <NavbarBrand>NavBar</NavbarBrand>
        </Navbar>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <Navbar color='faded' light toggleable>
        <Nav className='ml-auto' navbar>
          <NavItem>I am a footer</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

class ParentComponent extends Component {
  constructor(props){
    super(props);
    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: this.state.whatToSay});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatToSay: this.state.whatToSay, whatWasSaid: this.state.whatToSay});
    //clear our input by resetting state
    this.setState({whatToSay: ""});

  }
  //Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
  render() {
    return (
      <div>
        <div>
          <Input onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit}/>
          <DisplayComponent sayWhat={this.state.whatToSay} />
        </div>
      </div>
    );
  }
}

class ChildComponent extends Component {
  render() {
    return (
        <div>
          <Button color="primary" onClick={this.props.onClick}>Submit</Button>
        </div>
    );
  }
}

class DisplayComponent extends Component {
  render() {
    return (
      <div>{this.props.sayWhat}</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App container">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
