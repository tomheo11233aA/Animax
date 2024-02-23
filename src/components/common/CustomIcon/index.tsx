import React from 'react';
import { useAppSelector } from '@hooks/redux';
import { themeUserSelector } from '@redux/selector/appSelector';
import IonIcon from 'react-native-vector-icons/Ionicons';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
}

const CustomIcon: React.FC<IconProps> = ({ name, size = 20, color }) => {
    const themeUser = useAppSelector(themeUserSelector);
    const iconColor = color || (themeUser === 'dark' ? 'white' : 'black');

    return <IonIcon name={name} size={size} color={iconColor} />;
};

export default CustomIcon;