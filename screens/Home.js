import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

export default function home() {
    return (
        <SafeAreaView style = {{ backgroundColor: "#eee", flex: 1 }}>
            <View style = {{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    );
}
