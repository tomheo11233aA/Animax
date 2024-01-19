import React, { memo, useState } from 'react'
import { Portal, Modal, List } from 'react-native-paper';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors } from '@themes/colors';
interface Props {
    isVisible: boolean;
    onClose: () => void;
    onSpeedChange: (speed: number) => void;
    currentSpeed: number;
}

const ModalSpeed: React.FC<Props> = ({ isVisible, onClose, onSpeedChange, currentSpeed }) => {
    const speeds = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
    const { t } = useTranslation();
    return (
        <Portal>
            <Modal
                visible={isVisible}
                onDismiss={onClose}
                contentContainerStyle={{
                    backgroundColor: '#424242',
                    padding: 20,
                    borderRadius: 5,
                    width: '50%',
                    height: '80%',
                }}
                style={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={speeds}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item: speed }) => {
                        const isSelected = speed === currentSpeed;
                        return (
                            <List.Item
                                title={`${speed === 1 ? speed.toFixed(0) + 'x ' + t('(Normal)') : speed + `x`}`}
                                onPress={() => {
                                    onSpeedChange(speed);
                                    onClose();
                                }}
                                titleStyle={{
                                    color: isSelected ? colors.mainColor : '#fff',
                                }}
                                style={{
                                    backgroundColor: isSelected ? '#616161' : 'transparent',
                                    borderRadius: 5,
                                }}
                            />
                        );
                    }}
                />
            </Modal>
        </Portal>
    )
}

export default memo(ModalSpeed)
