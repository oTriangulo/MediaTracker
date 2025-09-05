import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = '@minha_lista';

export async function loadItems() {
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}
export async function saveItems(items) {
  await AsyncStorage.setItem(KEY, JSON.stringify(items));
}
export async function addItem(item) {
  const items = await loadItems();
  items.unshift(item);
  await saveItems(items);
  return items;
}
export async function updateItem(updated) {
  const items = await loadItems();
  const out = items.map(i => (i.id === updated.id ? updated : i));
  await saveItems(out);
  return out;
}
export async function deleteItem(id) {
  const items = await loadItems();
  const out = items.filter(i => i.id !== id);
  await saveItems(out);
  return out;
}
