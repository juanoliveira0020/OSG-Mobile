import { Container, Logo, Title, Input, Button, ButtonText } from "./styles";

export default function Cadastro(){
    return(
        <Container>
            <Logo source={require('../../images/icon_OSG.jpg')}/>
            <Title>Faça seu Cadastro</Title>
            <Input 
            placeholder="Nome Completo"
            placeholderTextColor="#42A4C5"
            />
            <Input 
            placeholder="Email ou Telefone"
            placeholderTextColor="#42A4C5"
            />
            <Input 
            placeholder="Senha"
            placeholderTextColor="#42A4C5"
            />
            <Input 
            placeholder="Confirmar Senha"
            placeholderTextColor="#42A4C5"
            />
            <Button>
                <ButtonText>Enviar</ButtonText>
            </Button>
        </Container>
    );
}