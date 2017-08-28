import React from 'react';

export default class Waiting extends React.Component {


    render(){
        return (
        <div className="rows has-text-centered waiting" >
            <p className="column is-12 waiting-attention">!</p>
            <p className="column is-12">Location needed.</p>
        </div>
        );
    }

}  