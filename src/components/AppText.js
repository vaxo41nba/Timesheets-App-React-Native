import React from 'react';
import { Text } from 'react-native';

export default function AppText({
  children, style, medium, ...props
}) {
  return (
    <Text
      style={[
        style,
        {
          fontFamily: medium
            ? 'MontserratAlternates_Medium'
            : 'MontserratAlternates_Regular',
        },
      ]}
      {...props}
    >
      {children}
    </Text>
  );
}
