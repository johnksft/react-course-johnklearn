import React from 'react'
import './styles/BadgeNew.css'
import header from '../images/badge.header.jpg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from 'md5'
class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
            jobTitle: '',
            firstName:'',
            lastName:'',
            email:'',
            twitter:''
        } 
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }


    handleSubmit = async e => {
        e.preventDefault()
        const hash = md5(this.state.form.email);
        this.state.form={
            ...this.state.form,
            avatarUrl: `https://www.gravatar.com/avatar/${hash}?d=identicon`
        }
        this.setState({ loading:true, error:null})
        try {
            await api.badges.create(this.state.form);
            this.setState({ loading:false})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading:false, error:error})
        }
    }

    render(){
        if(this.state.loading){
            return (  <PageLoading/> );
        }else{
            return (
                <React.Fragment>
                    <div className="BadgeNew__hero">
                        <img className="img-fluid BadgeNew__hero-image" src={header} alt="header"/>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Badge 
                                    firstName={this.state.form.firstName || 'First Name'}
                                    lastName={this.state.form.lastName  || 'Last Name'}
                                    twitter={this.state.form.twitter  || 'Twitter Username'}
                                    jobTitle={this.state.form.jobTitle  || 'Job Title'}
                                    email={this.state.form.email  || 'Email'}
                                    avatarUrl="https://www.gravatar.com/avatar/0628601f7d228fda7a1bc239335ce680?d=identicon" />
                            </div>
                            <div className="col">
                                <h1>New Attendant</h1>
                                <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form} 
                                error={this.state.error} />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default BadgeNew;