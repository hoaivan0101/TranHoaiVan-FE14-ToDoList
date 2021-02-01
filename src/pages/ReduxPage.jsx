import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Link, Route, Switch
} from "react-router-dom";
import { deleteTask, editTask, addTask } from '../action/task';
import HeaderLink from '../components/HeaderLink';
import Newtask from '../components/NewTask.jsx';
import star from '../components/pngwing.com.png';
import Task from '../components/Task.jsx';

function ReduxPage(props) {

  const task = useSelector(state => state.task);
  const dispatch = useDispatch();

  const getdata = (data, key, statusValue) => {
    if (!data && task[key].status === statusValue) { return false };
    dispatch(editTask({ data: data, key: key, statusValue: statusValue }));
  }
    
  const addfn = (value) => {
    dispatch(addTask(value));
  }
    
  const deletefn = (value) => {
    dispatch(deleteTask(value));
  }

    return (
        <div className="App">
            <header className="App-header">
                <HeaderLink></HeaderLink>
                <BrowserRouter>
                    <ul className="nav__head">
                            <li><Link to="/redux">All</Link></li>
                            <li><Link to="/pending">To_Do</Link></li>
                            <li><Link to="/cancel">Cancel</Link></li>
                            <li><Link to="/finish">Finish</Link></li>
                    </ul>
            <h2>
              <img src={star} />TO DO LIST<img src={star} />
            </h2>
            <Newtask addfn={addfn}></Newtask>
                    <div className="main">
                        <ul>
                        <Switch>
                    <Route exact path='/redux'>
                    {task.map((item, index) => <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/pending'>
                    {task.filter((item1) => item1.status === 'ToDo').map((item, index) =>
                      <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/cancel'>
                    {task.filter((item1) => item1.status === 'Cancel').map((item, index) =>
                      <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                    <Route path='/finish'>
                    {task.filter((item1) => item1.status === 'Finished').map((item, index) =>
                      <Task {...item} getdata={getdata} deletefn={deletefn} key={index} index={index} />)}
                    </Route>
                  </Switch>
                        </ul>
                    </div>
          </BrowserRouter>
          <p style={{fontSize: '14px'}}><i>
            * This page is written with redux *
            </i>
          </p>
            </header>
        </div>
    );
}

export default ReduxPage;