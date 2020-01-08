import { StyleSheet, Text, View, Switch } from 'react-native';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedCategories } from '../../actions';

export const LIST_ITEM_HEIGHT = 54;

export const ForMeListItem = ({ name, isLast, setSelectedCategories, selectedCategories }) => {
  const bottomRadius = isLast ? 8 : 0;
  const [switchValue, toggleSwitchValue] = useState(selectedCategories.includes(name));

  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
      <Switch
        value={switchValue}
        onValueChange={() => {
          toggleSwitchValue((prev) => !prev);
          setSelectedCategories(name);
        }}
      />
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
    borderColor: '#f4f4f6',
    height: LIST_ITEM_HEIGHT,
    width: '100%',
    marginBottom: 4,
    marginTop: 4,
    borderRadius: 2,
  },
  name: {
    fontSize: 18,
  },
  pointsContainer: {
    borderRadius: 8,
    backgroundColor: '#44c282',
    padding: 8,
  },
  points: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const mapStateToProps = (state) => ({
  selectedCategories: state.selectedCategories,
});

export const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setSelectedCategories,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ForMeListItem);
