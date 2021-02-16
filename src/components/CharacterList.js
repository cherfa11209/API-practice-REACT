import react, {Component} from 'react';
import Character from './Character'

export default class CharacterLis extends Component {

    constructor(){
        super()
        this.state = {
            loading: true, 
            characters: null,
            i: 5,
            j: 0,
            expand: false,
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
        let url = 'https://swapi.py4e.com/api/people/'
        url = url + `${this.state.i}/`
        this.state.characters.shift()

       const fetchNewCharacter = async () => {
           const response = await fetch(url)
           const NewCharacter = await response.json();
           console.log(NewCharacter)
           this.setState({
               loading: true,
               characters: [...this.state.characters, NewCharacter],
               i: this.state.i+1,
               j: this.state.j+1,
               loading: false,
           })
       }

       fetchNewCharacter()
    }

    flipLeft = () => {
        if(this.state.j > 0){
            let url = 'https://swapi.py4e.com/api/people/'
            url = url + `${this.state.j}/`
            this.state.characters.pop()
    
           const fetchNewCharacter = async () => {
               const response = await fetch(url)
               const NewCharacter = await response.json();
               this.state.characters.unshift(NewCharacter)
    
                this.setState({
                    loading: true,
                    i: this.state.i-1,
                    j: this.state.j-1,
                    loading: false,
                })
           }
    
           fetchNewCharacter()
        } 
        else{
            console.log('this is the first available record!')
        }
    }

    expand = () => {
        if(this.state.expand == false){
            this.setState({
                expand: true,
            })
        }
        else{
            this.setState({
                expand: false,
            })
        }
    }
    
    render(){
        return(
            <div> {this.state.loading ? <div>
                loading...
                </div> : 
                <div>
                    <div className='btn-container'>
                        <button className="record-left"
                                onClick={this.flipLeft}
                        >
                            <img className="left-arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTSJEUQIoJafBK4YwpfgjYGw_cZZ5hcgsaQ&usqp=CAU" alt="left"></img>
                        </button>
                        <button className="expand-btn" onClick={this.expand}>{this.state.expand? 'read less' : 'read more' }</button>
                        <button className="record-right"
                                onClick={this.flipRight}
                        >
                            <img className="right-arrow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7e-AtMj1Iw-3kPrr-fDVXCe6__nfEZ5v5oA&usqp=CAU" alt="right"></img>
                        </button>
                    </div>

                    <div className='character-records'>
                        {this.state.characters.map((character, i) => {
                        return <Character 
                        name={this.state.characters[i].name}
                        height={this.state.characters[i].height}
                        birth_year={this.state.characters[i].birth_year}
                        gender={this.state.characters[i].gender}
                        id = {i}
                        hair_color ={this.state.characters[i].hair_color}
                        eye_color={this.state.characters[i].eye_color}
                        skin_color={this.state.characters[i].skin_color}
                        mass={this.state.characters[i].mass}
                        className={this.state.expand? 'visible' : 'invisible'}
                        expand = {this.expand}
                        />
                        
                    })}
                      
                    </div>
                </div>
                }
            </div>
        )
    }
}