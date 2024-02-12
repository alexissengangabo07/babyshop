import { StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { FontAwesome } from '@expo/vector-icons'

const UserLogin = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>Connectez-vous</Text>
            <Text style={styles.textDetail}>Completer ces champs pour vous connecter</Text>
            <View style={styles.formContainer}></View>
            <Text style={styles.label}>Username</Text>
            <View style={styles.searchSection}>
                <FontAwesome style={styles.icon} name="user" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le nom d'utilisateur"
                    underlineColorAndroid="transparent"
                />
            </View>
            <Text style={styles.label}>Mot de passe</Text>
            <View style={styles.searchSection}>
                <FontAwesome style={styles.icon} name="lock" size={20} color="gray" />
                <TextInput
                    style={styles.input}
                    placeholder="Entrer le mot de passe"
                    underlineColorAndroid="transparent"
                />
            </View>
            <TouchableOpacity style={styles.loginPtn}>
                <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.alreadyAccount}>N'avez-vous pas de compte ?
                <TouchableOpacity>
                    <Text style={styles.alreadyLink}> Créer un compte</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default UserLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginTitle: {
        fontSize: 26,
        fontWeight: '600'
    },
    textDetail: {
        fontSize: 16,
        fontWeight: '300',
        color: '#9D9D9D'
    },
    formContainer: {
        marginTop: 20,
    },
    label: {
        fontWeight: '500',
        fontSize: 16,
        marginTop: 10,
        marginBottom: 5
    },
    loginPtn: {
        // backgroundColor: '#AC61F2',
        backgroundColor: 'darkorange',
        padding: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 20
    },
    alreadyAccount: {
        marginTop: 7,
    },
    alreadyLink: {
        color: '#AC61F2',
        textDecorationLine: 'underline'
    },
    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        // borderBottomWidth: 2,
        borderColor: 'gray',
        borderRadius: 4
    },
    icon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    }
})