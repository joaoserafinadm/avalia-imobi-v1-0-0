
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
    link: string;
}


export const RecoverPasswordEmail: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    link
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
                            src='https://res.cloudinary.com/dywdcjj76/image/upload/v1694998829/AVALIA%20IMOBI/LOGOS/LOGO_02_wkzqga.png'
                            className="my-0 mx-auto"
                        />
                    </Section>
                    <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
                        Olá {firstName},
                    </Heading>
                    <Text className="text-black text-[16px] leading-[24px]">
                        Recebemos uma solicitação para redefinir sua senha da Plataforma Avalia Imobi! <br />
                        Para prosseguir, clique no link abaixo:
                    </Text>
                    <Section className="text-center mt-[32px] mb-[32px]">
                        <Button href={link}
                            pX={20}
                            pY={12}
                            className="bg-[#f5874f] rounded text-white text-[20px] font-semibold no-underline text-center"
                        >
                            Alterar senha
                        </Button>
                    </Section>
                    <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    <Text className="text-[#666666] text-[14px] leading-[24px]">
                        Esse link é válido por 60 minutos a partir do recebimento. Após esse período, solicite uma nova redefinição de senha.

                    </Text>
                    <Text className="text-[#666666] text-[12px] leading-[24px]">
                        ©2023 Avalia Imobi <br />
                        Rua Silveira Martins, 345, Erechim, 99700-092,Rio Grande do Sul,  Brasil  <br />
                    </Text>
                </Container>
            </Body>
        </Tailwind>
    </Html>

);

















