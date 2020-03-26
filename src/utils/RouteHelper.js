import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { withRouter } from 'react-router';

export const withRoute = (WrappedComponent, extension) => {
    return class CompositeRoute extends Component {
        render() {
            let routePath = this.props.cqPath;
            if (!routePath) {
                return <WrappedComponent {...this.props}/>;
            }

            extension = extension || 'html';

            // Context path + route path + extension
            return <Route key={ routePath } path={ '(.*)' + routePath + '.' + extension } render={ (routeProps) => {
                return <WrappedComponent {...this.props} {...routeProps}/>;
            } } />
        }
    }
};

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
    render() {
      return this.props.children
    }
}
export default withRouter(ScrollToTop);
