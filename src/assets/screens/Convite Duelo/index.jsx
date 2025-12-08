import React from "react";
import { TouchableOpacity } from "react-native";
import { 
  Container, 
  Card, 
  BackButton, 
  BackIcon, 
  PlayerRow, 
  Avatar, 
  PlayerName, 
  Divider, 
  InviteText, 
  SwordImage 
} from "./styles";

export default function ConviteDuelo({ navigation }) {
  return (
    <Container>

      <Card>

        {/* VOLTAR */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton>
            <BackIcon source={require("../../images/back.jpg")} />
          </BackButton>
        </TouchableOpacity>

        {/* LISTA DE PLAYERS */}
        {["Makauli", "Caiox", "Natalie", "McLove", "Mc Pozinho", "Reboco"].map((player, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate("DueloAmigo")}>
            <PlayerRow>
              <Avatar source={require("../../images/icon_OSG.jpg")} />
              <PlayerName>{player}</PlayerName>
            </PlayerRow>
          </TouchableOpacity>
        ))}

        <Divider />

        <InviteText>Chame seus Amigos{"\n"}para Duelar!</InviteText>

        <SwordImage source={require("../../images/espada.jpg")} />

      </Card>

    </Container>
  );
}
