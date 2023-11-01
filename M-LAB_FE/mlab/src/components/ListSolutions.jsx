import React, {Component} from 'react';
import SolutionService from "../services/SolutionService";

class ListSolutions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            solutions: []
        }
    }

    componentDidMount() {
        SolutionService.getSolutions().then((res) => {
            this.setState({solutions: res.data});
        });
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ListSolutions;