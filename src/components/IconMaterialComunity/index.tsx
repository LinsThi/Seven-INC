import React, { ComponentProps } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface IconProps {
  name: ComponentProps<typeof MaterialCommunityIcons>['name'];
  color: string;
  size: number;
}

const IconMaterialComunity: React.FC<IconProps> = ({ name, color, size }) => {
  const iconProps = { name, color, size };

  return <MaterialCommunityIcons {...iconProps} />;
};

export default IconMaterialComunity;
