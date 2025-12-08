import React from "react";
import {
  Container,
  Header,
  Logo,
  HeaderCenterIcon,
  BackButton,
  BackText,
  Banner,
  BannerImage,
  BannerTitle,
  BannerIcon,
  OptionButton,
  OptionText,
  OptionIcon
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function FiltroQuimica() {
  return (
    <Container>

      {/* HEADER */}
      <Header>
        <Logo source={require("../../images/libras.jpg")} />

        <HeaderCenterIcon
          source={require("../../images/icon_OSG.jpg")}
        />

        <BackButton>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* BANNER */}
      <Banner>
        <BannerTitle>Quimíca</BannerTitle>
      </Banner>

      {/* LISTA */}
      <OptionButton>
        <OptionText>Química Orgânica</OptionText>
        <Ionicons name="flask-outline" size={35} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Inorgânica</OptionText>
        <Ionicons name="eyedrop-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Físico-Química</OptionText>
        <Ionicons name="git-branch-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Analítica</OptionText>
        <Ionicons name="clipboard-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Forense</OptionText>
        <Ionicons name="finger-print-outline" size={40} color="#000" />
      </OptionButton>

      <OptionButton>
        <OptionText>Química Ambiental</OptionText>
        <Ionicons name="leaf-outline" size={40} color="#000" />
      </OptionButton>

    </Container>
  );
}
