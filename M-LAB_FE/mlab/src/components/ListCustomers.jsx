import React, {Component} from 'react';
import CustomerService from "../services/CustomerService";

class ListCustomers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        }
    }
    componentDidMount() {
        CustomerService.getCustomers().then((res) => {
            this.setState({customers: res.data});
        });
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }cl
}

export default ListCustomers;