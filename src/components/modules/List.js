import React from 'react';
import { FlatList } from 'react-native';
import Touchable from './Touchable';

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
};

export default (List = ({
  data = null,
  keyExtractor = item => String(item.id),
  renderItem = item => null,
  onPressItem,
  disabled,
  showsHorizontalScrollIndicator = false,
  showsVerticalScrollIndicator = false,
  style,
  ...props
}) => (
  <FlatList
    data={data}
    keyExtractor={keyExtractor}
    renderItem={({ item }) => {
      const itemElement = renderItem({ item });
      return onPressItem ? (
        <Touchable onPress={() => onPressItem({ item })} disabled={disabled}>
          {itemElement}
        </Touchable>
      ) : (
        itemElement
      );
    }}
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    removeClippedSubviews={false}
    style={[styles.container, style]}
    {...props}
  />
));
