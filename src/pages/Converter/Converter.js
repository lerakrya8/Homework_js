import React, {Component} from 'react'
import './Converter.css'
import Header1 from '../../components/Header1/Header1'
import Main_converter from '../../components/Main_converter/Main_converter'

class Converter extends Component {
    render() {
        return (
            <div className = 'Main_page'> 
                <Header1 />
                <Main_converter />
            </div>
        )
    }
}

export default Converter

