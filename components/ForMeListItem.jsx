import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from "react";
export const LIST_ITEM_HEIGHT = 54;

export default ForMeListItem = (item, isLast) => {

  const bottomRadius = isLast ? 8 : 0;
  let [switchValue, toggleSwitchValue] = useState(false)
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius
        }
      ]}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Switch value={switchValue} onValueChange={()=>toggleSwitchValue(prev=>!prev)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f4f4f6',
    height: LIST_ITEM_HEIGHT
  },
  name: {
    fontSize: 16
  },
  pointsContainer: {
    borderRadius: 8,
    backgroundColor: '#44c282',
    padding: 8
  },
  points: {
    color: 'white',
    fontWeight: 'bold'
  }
});

// const RadioButton = (props)=> {
//   return (
//       <View style={[{
//         height: 24,
//         width: 24,
//         borderRadius: 12,
//         borderWidth: 2,
//         borderColor: '#000',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }, props.style]}>
//         {
//           props.selected ?
//             <View style={{
//               height: 12,
//               width: 12,
//               borderRadius: 6,
//               backgroundColor: '#000',
//             }}/>
//             : null
//         }
//       </View>
//   );
// }
