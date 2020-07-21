import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

const TodoItem = ({item, pressHandler})=>{
	return(
		<TouchableOpacity onPress={()=>pressHandler(item.key)} >
		<View style={styles.item}>
			<MaterialIcons 
			name="delete" 
			size={25} 
			color="#00bfff"
			/>
			<Text style={styles.itemText}>{item.text}</Text>
		</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item:{
		flexDirection: "row",
		padding:16,
		marginTop:16,
		borderColor: "#bbb",
		borderWidth:1,
		borderStyle: "dashed",
		borderRadius:10,
		borderColor: "#fff"
	},
	itemText:{
		marginLeft:25,
		fontSize:20,
		fontWeight: "bold",
		color: "#fff"
	}
});

export default TodoItem;