import React from 'react';

export default class Error extends React.Component {


    render(){
        return (
        <div className="rows has-text-centered error" >
            <p className="column is-12 error-attention">Oops!</p>
            <p className="column is-12">Not able to get location.</p>
        </div>
        );
    }

}  