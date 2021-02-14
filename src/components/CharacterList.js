import react, {Component} from 'react';
import Character from './Character'

export default class CharacterLis extends Component {

    constructor(){
        super()
        this.state = {
            loading: true, 
            characters: null,
        };
    }

    componentDidMount(){
        const fetchCharacterData = async () => {

            let character_array = []

            let url_array = ['https://swapi.py4e.com/api/people/1/',
            'https://swapi.py4e.com/api/people/2/', 
            'https://swapi.py4e.com/api/people/3/',
            'https://swapi.py4e.com/api/people/4/'];

            while(url_array.length > 0){
                let character_info = url_array[0];
                const response = await fetch(character_info);
                const character = await response.json();
                url_array.shift();
                character_array.push(character)
            }
            this.setState({
                characters: character_array,
                loading: false,
                }, () =>{
                console.log(this.state.characters)
            }, 
            )
        
        }

        fetchCharacterData()
    }

    flipRight = () => {
        let i = 5;
        let url = 'https://swapi.py4e.com/api/people/'
        url = url + `${i}/`
        let flipped = []
        let flip = this.state.characters.shift();
        flipped.push(flip)

       const fetchNewCharacter = async () => {
           const response = await fetch(url)
           const NewCharacter = await response.json();
           i += 1;
           console.log(NewCharacter)
           console.log('flipped:', flipped)
           return NewCharacter
       }


       this.setState({
           loading: true,
           characters: [...this.state.characters, fetchNewCharacter()],
           loading: false,
       })

       console.log(this.state.characters)
    }

    render(){
        return(
            <div> {this.state.loading ? <div>
                loading...
                </div> : 
                <div>
                    <button className="record-left"
                            onClick={this.flipLeft}
                    >
                        <img className="left-arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTSJEUQIoJafBK4YwpfgjYGw_cZZ5hcgsaQ&usqp=CAU" alt="left"></img>
                    </button>
                    <button className="record-right"
                            onClick={this.flipRight}
                    >
                        <img className="right-arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7e-AtMj1Iw-3kPrr-fDVXCe6__nfEZ5v5oA&usqp=CAU" alt="right"></img>
                    </button>
                    <div className='character-records'>
                        {this.state.characters.map((character, i) => {
                        return <Character 
                        name={this.state.characters[i].name}
                        height={this.state.characters[i].height}
                        birth_year={this.state.characters[i].birth_year}
                        gender={this.state.characters[i].gender}
                        id = {i}
                        />
                    })}
                        
                    </div>
                </div>
                }
            </div>
        )
    }
}