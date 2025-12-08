import React from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import {
  Container,
  Header,
  Title,
  SearchArea,
  IconButton,
  MessageRequest,
  MessageRequestText,
  Divider,
  ChatItem,
  ChatInfo,
  ChatName,
  ChatMessage,
  ChatTime,
  BottomMenu,
  MenuButton,
  MenuText,
} from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function ChatList({ navigation }) {
  const chats = [
    {
      id: 1,
      name: "Menina coreana",
      time: "23:51",
      message: "Arigato",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Mc Lovin",
      time: "03:56",
      message: "Eu sou McLove",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "MC Pozinho",
      time: "13:53",
      message: "Tá Tega",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      id: 4,
      name: "Caiox",
      time: "00:08",
      message: "Slk Num Compensa",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ];

  return (
    <Container>
      {/* ===== HEADER ===== */}
      <Header>
        <IconButton onPress={() => navigation.openDrawer?.()}>
          <Ionicons name="menu" size={35} color="#B84EF2" />
        </IconButton>
        <SearchArea>
          <Ionicons name="search" size={18} color="#B84EF2" />
        </SearchArea>
        <IconButton onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="hand-left" size={24} color="#B84EF2" />
        </IconButton>
      </Header>

      <Title>OSG</Title>

      <MessageRequest onPress={() => navigation.navigate("SolicitacaoMensagens")}>
        <Ionicons name="mail-outline" size={22} color="#B84EF2" />
        <MessageRequestText>Solicitação de Mensagens</MessageRequestText>
      </MessageRequest>

      <Divider />

      {/* ===== LISTA DE CHATS ===== */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SolicitacaoMensagens", { chatName: item.name })}
          >
            <ChatItem>
              <Image
                source={{ uri: item.avatar }}
                style={{ width: 45, height: 45, borderRadius: 25, marginRight: 12 }}
              />
              <ChatInfo>
                <ChatName>{item.name}</ChatName>
                <ChatTime>{item.time}</ChatTime>
                <ChatMessage>{item.message}</ChatMessage>
              </ChatInfo>
            </ChatItem>
          </TouchableOpacity>
        )}
      />

      {/* ===== MENU INFERIOR ===== */}
      <BottomMenu>
        <MenuButton onPress={() => navigation.navigate("Menu")}>
          <Ionicons name="home-outline" size={20} color="#fff" />
          <MenuText>Home</MenuText>
        </MenuButton>

        <MenuButton onPress={() => navigation.navigate("Game")}>
          <Ionicons name="game-controller-outline" size={20} color="#fff" />
          <MenuText>Game</MenuText>
        </MenuButton>

        <MenuButton active>
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
