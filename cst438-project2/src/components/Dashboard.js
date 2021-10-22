import React from 'react';
import Navbar from './Navbar'

const Dashboard = props => {
    return (
        <div>
            <div class="mt-5"> 
                
                <Navbar { ... props}/>

                <h1>Dashboard</h1>
                <h1>STATUS: {props.loggedInStatus}</h1>
                <h1>Hello: {props.user.username}</h1>

            </div>
        </div>
    );
}
export default Dashboard;