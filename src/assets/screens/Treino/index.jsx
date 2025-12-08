import React, { useState } from "react";
import {
  Container,
  Header,
  MenuButton,
  MenuIcon,
  Title,
  BackButton,
  BackText,
  QuestionCard,
  QuestionIcon,
  QuestionTitle,
  QuestionText,
  ChatArea,
  MessageRow,
  Avatar,
  MessageBubble,
  MessageText,
  LifeBox,
  LifeNumber,
  LifeLabel,
  LifeBar,
  LifeSegment,
  InputArea,
  SendButton,
  AddButton,
  BottomMenu,
  MenuText,
  Input,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function DueloAmigo({ navigation }) {

  // 🔥 Estado para armazenar mensagens
  const [newMessage, setNewMessage] = useState("");

  // 🔥 Enviar mensagem
  const handleSend = () => {
    if (newMessage.trim() === "") return;
    console.log("Enviou:", newMessage);
    setNewMessage("");
  };

  return (
    <Container>

      {/* ======= HEADER ======= */}
      <Header>
        {/* MENU → abre tela Menu */}
        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <MenuIcon source={require("../../images/menu.jpg")} />
        </MenuButton>

        <Title>OSG</Title>

        {/* VOLTAR */}
        <BackButton onPress={() => navigation.goBack()}>
          <BackText>Voltar</BackText>
        </BackButton>
      </Header>

      {/* ======= CARD DE PERGUNTA ======= */}
      <QuestionCard>
        <QuestionIcon source={require("../../images/espada.jpg")} />

        <QuestionTitle>Responda!</QuestionTitle>

        <QuestionText>
          Liste 3 momentos importantes da era do renascimento
        </QuestionText>
      </QuestionCard>

      {/* ======= CHAT ======= */}
      <ChatArea>

        {/* Exemplo: sua mensagem */}
        <MessageRow style={{ justifyContent: "flex-end" }}>
          <MessageBubble style={{ backgroundColor: "#6A3BA7" }}>
            <MessageText>Mensagem sua aqui...</MessageText>
          </MessageBubble>

          <Avatar source={require("../../images/profile_photo.jpg")} />
        </MessageRow>

      </ChatArea>

      {/* ======= VIDA ======= */}
      <LifeBox>
        <LifeNumber>5</LifeNumber>
        <LifeLabel>pontos de vida restantes</LifeLabel>
      </LifeBox>

      <LifeBar>
        <LifeSegment />
        <LifeSegment />
        <LifeSegment />
        <LifeSegment />
        <LifeSegment />
      </LifeBar>

      {/* ======= INPUT ======= */}
      <InputArea>
        <AddButton>
          <Title style={{ color: "#fff", fontSize: 22 }}>+</Title>
        </AddButton>

        <Input
          placeholder="Digite aqui!"
          placeholderTextColor="#DCDCDC"
          value={newMessage}
          onChangeText={setNewMessage}
        />

        <SendButton onPress={handleSend}>
          <Title style={{ color: "#fff", fontSize: 20 }}>➤</Title>
        </SendButton>
      </InputArea>

      {/* ======= MENU INFERIOR ======= */}
      <BottomMenu>

        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("ChatList")}>
          <Ionicons name="chatbubble-ellipses" size={22} color="#fff" />
          <MenuText>Grupos</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("FiltroEstudo")}>
          <Ionicons name="book-outline" size={20} color="#fff" />
          <MenuText>Matérias</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person-outline" size={20} color="#fff" />
          <MenuText>Perfil</MenuText>
        </MenuButton>

      </BottomMenu>

    </Container>
  );
}
