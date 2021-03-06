import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import LoginForm from '../LogIn/LogIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Books from '../Book/Books'
import Book from '../Book/Book'
import CreateBook from '../Book/CreateBook'
import EditBook from '../Book/EditBook'
import Home from '../Home/Home'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <Home user={user}/>
          )} />
          <Route path='/log-in' render={() => (
            <LoginForm alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <Switch>
            <Route path="/books/:id/edit" render={(props) => (
              <EditBook {...props} alert={this.alert} user={user} />
            )} />
            <Route exact path='/books/:id' render={(props) => (
              <Book {...props} alert={this.alert} user={user} />
            )} />
            <Route exact path='/books' render={() => (
              <Books alert={this.alert} user={user} />
            )} />
          </Switch>
          <Route exact path='/create-book' render={(props) => (
            <CreateBook {...props} alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
