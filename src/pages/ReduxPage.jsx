import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Link, Route, Switch
} from "react-router-dom";
import { addTask, fetchTask } from '../action/task';
import { getApi } from '../apis/todoApi';
import HeaderLink from '../components/HeaderLink';
import Newtask from '../components/NewTask.jsx';
import star from '../components/pngwing.com.png';
import Task from '../components/Task.jsx';

function ReduxPage(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    getApi('task', 'GET').then(res => {
      dispatch(fetchTask(res.data))
    })
  }, []);

  const task = useSelector(state => state.task);

  const getdata = (data, key, statusValue) => {
    if (data == '') { data = task[key - 1].name };
    getApi('task/' + key, 'PUT', { name:data,status:statusValue})
    .then(res => {
      getApi('task', 'GET').then(data => {
        dispatch(fetchTask(data.data))
      })
    });
  }
    
  const addfn = (value) => {
    getApi('task', 'POST', { name: value, status: 'ToDo' }).then(res => {
      dispatch(addTask(value));
    });
  }
    
  const deletefn = (value) => {
    getApi('task/' + value, 'DELETE', null)
      .then(res => {
        getApi('task', 'GET').then(data => {
          dispatch(fetchTask(data.data))
        })
      });

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
          <p style={{fontSize: '14px'}}><b><i>*Data fetched by json-server with data.json file and port:3000* </i></b></p>
            </header>
        </div>
    );
}

export default ReduxPage;