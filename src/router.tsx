import React from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import NumberInputPage from './components/NumberInputPage';
import CustomTextInputPage from './components/CustomTextInputPage';
import ResultPage from './components/ResultPage';



const Router = () => {
    return (
        <NativeRouter>
            <Switch>
                <Route path={"/"} exact component={NumberInputPage} />
                <Route path={"/CustomTextInputPage"} component={CustomTextInputPage} />
                <Route path={"/ResultPage"} component={ResultPage} />
            </Switch>
        </NativeRouter>
    );
}

export default Router;