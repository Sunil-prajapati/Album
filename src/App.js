import React,{Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from './components/common/header';
import axios from 'axios';
import AlbumDetail from './components/common/AlbumDetails';

class App extends Component{
    state = {albums:[]};
    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums:response.data}));
    }

    renderAlubms(){
       return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
    }
    render(){
        return(
            <ScrollView style={styles.parent}>
                <Header headerText={'Albums'}/> 
                {this.renderAlubms()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    parent:{
        flex:1,
    }
})
export default App;