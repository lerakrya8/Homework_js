import React, {Component} from 'react'
import './Autorisation.css'
import Main_autorisation from '../../components/Main_autorisation/Main_autorisation'
import Header from '../../components/Header/Heager'

class Autorisation extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header />
                <Main_autorisation />
            </div>
        )
    }
}
export default Autorisation;