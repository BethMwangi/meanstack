import React from 'react';
import NavigationBar from './NavigationBar';
import Greetings from './Greetings';

class App extends React.Component {
    render() {
        let renderData = (this.props.children);

        return (

            <div className="container">
                <NavigationBar />
              {renderData}

            </div>
        );
    }
}

export default App;