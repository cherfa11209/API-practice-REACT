import react, {Component} from 'react';

export default class CharacterLis extends Component {

    constructor(){
        super()
        this.state = {
            loading: true, 
            characters: null,
        }
    }

    async componentDidMount() {
        const url= 'https://swapi.py4e.com/api/people/1/'
        const response = await fetch(url)
        const character = await response.json()
        const name = await character.name
        this.setState({ 
            loading: false,
            person: name,
        })
    }


    render(){
        return(
            <div> 
                {this.state.loading ? <div> Loading... </div> : <div>{this.state.person}</div>}
            </div>
        )
    }
}