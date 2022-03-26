import {Link, Route, Switch} from 'react-router-dom';
import React from 'react';
import image from '../assets/images/Logo4.svg';
import Home from './home';

function SideBar(){
    return(
        <React.Fragment>

        <div className='container-fluid'>
            <div className='row'>
                <ul className='col-2 bg-colorPri' >
                    <a  href="/">
                        <div className="sidebar-brand-icon">
                            <img className="w-100" src={image} alt="LSKV"/>
                        </div>
                    </a>
                    <hr className="sidebar-divider my-2"/>
                    <div>
                        <li >
                            <Link className="color-letter" to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                                    <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                                </svg>
                                <span>Dashboard - LSKV</span>
                            </Link>
                        </li>
                        <hr className="sidebar-divider"/>
                        <li>
                            <Link className='color-letter'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                                </svg>
                                <span>Listado - Productos</span>
                            </Link>
                        </li>
                        <hr className="sidebar-divider"/>
                        <li>
                            <Link className='color-letter'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
                                </svg>
                                <span>Listado - Users</span>
                            </Link>
                        </li>
                        <li></li>
                    </div>
                </ul>
                <Switch className="col-9">
                    <Route exact path="/"><Home/></Route>
                    <Route path="/products"></Route>
                    <Route path="/users"></Route>
                </Switch>
            </div>
        </div>
    </React.Fragment>
    )
    
}

export default SideBar;