import React, {Component} from 'react';
import {Marker} from 'react-native-maps'

export default class RecMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recs: []
        }
    }

    async componentDidMount() {
        const axios = require('axios');
        const friendMarkers = await axios.get('https://www.erikgratz.com/api/friendRecs')
        const self = this
        friendMarkers.data.forEach(function (friend) {
            let recos = friend.recommendations.map(function(rec){
                rec.color = friend.color
                return rec
            })
            self.setState({recs: [...self.state.recs, ...recos]})

        })
    }
    render() {
        return this.state.recs.map(function (rec, i) {
            return <Marker coordinate={{latitude: rec.region.latitude, longitude: rec.region.longitude}}
                           title={rec.review_title}
                           pinColor={rec.color}
                           key={rec.friend_id + 'rec' + rec.id}
                           opacity={0.7}
            />
        })


    }


}