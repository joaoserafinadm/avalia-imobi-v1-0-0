
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    password: string;
}


export const newUserEmail: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    password
}) => (
    <Html>
        <Head />
        <Preview>{firstName}</Preview>
        <Tailwind>
            <Body className="bg-white my-auto mx-auto font-sans">
                <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                    <Section className="mt-[25px]">
                        <Img
                            height="80"
                            alt="Avalia Imboi"
                            src='https://res.cloudinary.com/joaoserafinadm/image/upload/v1694998829/AVALIA%20IMOBI/LOGOS/LOGO_02_wkzqga.png'
                            className="my-0 mx-auto"
                        />
                    </Section>
                    <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                        Bem vindo ao <strong>Avalia Imobi</strong>!
                    </Heading>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Olá <strong>{firstName}</strong>,
                    </Text>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Seja bem-vindo ao Avalia imobi!
                    </Text>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Para começar, enviamos uma senha provisória para garantir que você tenha acesso rápido e seguro à sua conta.
                    </Text>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Aqui estão os detalhes da sua conta:
                    </Text>
                    <Text className="text-black text-[16px] leading-[24px]">
                        E-mail:
                        <Button
                            className="bg-[#f5874f] mx-[10px] py-[10px] px-[12px] rounded text-white text-[16px] font-semibold no-underline text-center"
                        >
                            {email}
                        </Button>
                    </Text>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Senha:
                        <Button
                            className="bg-[#f5874f] mx-[10px] py-[10px] px-[12px] rounded text-white text-[16px] font-semibold no-underline text-center"
                        >
                            {password}
                        </Button>
                    </Text>
                    {/* <Section className="text-center mt-[32px] mb-[32px]">
                        <Button
                            pX={20}
                            pY={12}
                            className="bg-[#f5874f] rounded text-white text-[24px] font-semibold no-underline text-center"
                        >
                            {email} {password}
                        </Button>
                    </Section> */}
                    <Text className="text-black text-[16px] leading-[24px]">
                        Por favor, faça login na sua conta usando essas credenciais. Assim que entrar, recomendamos que altere sua senha para uma de sua escolha para garantir a segurança da sua conta.
                    </Text>

                    <Text className="text-black text-[16px] leading-[24px]">
                        Clique no botão abaixo para acessar a plataforma.
                    </Text>
                    <Section className="text-center mt-[32px] mb-[32px]">
                        <Button href='https://app.avaliaimobi.com.br'
                            // pX={20}
                            // pY={12}
                            className="bg-[#f5874f] rounded text-[24px] py-[12px] px-[20px] font-semibold no-underline text-center"
                        >
                            Acessar a Plataforma
                        </Button>
                    </Section>
                    <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                        ©2023 Avalia Imobi <br />
                        Rua Silveira Martins, 345, Erechim, 99700-092,Rio Grande do Sul,  Brasil  <br />
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>

);

















