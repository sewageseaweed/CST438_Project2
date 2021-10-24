import React, { Component } from 'react';
import axios from 'axios';
class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            password: this.props.user.password,
            email: this.props.user.email, 
        }
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const {id, username, password, email} = this.state;

        axios.post('/users/save', {id, username, password, email})
        .then((res) => {
            console.log(res);
            axios.get('/users/username/'+username)
                .then(res => {
                    this.props.changeUserState(res.data);
                    this.props.history.push('/dashboard');
                })
        })
        .catch(error => {
            console.log("Edit Profile error ", error);
        });
    }

    handleDelete = () => {
        axios.delete('/users/delete/'+this.props.user.username)
            .then(res => {
                console.log(res);
                this.props.history.push("/");
            })
    }

    render() {
        return (
            <div class="editProfile-wrapper">
                <form class="card p-3 m-auto mt-5 w-50" onSubmit={this.onSubmit}>
                    <div class="text-center"> Edit Profile </div>

                    <input 
                        class="p-3 m-3"
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={this.state.email} 
                        onChange={this.onChange} 
                        required
                    />
                    <input 
                        class="p-3 m-3"
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.username} 
                        onChange={this.onChange} 
                        required
                    />
                    <input
                        class="p-3 m-3" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.password} 
                        onChange={this.onChange} 
                        required
                    />
                    <button class="btn btn-primary w-25 m-auto p-3 m-3" type="submit">Save Changes</button>
                </form>
                <div class="d-flex justify-content-center card p-3 m-auto mt-5 w-50">
                    <button class="btn btn-danger w-25 m-auto p-3 m-3 text-center" onClick={this.handleDelete}>Delete Account</button>
                </div>
            </div>
        )
    }
}

export default EditProfile;