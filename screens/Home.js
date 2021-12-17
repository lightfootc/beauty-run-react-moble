import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import StoreItems, { localSalons } from '../components/StoreItems';

export default function home() {
    const [salonData, setSalonData] = React.useState(localSalons)
    return (
        <SafeAreaView style = {{ backgroundColor: "#eee", flex: 1 }}>
            <View style = {{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={ false }>
                <Categories />
                <StoreItems salonData={salonData} />
            </ScrollView>
        </SafeAreaView>
    );
}
