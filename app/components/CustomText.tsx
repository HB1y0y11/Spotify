import { Text, TextStyle, StyleProp, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export function CustomText({ children, style, ...props }: CustomTextProps) {
  return (
    <Text style={[{ fontFamily: 'Gotham-Regular' }, style]} {...props}>
      {children}
    </Text>
  );
}