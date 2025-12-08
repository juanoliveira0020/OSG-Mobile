import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  LeftHeader,
  Logo,
  BackButton,
  BackText,
  Title,
  Card,
  CardIcon,
  CardText
} from "./styles";

export default function FiltroRanking({ navigation }) {
  return (
    <Container>

      {/* ===== HEADER ===== */}
      <Header>
        <LeftHeader>
          <Image
            source={require("../../images/libras.jpg")}
            style={{ width: 40, height: 40 }}
          />

          <Logo source={require("../../images/icon_OSG.jpg")} />
        </LeftHeader>

        {/* VOLTAR */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton>
            <BackText>Voltar</BackText>
          </BackButton>
        </TouchableOpacity>
      </Header>

      <Title>Tipos de Ranking</Title>

      {/* ===== CARDS DE RANKING ===== */}
      <TouchableOpacity onPress={() => navigation.navigate("RankRegional")}>
        <Card>
          <CardIcon source={require("../../images/rank-regional.jpg")} />
          <CardText>Regional</CardText>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RankAmigos")}>
        <Card>
          <CardIcon source={require("../../images/rank-friends.jpg")} />
          <CardText>Entre amigos</CardText>
        </Card>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("RankGlobal")}>
        <Card>
          <CardIcon source={require("../../images/rank-global.jpg")} />
          <CardText>Global</CardText>
        </Card>
      </TouchableOpacity>

    </Container>
  );
}
