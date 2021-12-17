import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Hard Coded Data for Testing
export const localSalons = [
    {
        name: "Ulta",
        image_url: require("../assets/images/ulta.jpg"),
        categories: ["Hair Styles", "Hair Products"],
        price: "$$",
        reviews: 1244,
        rating: 4.5
    },
    {
        name: "Sephora",
        image_url: require("../assets/images/sephora.jpg"),
        categories: ["Hair Styles", "Hair Products"],
        price: "$$$",
        reviews: 3044,
        rating: 4.8
    },
    {
        name: "Sally's",
        image_url: require("../assets/images/sally.jpg"),
        categories: ["Hair Styles", "Hair Products"],
        price: "$$$",
        reviews: 2174,
        rating: 3.8
    },
];

export default function StoreItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30}}>
            {props.salonData.map((salon, index) => (
                <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white"}}>
                    {/* Salon Image */}
                    <StoreImage image={salon.image_url}/>
                    {/* Salon Info */}
                    <StoreInfo name={salon.name} rating={salon.rating} />
                </View>
            ))}
        </TouchableOpacity>
    );
}

const StoreImage = (props) => (
    <>
        <Image source={ props.image }
        style={{ width: "100%", height: 180 }} 
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const StoreInfo = (props) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: "gray" }}>30 - 45 * min</Text>
        </View>
        <View 
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15
            }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);