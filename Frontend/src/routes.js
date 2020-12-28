import {Switch, Route, Redirect} from 'react-router-dom';
import {MainPage} from './pages/MainPage/MainPage';
import {ChallengePage} from './pages/ChallengePage/ChallengePage';
import {TaskArchivePage} from './pages/TaskArchivePage/TaskArchivePage';
import {LoginPage} from './pages/LoginPage/LoginPage';

export const useRoutes = () => {
    const isLoggedIn = window.localStorage.getItem('userCredentials');
    if(isLoggedIn){
        return(
            <Switch>
                <Route path="/" exect>
                    <MainPage />
                </Route>
                <Route path="/challenge" exect>
                    <ChallengePage />
                </Route>
                <Route path="/archive" exect>
                    <TaskArchivePage />
                </Route>
                <Redirect to="/"/>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path="/login" exect>
                <LoginPage />
            </Route>
            <Redirect to="/login"/>
        </Switch>
    )
}