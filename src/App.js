import React from 'react';


let AddIdeas = (props) => {
  return (
    <>
      <div>Add Some Activities to Do Today!</div>
      
      <form onSubmit = {props.addActivity}>
        <input value={props.newActivity} onChange={props.handleActivityChange} /> 
        <button type = "submit">Add</button>
      </form>


    </>
  ); 
}

let IdeaDisplay = (props) => {
  
  if (props.randomPicks.length != 0) {
    return (
      <>
        <div className = "description">We currently have <span id = "special">{props.items.length}</span> idea(s) for what to do today!</div>
        <div id = "listContainer">
            <ul>
                {props.items}
            </ul>
          </div>
          <div id = "buttonContainer"><button onClick = {props.pickTwoActivities}>Pick two ideas randomly</button></div>
          <div id = "ourIdeas">
              Today's activities: {props.randomPicks[0]}, {props.randomPicks[1]}
          </div>
      </> 
    );      
  } else {
    return (
      <>
        <div className = "description">We currently have <span id = "special">{props.items.length}</span> idea(s) for what to do today!</div>
          <div id = "listContainer">
            <ul>
                {props.items}
            </ul>
          </div>
          <div id = "buttonContainer"><button onClick = {props.pickTwoActivities}>Pick two ideas randomly</button></div>
          <div id = "ourIdeas">
             Today's activities will go here!
          </div>
      </> 
    ); 
  }
  
}

let ideasCopy; 

class App extends React.Component {
  constructor (props) {
    super(props); 
    
    this.state = {
      page1: true, 
      ideas: [], 
      randomPicks: [], 
      newInput: '',
      submit: '', 

    }; 

    this.handleSubmit = this.handleSubmit.bind(this); 
    this.handleActivityChange = this.handleActivityChange.bind(this); 
    this.changeTabs = this.changeTabs.bind(this); 
    this.pickTwoActivities = this.pickTwoActivities.bind(this);

  }

  handleSubmit (event) {
    event.preventDefault();
    if (this.state.newInput != '') {
      this.setState(function (state) {
        return {ideas: [...state.ideas, state.newInput], newInput: ''}
        });
    } else {
      window.alert("You have to type an activity into the input bar before you add it!");
    }
    
  }

  handleActivityChange (event) {
    this.setState({
      newInput: event.target.value,
      });
  }

  changeTabs () {
    if (this.state.page1) {
      this.setState({page1: false}); 
    } else {
      this.setState({page1: true}); 
    }
  }

  pickTwoActivities () {
    if (this.state.ideas.length > 2) {

      ideasCopy = this.state.ideas.slice(0); 

      console.log(ideasCopy); 

      this.setState({randomPicks: [(ideasCopy.splice( Math.floor(Math.random() * this.state.ideas.length), 1) [0]), (ideasCopy.splice( Math.floor(Math.random() * (this.state.ideas.length - 1) ), 1) [0])]}); 

      console.log(this.state.randomPicks); 

    } else {
      window.alert("You need at least 3 ideas before you can pick 2 randomly!");
    }
  }

  render () {
   // const items = this.state.ideas.map((elem, index) => <li key = {index}>{elem}</li>); 

    let randomPicksCopy = this.state.randomPicks.slice(0); 
    
    const items = this.state.ideas.map(function (elem, index) {
      
      if (randomPicksCopy.indexOf(elem) != -1) {
        return <li className = "selectedLi" key = {index}>{elem}</li>;
      } else {
        return <li key = {index}>{elem}</li>; 
      }

    });

    if (this.state.page1) {
      
      return (
        <div>
            <div className = "header"><span className = "headerItem">Add Activities</span><span className = "headerItem" onClick = {this.changeTabs}>Randomly Pick Activities</span></div>
            <div className = "description">Add new activities!</div> 
            <div id = "listContainer">
              <ul>
                {items}
              </ul>
            </div>
            <form onSubmit = {this.handleSubmit}>
              <input value = {this.state.newInput} onChange={this.handleActivityChange} /> 
              <button type = "submit">Add</button>
            </form>
        </div>
      );

    } else {

      return (
        <div>
          <div className = "header"><span className = "headerItem" onClick = {this.changeTabs}>Add Activities</span><span className = "headerItem">Randomly Pick Activities</span></div>
          <IdeaDisplay items = {items} randomPicks = {this.state.randomPicks} pickTwoActivities = {this.pickTwoActivities}/> 
        </div>
      ); 

    }
  }
}

export default App;
