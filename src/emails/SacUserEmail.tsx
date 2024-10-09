import {Body, Container, Column, Head, Hr, Html, Preview, Row, Text, Font} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface SacMailAkvo {
	username?: string;
	userEmail?: string;
    companyName?: string;
	messageType?: string;
	messageBody?: string;
}

export default function SacUserEmail({
	username,
	userEmail,
    companyName,
	messageType,
	messageBody,
}: SacMailAkvo) {
	const previewText = `SAC Plataforma AKVO`;

	return (
		<Html>
			<Head>
				<Font
					fontFamily="Montserrat"
					fallbackFontFamily="Verdana"
					webFont={{
						url: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
						format: "woff2",
					}}
					fontWeight={400}
					fontStyle="normal"
				/>
			</Head>
			<Preview>{previewText}</Preview>
			<Tailwind>
				<Body className="bg-white my-auto mx-auto font-sans px-2">
					<Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[800px]">
						{/* <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/static/vercel-logo.png`}
                width="40"
                height="37"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section> */}
						<Text>
							<h1 className="text-center">SAC Avalia Imobi</h1>
							<h4 className="text-center">
								Um usuário enviou uma mensagem via SAC!
							</h4>
						</Text>
						<Row className="my-[30px] mx-0 border border-solid border-[#eaeaea] rounded p-[20px] w-full text-center">
							<Column>
								<p className="leading-[30px]">
									<strong>Usuário:</strong>
									<br />
									{username}
								</p>
							</Column>
							<Column>
								<p className="leading-[30px]">
									<strong>E-mail:</strong>
									<br />
									{userEmail}
								</p>
							</Column>
							<Column>
								<p className="leading-[30px]">
									<strong>Empresa:</strong>
									<br />
									{companyName}
								</p>
							</Column>
							
						</Row>
						<Text className="text-black text-[14px] leading-[24px]">
							<p className="leading-[30px]">
								<strong>Tipo de Mensagem:</strong> <span className={messageType === "error" ? "text-red-500" : "text-dark-500"}> {verifyTypeOfMessage(messageType ?? "outro")}</span>
							</p>
						</Text>

						<Hr className="my-[30px] mx-0"></Hr>
						<Text className="text-black text-[14px] leading-[24px]">
							<p>
								<strong>Mensagem:</strong>
								<br />
							</p>
							<p className="leading-[30px]">{messageBody}</p>
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}

const verifyTypeOfMessage = (typeOfMessage: string) => {
	if (typeOfMessage === "question") {
		return "Pergunta ou Comentário";
	} else if (typeOfMessage === "error") {
		return "Erro ou Problema na Plataforma";
	}
	return typeOfMessage;
};

// SacUserEmailAkvo.PreviewProps = {
// 	username: "Sr. Madruga",
// 	userType: typeOfUser("admin"),
// 	userEmail: "email@example.com",
// 	messageType: verifyTypeOfMessage("question"),
// 	messageBody:
// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, pariatur repudiandae, laudantium error inventore voluptas natus, id libero harum dolorem aliquam sunt doloremque voluptatibus dolorum illo nisi perspiciatis a eos!",
// } as SacMailAkvo;