import React from 'react'
import logoImage from '../images/logo.jpg';
import im404 from '../images/404.png';
import './styles/Home.css';
import { Link } from 'react-router-dom';
class NotFound extends React.Component{
    render(){
        return (
            <div className="Home">
                <div className="container">
                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                    <img
                        src={logoImage}
                        alt="Platzi Conf Logo"
                        className="img-fluid mb-2"
                    />

                    <h1>404 Page Not Found</h1>
                    <Link className="btn btn-primary" to="/">
                        Return
                    </Link>
                    </div>

                    <div className="Home__col d-none d-md-block col-md-8">
                    <img
                        src={im404}
                        alt="Astronauts"
                        className="img-fluid p-4"
                    />
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default NotFound;