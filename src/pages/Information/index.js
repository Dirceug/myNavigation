import React from 'react';
import { View, Text, Button } from 'react-native'

export default function Information({route, navigation}){
    return(
        <View style={{manginTop: 60}} >
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereço: {route.params?.endereco}</Text>
            <Text>Número: {route.params?.numero}</Text>
            <Text>Profissão: {route.params?.profissao}</Text>
            <Text>E-mail: {route.params?.email}</Text>
            <View style={{manginTop: 60}} >
            <Text onPress={() => navigation.navigate('Contacts')}
            >Voltar</Text>
            </View>
        </View>
    )
}