import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";

export default function Login({ navigation }) {
    return (
        <Container>
            <Logo source={require("../../images/icon_OSG.jpg")} />
            <Title>Faça Login</Title>

            <Input 
                placeholder="Email ou Telefone"
                placeholderTextColor="#42A4C5"
            />

            <Input 
                placeholder="Senha"
                placeholderTextColor="#42A4C5"
            />

            <Button onPress={() => navigation.navigate("Menu")}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
}
