import React from 'react';
import Forecast from './forecast';
import Waiting from './waiting';
import Loading from './loading';
import Error from './error';


export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            location: '',
            updated: '',
            forecasts: [],
            status: 'waiting'
        };

    }

    componentDidMount(){

        var geoOptions = {
            maximumAge: 5 * 60 * 1000,
            timeout: 10 * 1000
        }


        navigator.geolocation.getCurrentPosition( (position) => {

               this.setState({
                   status: 'loading'
               }); 
                this._load(position.coords.longitude, position.coords.latitude);
        }, 
        (error) => { 
            console.error(error);
            this.setState({
                status: 'no location'
            });
        },
        geoOptions
        );

        


    }


    _load(lon, lat){

        let headers = new Headers();
        headers.append('Content-type', 'Application/json');
        headers.append('Accept', 'Application/json');

        let body = {
            'lat': lat,
            'lon': lon
        };

        let options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        };


        fetch('https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/93571de8f6a3dbf9e3392e707d43ad4ce609b0dc038a977c920a2df4faa5bb5d/weather/forecast', options).then(
            (response) => { 
                return response.json();
             },
            (err) => { return Promise.reject(err); }
        ).then( 
            (data) => {         
                let updated = new Date();
                updated.setUTCMilliseconds(data.updated);
                this.setState( (previousState) => {
                    return {
                        location: data.location,
                        updated: updated.toString(),
                        forecasts: data.body.forecasts,
                        status: 'done'
                    };
                });
             },
            (err) => { console.error(err); }
        );

    }

    render(){

        if (this.state.status === 'waiting'){
             return (<Waiting />);
        }

        if (this.state.status === 'loading'){
            return (<Loading />);
        }

        if (this.state.status === 'no location'){
            return (<Error />);
        }    

       
        const forecasts = this.state.forecasts.map( (forecast, index) => (
            <Forecast key={index} data={forecast} />
        ));

        return (
            <div className="content has-text-centered">
                <h1>{this.state.location}</h1>
                {/*<p>{this.state.updated}</p>*/}
                {forecasts}
            </div>
        );
    }
}