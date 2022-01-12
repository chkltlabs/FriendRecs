import React, {Component} from 'react';
import {Marker} from 'react-native-maps'

export default class FriendMarker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            friendMarkers: []
        }
    }

    async componentDidMount() {
        const axios = require('axios');
        const friendMarkers = await axios.get('https://www.erikgratz.com/api/friendRecs')
        this.setState({friendMarkers: friendMarkers.data})
    }

    render() {
        return (this.state.friendMarkers.map(function(friend, i) {
                    return <Marker coordinate={{latitude: friend.region.latitude, longitude: friend.region.longitude}}
                                   title={friend.name}
                                   pinColor={friend.color}
                                   key={friend.id}
                    />
                }

            )
        )
    }


}