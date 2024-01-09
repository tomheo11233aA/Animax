import React from 'react';
import { StyleSheet, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import { colors } from '@themes/colors';
import { fonts } from '@themes/fonts';
import { Text } from 'react-native-paper';

interface CardInputProps {
    placeholder: string;
    onChangeText: (value: string) => void;
    icon?: any;
    maxLength?: number;
    value?: string;
}

const CardInput: React.FC<CardInputProps> = ({
    placeholder,
    onChangeText,
    icon,
    maxLength,
    value,
}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputHeader}>
            <Text style={styles.headerText}>Fill Your Profile</Text>
            </View>
        <View style={styles.avatarContainer}>
                <Image
                source={{ uri: '' }}
                style={styles.avatar}
                />
                <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>+</Text>
                </TouchableOpacity>
        </View>
        <TextInput
        placeholder="Full Name"
        style={styles.input}
      />
      <TextInput
        placeholder="Nickname"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
      />
      <TextInput
        placeholder="Gender"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Skip"
          onPress={() => console.log('Skip Pressed')}
        />
        <Button
          title="Continue"
          onPress={() => console.log('Continue Pressed')}
          color="#5cb85c"
        />
      </View>
    </View>
    );
};

export default CardInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        paddingHorizontal: 10,
        marginTop: 10,
        zIndex: -1,
    },
    inputHeader: {

    },
    headerText:{

    },
    avatarContainer:{

    },
    avatar:{

    },
    editButton:{

    },
    editButtonText:{

    },
    input:{

    },
    buttonContainer:{

    },
});
