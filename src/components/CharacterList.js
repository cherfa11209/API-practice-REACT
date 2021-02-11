import react, {Component} from 'react';
import Character from './Character'

export default class CharacterLis extends Component {

    constructor(){
        super()
        this.state = {
            loading: true, 
            characters: null,
        }

      const urls = ['https://swapi.py4e.com/api/people/1/',
     'https://swapi.py4e.com/api/people/2/', 
     'https://swapi.py4e.com/api/people/3/',
     'https://swapi.py4e.com/api/people/4/']
        
     async function fetchAll() {
        const characters = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
        return characters

    
    }
    newState = this.fetchAll()

    }

     makeThisShitWork = () => {
        this.setState({
            characters: fetchAll(),
        })
    } 



   

    render(){
        return(
            <div> {this.state.loading ? <div>
                loading...
                <button onClick = {this.makeThisShitWork}>click to render</button>
                </div> : 
                <div>
                  
                </div>
                }
            </div>
        )
    }
}