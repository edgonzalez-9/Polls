import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Header from './Component/Header'
import Congress from './Container/Congress';
import President from './Container/President';
import Senate from './Container/Senate';
import Home from './Component/Home';
import Polls from './Component/Polls'
import candidates from './data'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

const sortedCandidates = candidates.sort((a,b) => (a.party > b.party) ? 1: -1)

const presidency = sortedCandidates.filter(candidate => candidate.race === 'President')

const senate = sortedCandidates.filter(candidate => candidate.race === 'Senate')

const congress = sortedCandidates.filter(candidate => candidate.race === 'Congress')

function App() {
  return (
    <div className='parent'>
      <BrowserRouter>

      <Header/>

      <Switch>

        <Route exact path="/" component={() => {
          return(
            <Polls/>
          )
        }} />

        <Route exact path="/home" component={() => {
          return(
            <Home/>
          )
        }} />

        <Route exact path="/president" component={() => {
          return(
            <President candidates={presidency}/>
          )
        }} />

        <Route exact path="/congress" component={() => {
          return(
            <Congress candidates={congress}/>
          )
        }} />

        <Route exact path="/senate" component={() => {
          return(
            <Senate candidates={senate}/>
          )
        }} />

        <Route exact path="/login" component={() => {
          return(
            <Login />
          )
        }} />

        <Route exact path="/signup" component={() => {
          return(
            <SignUp />
          )
        }} />

        <Route>
          <Redirect to="/" />
        </Route>

      </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
