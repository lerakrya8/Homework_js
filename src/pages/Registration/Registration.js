import React, {Component} from 'react'
import './Registration.css'
import Main_regForm from '../../components/Main_registration/Main_registration'
import Header from '../../components/Header/Heager'

class Registration extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header />
                <Main_regForm />
            </div>
        )
    }
}
export default Registration;