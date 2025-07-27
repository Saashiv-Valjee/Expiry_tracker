import { Ionicons } from '@expo/vector-icons'; // for icons
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [items, setItems] = useState([
    { id: '1', name: 'Milk', expiry: '2025-08-01' },
    { id: '2', name: 'Leftover pasta', expiry: '2025-07-29' },
  ]);

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Ionicons name="cube-outline" size={32} color="#888" style={styles.icon} />
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.expiryText}>Expires: {item.expiry}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧊 Expiry Tracker</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {/* Floating action button */}
      <TouchableOpacity style={styles.fab} onPress={() => {}}>
        <Ionicons name="mic" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
    paddingHorizontal: 20,
    backgroundColor: '#784bff82',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#784bffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    marginRight: 16,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffffff',
  },
  expiryText: {
    fontSize: 14,
    color: '#ffffffff',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
});
