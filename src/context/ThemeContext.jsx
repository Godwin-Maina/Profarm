import React,{createContext,Component} from "react";

export const ThemeContext = createContext()

class ThemecontextProvider extends Component {
   //state to be shared to other components ...share the data to other components
    state = {  islightTheme:true,      //this is a property in boolean
        light:{syntax:'#555',ui:'#ddd',bg:'#eee'}, //this is an object light with three object and their properties
        dark:{syntax:'#ddd',ui:'#333',bg:'#555'}
    
    } 
    
    togglethemes=()=>{
        this.setState({islightTheme : !this.state.islightTheme});
    }
    render() { 
        return (

            <ThemeContext.Provider value={{...this.state,togglethemes:this.togglethemes}}>   
            {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemecontextProvider;