import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './bootstrap.css';
import './bootstrap.min.css';
import './App.css';
//<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"/>

var poorDataBase = [
    { day:"poniedzialek",group:"grupa1",hour:"08:00 - 10:00",name:"Komponenty"},
    { day:"poniedzialek",group:"grupa2",hour:"08:00 - 10:00",name:"WPF"},
    { day:"poniedzialek",group:"grupa3",hour:"08:00 - 10:00",name:"Systemy Wbudowane"},
    { day:"poniedzialek",group:"grupa4",hour:"08:00 - 10:00",name:"Java"},
    { day:"poniedzialek",group:"grupa1",hour:"10:00 - 12:00",name:"Cpłotek"},
    { day:"poniedzialek",group:"grupa2",hour:"10:00 - 12:00",name:"Pytong"},
    { day:"poniedzialek",group:"grupa3",hour:"10:00 - 12:00",name:"Cpłotek"},
    { day:"poniedzialek",group:"grupa4",hour:"10:00 - 12:00",name:"Pytong"},

    { day:"wtorek",group:"grupa1",hour:"08:00 - 10:00",name:"Lonuks"},
    { day:"wtorek",group:"grupa2",hour:"08:00 - 10:00",name:"Negocjacje"},
    { day:"wtorek",group:"grupa3",hour:"08:00 - 10:00",name:"Sluchanie muzyki klasycznej"},
    { day:"wtorek",group:"grupa4",hour:"08:00 - 10:00",name:"Algorytmy"},
    { day:"wtorek",group:"grupa1",hour:"10:00 - 12:00",name:"MVC"},
    { day:"wtorek",group:"grupa2",hour:"10:00 - 12:00",name:"ASI"},
    { day:"wtorek",group:"grupa3",hour:"10:00 - 12:00",name:"Projetk zespolowy"},
    { day:"wtorek",group:"grupa4",hour:"10:00 - 12:00",name:"BTH"},

    { day:"sroda",group:"grupa1",hour:"08:00 - 10:00",name:"ASI"},
    { day:"sroda",group:"grupa2",hour:"08:00 - 10:00",name:"WPF"},
    { day:"sroda",group:"grupa3",hour:"08:00 - 10:00",name:"Java"},
    { day:"sroda",group:"grupa4",hour:"08:00 - 10:00",name:"Komponenty"},
    { day:"sroda",group:"grupa1",hour:"10:00 - 12:00",name:"Systemy wbudowane"},
    { day:"sroda",group:"grupa2",hour:"10:00 - 12:00",name:"ASI"},
    { day:"sroda",group:"grupa3",hour:"10:00 - 12:00",name:"Projetk zespolowy"},
    { day:"sroda",group:"grupa4",hour:"10:00 - 12:00",name:"BTH"},
    
    { day:"czwartek",group:"grupa1",hour:"08:00 - 10:00",name:"Negocjacje"},
    { day:"czwartek",group:"grupa2",hour:"08:00 - 10:00",name:"Lonuks"},
    { day:"czwartek",group:"grupa3",hour:"08:00 - 10:00",name:"Kompnenty"},
    { day:"czwartek",group:"grupa4",hour:"08:00 - 10:00",name:"ASI"},
    { day:"czwartek",group:"grupa1",hour:"10:00 - 12:00",name:"WPF"},
    { day:"czwartek",group:"grupa2",hour:"10:00 - 12:00",name:"GG"},
    { day:"czwartek",group:"grupa3",hour:"10:00 - 12:00",name:"BTH"},
    { day:"czwartek",group:"grupa4",hour:"10:00 - 12:00",name:"BSK"}


  ]


class App extends Component {



  render() {
    return (
      <Router>
      <Header>
        
        </Header>
      </Router>

    );
  }
}


//Zajęcia
class Activities extends Component {
  constructor(props){
    super(props);
    this.state = {
      editing: false
    }
  }

  edit = () => {
    this.setState({editing: true})
  }

  save = () => {
    if(/^[a-zA-Z]+$/.test(this.refs.name.value)){
    this.props.updateActivity(this.refs.day.value,this.refs.group.value,this.refs.hour.value,this.refs.name.value, this.props.index)
    this.setState({editing: false})}
    else
    alert("Wprowadz poprawny format danych dla nazwy");
  }
  cancel = () =>{
    this.setState({editing:false})
  }
  remove = () => {
    this.props.deleteFromBoard(this.props.index)
  }

  renderDefault = () => {
    return (
      <div className="App gather">
        <div>{this.props.children.name}</div>
        <div>{this.props.children.group}</div>
        <div>{this.props.children.day}</div>
        <div>{this.props.children.hour}</div>
        <button onClick={this.edit} className="btn-light" > Edit</button>
        <button onClick={this.remove} className="btn-danger" > Remove</button>
      </div>
    );
  }

  renderEdit = () => {
    return (
      <div className="App">
          <div>
         <input type="text" ref="name" placeholder="nazwa" defaultValue={this.props.children.name}></input>
        </div>
        <div>
          <select ref="group" defaultValue={this.props.children.group}>
            <option>Grupa1</option>
            <option>Grupa2</option>
            <option>Grupa3</option>
            <option>Grupa4</option>
          </select>
        </div>
        <div>
          <select ref="day" defaultValue={this.props.children.day}>
            <option>poniedzialek</option>
            <option>wtorek</option>
            <option>sroda</option>
            <option>czwartek</option>
            <option>piatek</option>
          </select>
        </div>
        <div>
          <select ref="hour" defaultValue={this.props.children.hour}>
          <option>08:00 - 10:00</option>
          <option>10:00 - 12:00</option>
          <option>12:00 - 14:00</option>
          <option>14:00 - 16:00</option>
        </select>
        <button onClick={this.save} className="btn-success" > Save</button>
        <button onClick={this.cancel} className="btn-info" > Cancel</button>
      </div>
      </div>
    );
  }

  render() {

    if (this.state.editing)
      return this.renderEdit();
    else
      return this.renderDefault();
  }
}


class Board extends Component {
     
  constructor(props){
    super(props);
    this.state = {
      DataBase :poorDataBase
    }
     
  }

  removeActivity = (i) => {
    let arr = this.state.DataBase;
    console.log("noremove");
    arr.splice(i, 1)
    this.setState({DataBase: arr})
  }

  updateActivity = (day,group,hour,name, i) => {
    let arr = this.state.DataBase;
    
    arr[i]= {day:day,group:group,hour:hour,name:name};
    
    this.setState({DataBase: arr})
  }

  addNew = () => {
    let arr = this.state.DataBase;
    if(/^[a-zA-Z]+$/.test(this.refs.addname.value)){
        let notpassed = false;
        arr.forEach(element => {
          if(element.day === this.refs.addday.value && element.hour === this.refs.addhour.value && element.group === this.refs.addgroup.value)
            {notpassed = true;}
            

        });
        if(notpassed)
        alert("Dana grupa ma już zajęcia w tym dniu o tej godzinie!")
        else
        {
          arr.push({name:this.refs.addname.value,day:this.refs.addday.value,group:this.refs.addgroup.value,hour:this.refs.addhour.value});
          this.setState({DataBase: arr});
        }
      }
    else alert("Wprowadz poprawny format danych");
  }

  eachActivity = (activity, i) => {
    //let activity = {day:day,group:group,hour:hour,name:name};
    return (
    <Activities key={i} index={i} updateActivity={this.updateActivity} deleteFromBoard={this.removeActivity}>
      {activity}
    </Activities>
    )
  }

  render = () => {
    return(
      <div>
        <div>
         <input type="text" ref="addname" placeholder="nazwa"></input>
        </div>
        <div>
          <select ref="addgroup">
            <option>grupa1</option>
            <option>grupa2</option>
            <option>grupa3</option>
            <option>grupa4</option>
          </select>
        </div>
        <div>
          <select ref="addday">
            <option>poniedzialek</option>
            <option>wtorek</option>
            <option>sroda</option>
            <option>czwartek</option>
            <option>piatek</option>
          </select>
        </div>
        <div>
          <select ref="addhour">
          <option>08:00 - 10:00</option>
          <option>10:00 - 12:00</option>
          <option>12:00 - 14:00</option>
          <option>14:00 - 16:00</option>
        </select>
          </div>

        <div>
          <button onClick={this.addNew} className="btn-info">Add New</button>
        </div>
        <div className="board">
          {this.state.DataBase.map( this.eachActivity )}
        </div>
      </div>
    )
  }
}

const Header = (props) => {
  return (
      
      <nav className="navbar navbar-default">
              <div className="navbar-header">
                  <ul className="nav navbar-nav">
                      <li><Link to="/" >Panel zarządzania</Link></li>
                      <li><Link to="/days" >Zajęcia w danym dniu</Link></li>   
                      <li><Link to="/groups" >Zajęcia dla danych grup</Link></li>
                  </ul>
                  <Route exact path="/" component={Board}/>
                  <Route path="/days" component={DailyActivities}/>
                  <Route path="/groups" component={GroupActivities}/>
              </div>
      </nav>
      
  );
};

class DailyActivities extends Component{
  
  constructor(props){
    super(props);
    var DataBase = poorDataBase;
    let arr = DataBase;
    let mon =[],thue=[],wed=[],thur=[],fri=[];
    arr.forEach(element => {
      if(element.day==="poniedzialek")
         mon.push(element);
      else if(element.day==="wtorek")
         thue.push(element);
      else if(element.day==="sroda")
         wed.push(element);
      else if(element.day==="czwartek")
         thur.push(element);
      else if(element.day==="piatek")
         fri.push(element);
    });
    this.state = {
      DataBase :poorDataBase,
    Monday:mon,
    Thuesday:thue,
    Wednesday:wed,
    Thursday:thur,
    Friday:fri
    }
   
  }
  eachActivity = (activity,i) =>{
    return(
      <div key={i} index={i} className="gatherv2">
      <div >{activity.name}</div>
        <div>{activity.group}</div>
        <div>{activity.hour}</div>
      </div>
    )
  }
  render = () => {
    return(
      <div className="container">
        <div className="row border: 10px solid red">
            <div className="col-xs-2 col-half-offset" id="p1">
              Poniedzialek
              {this.state.Monday.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p2">
            Wtorek
          {this.state.Thuesday.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p3">
            Sroda
          {this.state.Wednesday.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p4">
            Czwartek
          {this.state.Thursday.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p5">
            Piatek
          {this.state.Friday.map( this.eachActivity )}
            </div>
        </div>
      </div>
    )
  }
}

class GroupActivities extends Component{
  
  constructor(props){
    super(props);
    var DataBase = poorDataBase;
    let arr = DataBase;
    let gr1 =[],gr2=[],gr3=[],gr4=[];
    arr.forEach(element => {
      if(element.group==="grupa1")
         gr1.push(element);
      else if(element.group==="grupa2")
         gr2.push(element);
      else if(element.group==="grupa3")
         gr3.push(element);
      else if(element.group==="grupa4")
         gr4.push(element);
      
    });
    this.state = {
      DataBase :poorDataBase,
      Gr1:gr1,
      Gr2:gr2,
      Gr3:gr3,
      Gr4:gr4
    }
   
  }
  eachActivity = (activity,i) =>{
    return(
      <div key={i} index={i} className="gatherv2">
      <div >{activity.name}</div>
        <div>{activity.day}</div>
        <div>{activity.hour}</div>
      </div>
    )
  }
  render = () => {
    return(
      <div className="container">
        <div className="row border: 10px solid red">
            <div className="col-xs-2 col-half-offset" id="p1">
              Grupa1
              {this.state.Gr1.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p2">
            Grupa2
          {this.state.Gr2.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p3">
            Grupa3
          {this.state.Gr3.map( this.eachActivity )}
            </div>
            <div className="col-xs-2 col-half-offset" id="p4">
            Grupa4
          {this.state.Gr4.map( this.eachActivity )}
            </div>
            
        </div>
      </div>
    )
  }
}
export default App;
