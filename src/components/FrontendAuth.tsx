import React from "react";
import { Route, Redirect } from "react-router-dom";

// config
import RouterConfig from "./RouterConfig";

class FrontendAuth extends React.Component<any> {
  render() {
    console.log(this.props)
    const pathname = this.props.location.pathname;
    const targetRouter = RouterConfig.find(function(item) {
      return item.path === pathname;
    });
    const isLogin = true

    if (pathname === "/") {
      return <Redirect to="login"></Redirect>;
    }

    if (!targetRouter) {
      return <Redirect to="404" />;
    }

    if (isLogin) {
      if (pathname === "/login") {
        return <Redirect to="/home"></Redirect>;
      } else {
        return (
          <Route exact path={pathname} component={targetRouter.component} />
        );
      }
    } else {
      if (targetRouter.auth) {
        console.log("请先登录");
        return <Redirect exact to="/login" />;
      } else {
        return (
          <Route exact path={pathname} component={targetRouter.component} />
        );
      }
    }
  }
}

export default FrontendAuth;
