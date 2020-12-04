import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-container">
                    <div className="container">
                        <div className="graf-bg-container">
                            <div className="graf-layout">
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                                <div className="graf-circle"></div>
                            </div>
                        </div>
                        <h1 className="home-title">Social Networks Login Demo</h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;