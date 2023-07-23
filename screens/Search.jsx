 import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
 import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles/search.style';
import { Feather, Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';
 
 const Search = () => {
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.searchContainer}>
         <TouchableOpacity>
           <Feather name="search" size={24} style={styles.searchIcon} />
         </TouchableOpacity>
         <View style={styles.searchWrapper}>
           <TextInput
             value=""
             placeholder="Search Furniture"
             style={styles.searchInput}
             onPressIn={() => {}}
           />
         </View>
         <View>
           <TouchableOpacity style={styles.searchBtn}>
             <Ionicons
               name="camera-outline"
               size={SIZES.xLarge}
               color={COLORS.white}
             />
           </TouchableOpacity>
         </View>
       </View>
     </SafeAreaView>
   );
 }
 
 export default Search
 
