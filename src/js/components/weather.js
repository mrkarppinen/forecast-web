import React from 'react';

export default class Weather extends React.Component {

    constructor(props){
        super(props);

        let iconCode = ("0" + props.icon_code).substr(-2);
        this.state = {
            narrative: props.narrative,
            iconSrc: `/static/icons/${iconCode}.png`,
            long_daypart_name: props.long_daypart_name
        };
    }

    render(){

        return (
            <div className="forecast column is-12" >
                    <p>{this.state.long_daypart_name}</p>
                    <div className="image-container">
                        <img className="image is-96x96" src={this.state.iconSrc} />
                    </div>
                     <p className="narrative">{this.state.narrative}</p>
            </div>  
        );

    }

}