import React,{createContext,useReducer} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home"
import Info from "./Components/Info"
import NavBar from "./Components/NavBar"
import Today from "./Components/Today"
import Yesterday from "./Components/Yesterday"
import TodayCases from "./Components/TodayCountry"
import YesterdayCases from "./Components/YesterdayCountry"
import {initialState,reducer} from "./Components/reducer"
export const countryContext = createContext()
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <countryContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Info} path="/info" />
        <Route component={Today} path="/today" />
        <Route component={Yesterday} path="/yesterday" />
        <Route component={TodayCases} path="/cases-today" />
        <Route component={YesterdayCases} path="/cases-yesterday" />
      </Switch>
    </BrowserRouter>

    </countryContext.Provider>
  )
}

export default App
