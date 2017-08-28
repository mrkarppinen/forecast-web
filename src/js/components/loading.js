import React from 'react';

export default class Loading extends React.Component {


    render(){
        return (
        <div className="rows has-text-centered loading" >
            <div className="column image-container">
                <img className="image is-128x128" src="/icons/loading.svg" />
             </div>   
             <p className="column is-12">Loading...</p>
        </div>
        );
    }

}  