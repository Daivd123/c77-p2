import React, {Component} from "react";
import {Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return(
            <View style={StyleSheet.container}>
                <SafeAreaView style={StyleSheet.droidSafeArea} />
                <ImageBackground source={requestAnimationFrame('../assets/bg.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker App</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("Isslocation")
                    }>
                        <Text style={styles.routeText}>ISS Location</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={requestAnimationFrame("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress = {() =>
                    this.props.navigation.navigate("Meteors")}>

                        <Text style={styles.routeText}>Meteors</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={requestAnimationFrame("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS ==="android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'light blue'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
        titleText: {
            fontSize: 40,
            fontWeight: "bold",
            color: "Black",
        },
        routeText: {
            fontSize: 35,
            fontWeight: "bold",
            color:"black",
            marginTop: 75,
            paddingLeft: 30
        },
        knowMore: {
            paddingLeft:30,
            color: "red",
            fontSize: 15
        },
        bgDigit: {
            position: "absolute",
            color: "rgba(183, 183, 183, 0.5)",
            dontSize: 150,
            right: 20,
            bottom: -15,
            zIndex: -1
        },
        IconImage: {
            position: "absolute",
            height: 200,
            width:200,
            resizeMode: "contain",
            right: 20,
            top: -80
        }

    
});