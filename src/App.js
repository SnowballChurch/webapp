import React from 'react';
import './App.css';
import Footer from "./component/Footer";
import Header from "./component/Header";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createHashHistory} from "history";
import {HashRouter} from "react-router-dom";
import WebsiteRouter from "./WebsiteRouter";

import "@fortawesome/fontawesome-free/css/all.min.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

// ReactGA.initialize('UA-102646186-1');

const history = createHashHistory();
history.listen((location, action) => {
  // ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HashRouter history={history}>
        <Header />
        <WebsiteRouter history={history} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
