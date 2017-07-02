import React from 'react';
import Weather from './weather'

export default class Forecast extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: props.data
        };
    }



    render (){
       
        return (
            <div className="columns" >
                 {/*{JSON.stringify(this.state)}*/}
                {this.state.data.day && 
                <Weather narrative={this.state.data.day.narrative} icon_code={this.state.data.day.icon_code} long_daypart_name={this.state.data.day.long_daypart_name} /> 
                }

                {this.state.data.night && 
                <Weather narrative={this.state.data.night.narrative} icon_code={this.state.data.night.icon_code} long_daypart_name={this.state.data.night.long_daypart_name} />           
                }
            </div>
        );
    }

}