import React from 'react';
import {Text,View,StyleSheet,Image,Linking} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from './Button';

const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url} = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnail} source={{uri:thumbnail_image}}/>
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.image} source={{uri:image}}/>
            </CardSection>
            <CardSection>
                <Button whenPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around',
    },
    headerText:{
        fontSize:18,
    },
    thumbnail:{
        height:50,
        width:50,
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },  
    image:{
        height:300,
        flex:1,
        width:null,
    }
});

export default AlbumDetail;