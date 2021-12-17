import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
    {
        image: require("../assets/images/blow-dry.png"),
        text: "Blow Dry"
    },
    {
        image: require("../assets/images/hair-accessories.png"),
        text: "Hair Accessories"
    },
    {
        image: require("../assets/images/hair-products.png"),
        text: "Hair Products"
    },
    {
        image: require("../assets/images/hair-styles.png"),
        text: "Hair Styles"
    },
    {
        image: require("../assets/images/salon.png"),
        text: "Salon"
    },
    {
        image: require("../assets/images/shampoo.png"),
        text: "Shampoo"
    },
];

export default function Categories() {
    return (
        <View style={{ 
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={ false }>
                {/* Create a loop */}
                {items.map((item, index) => (
                    <View  key={ index } style={{ alignItems: "center", marginRight: 30}}>
                        <Image source={item.image}
                        style={{ width: 50, height: 40, resizeMode: "contain"}} 
                        />
                        <Text
                        style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
