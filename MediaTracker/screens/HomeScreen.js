import React, { use } from 'react';
import { View, Text } from 'react-native';
import { loadItems } from '../services/Storage';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
    useEffect(() => {
        async function fetchData() {
            const items = await loadItems();
            console.log(items);
        }
        fetchData();
    } , []);
 
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
}

// useeffect to load items from storage and display them in a list
