import React from 'react';

const RecordTab = (props) => {
    return (
        <div className='card shadow'>
            <div className='card-header text-light ' Style="background-color: #041C32;">
                <h4 className='d-inline card-title'>Date : </h4>
                <p className='d-inline card-subtitle ps-3 fs-5'>{props.data.date}</p>
            </div>
            <div className='card-body'>
                <h6 className='d-inline card-title'>Weight : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.weight}</p>
                <hr />
                <h6 className='d-inline card-title'>Bicep : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.bicep}</p>
                <hr/>
                <h6 className='d-inline card-title'>Waist : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.waist}</p>
                <hr />
                <h6 className='d-inline card-title'>Chest : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.chest}</p>
                <hr />
                <h6 className='d-inline card-title'>Glutes : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.glutes}</p>
                <hr />
                <h6 className='d-inline card-title'>Quads : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.quads}</p>
                <hr />
                <h6 className='d-inline card-title'>Calves : </h6>
                <p className='d-inline card-subtitle ps-3'>{props.data.calves}</p>
            </div>
        </div>
    );
};

export default RecordTab;