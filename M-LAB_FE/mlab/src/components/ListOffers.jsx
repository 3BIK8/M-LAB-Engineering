import React, {Component} from 'react';
import OfferService from "../services/OfferService";

class ListOffers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offers: []
        }
    }
    componentDidMount() {
        OfferService.getOffers().then((res) => {
           this.setState({offers: res.data});
        });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ListOffers;