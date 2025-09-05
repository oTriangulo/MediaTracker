import React, {useState, useEffect} from 'react';
import { View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { addItem, updateItem } from '../services/Storage';

export default function AddItemScreen({ route, navigation }) {
  const existing = route.params?.item;
  const [title, setTitle] = useState(existing?.title || '');

  useEffect(() => {
    navigation.setOptions({ title: existing ? 'Editar' : 'Adicionar' });
  }, []);

  async function save() {
    if (!title.trim()) { Alert.alert('Digite um título'); return; }
    if (existing) {
      await updateItem({ ...existing, title });
    } else {
      const item = { id: Date.now(), title, type: 'jogo', status: 'assistindo', createdAt: new Date().toISOString() };
      await addItem(item);
    }
    navigation.goBack();
  }

  return (
    <View style={{ padding: 16 }}>
      <TextInput label="Título" value={title} onChangeText={setTitle} />
      <Button title="Salvar" onPress={save} />
    </View>
  );
}
