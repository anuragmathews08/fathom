import React, {Component} from 'react';
import BodyDataForm from '../components/BodyDataForm';

class FormPage extends Component {
    render() {
        return (
            <div className='container mt-md-5 mt-3 card px-0 shadow'>
            <div className='card-header' Style="background-color: #041C32;">
                <div className='row'>
                    <div className='col'>
                        <h3 className='text-center card-title text-light'>Body Data Form</h3>
                    </div>
                </div>
            </div>
                <BodyDataForm />
            </div>
        );
    };
}

export default FormPage;