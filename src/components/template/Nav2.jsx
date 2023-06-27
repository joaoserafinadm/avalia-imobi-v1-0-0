// import { useState, useEffect, useContext } from "react";
// import styles from "./Nav.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import Cookie from "js-cookie";
// import jwt from "jsonwebtoken";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faAngleRight,
//     faBookOpen,
//     faBuilding,
//     faBuildingUn,
//     faBuildingUser,
//     faChartLine,
//     faClipboardList,
//     faDiagramProject,
//     faFileCircleCheck,
//     faGear,
//     faHome,
//     faTree,
//     faTreeCity,
//     faUsers,
//     faTreeDeci,
//     faMessage,
//     faAnglesDown,
//     faBalanceScale,
//     faIndent,
//     faChartSimple,
//     faSquarePollVertical,
//     faClipboardQuestion,
//     faClipboardCheck,
//     faChartPie,
//     faListCheck,
//     faTruckField,
//     faTruck,
//     faKey,
//     faFileContract,
//     faChartArea,
//     faChartColumn,
// } from "@fortawesome/free-solid-svg-icons";
// import { Scrollbars } from "react-custom-scrollbars-2";
// import $ from "jquery";
// import axios from "axios";
// import baseUrl from "../../../utils/baseUrl";
// import {
//     userStatusName,
//     editCompanyView,
//     freeAccountRedirect,
//     userRestriction,
// } from "../../../utils/permission";
// import Accordion from "react-bootstrap/Accordion";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
// import { AccordionContext } from "react-bootstrap";
// import tippy from "tippy.js";
// import "tippy.js/dist/tippy.css";
// import AkvoToolToggle from "../index/AkvoToolToggle";

export default function Nav({ children }) {
    // $(document).ready(function () {
    //     $(".collapse").collapse;
    // });

    // const list = useSelector((state) => state.inventoryList);
    // const inventory = useSelector((state) => state.inventoryDB);
    // const token = jwt.decode(Cookie.get("auth"));
    // const akvoTool = useSelector(state => state.tool)


    // const [companyLogo, setCompanyLogo] = useState("");

    // const [oldInventoryLength, setOldInventoryLength] = useState(0);

    // useEffect(() => {
    //     dataFunction(token.company_id);
    // }, []);

    // useEffect(() => {
    //     var tooltipTriggerList = [].slice.call(
    //         document.querySelectorAll('[data-bs-toggle="tooltip"]')
    //     );
    //     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //         return new bootstrap.Tooltip(tooltipTriggerEl);
    //     });

    //     if (list.length === 1) {
    //         tippy("#listLength", {
    //             content: `${list.length} ${list.length > 1 ? "dados não salvos" : "dado não salvo"
    //                 }`,
    //             placement: "right",
    //             arrow: true,
    //             showOnCreate: true,
    //             delay: "250, [250, 250]",
    //         });
    //     }
    // }, [list.length]);

    // const dataFunction = async (company_id) => {
    //     await axios
    //         .get(`${baseUrl()}/api/company`, {
    //             params: {
    //                 company_id: company_id,
    //             },
    //         })
    //         .then((res) => {
    //             setCompanyLogo(res.data.profileImageUrl);
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // };

    // function ContextAwareToggle({ children, eventKey, callback }) {
    //     const { activeEventKey } = useContext(AccordionContext);

    //     const decoratedOnClick = useAccordionButton(
    //         eventKey,
    //         () => callback && callback(eventKey)
    //     );

    //     const isCurrentEventKey = activeEventKey === eventKey;

    //     return (
    //         <span
    //             className="font-weight-bold btn-toggle"
    //             type="button"
    //             onClick={decoratedOnClick}
    //             collapsed={isCurrentEventKey ? "true" : "false"}
    //         >
    //             <div className="row align-items-center">{children}</div>
    //         </span>
    //     );
    // }

    return (
        <>
        </>
        // <aside className={`${styles.menuArea} shadow`}>
        //     <div className=" row align-items-center mt-4 mb-2 fadeItem">
        //         <div className="col">
        //             <div className="row align-items-center">
        //                 <Link href={`/editProfile/${token.sub}`}>
        //                     <div className="d-flex justify-content-center">
        //                         <span type="button">
        //                             <img
        //                                 src={
        //                                     token.profilePicture
        //                                         ? token.profilePicture
        //                                         : "./userIcon.png"
        //                                 }
        //                                 alt="User profile picture"
        //                                 className={`${styles.img} shadow`}
        //                             />
        //                         </span>
        //                     </div>
        //                 </Link>
        //             </div>

        //             <div className="row align-items-center mt-2">
        //                 <div className={`d-flex justify-content-center ${styles.userName}`}>
        //                     {token.firstName} {token.lastName}
        //                 </div>
        //             </div>

        //             <div className="row align-items-center">
        //                 <div className="d-flex justify-content-center">
        //                     <small className={styles.userStatus}>
        //                         {userStatusName(token.userStatus, token.userConfig)}
        //                     </small>
        //                 </div>
        //             </div>

        //             <div style={{ height: "25px" }} className="mt-3 slideDown">
        //                 {companyLogo && (
        //                     <Link href={"/companyEdit"}>
        //                         <span type="button" className="row align-items-center">
        //                             <div className="d-flex justify-content-center">
        //                                 <img
        //                                     src={`${token.companyLogo}`}
        //                                     className={`${styles.companyLogo} fadeItem1s`}
        //                                 />
        //                             </div>
        //                         </span>
        //                     </Link>
        //                 )}
        //             </div>
        //         </div>
        //     </div>

        //     <Scrollbars
        //         style={{ height: "65vh" }}
        //         autoHide
        //         autoHideTimeout={3000}
        //         autoHideDuration={200}
        //         renderTrackVertical={(props) => (
        //             <div {...props} className="vtrackSidebar" />
        //         )}
        //         renderThumbVertical={(props) => (
        //             <div {...props} className="vthumbSidebar" />
        //         )}
        //     >
        //         <ul style={{ width: "95%" }}>
        //             <Accordion defaultActiveKey="0">
        //                 <li>
        //                     <ContextAwareToggle eventKey="0" collapse="InicioItem">
        //                         <Link href="/">
        //                             <div className="d-flex justify-content-start ">
        //                                 <div className="col-1 me-2">
        //                                     <FontAwesomeIcon icon={faHome} className="me-2 icon" />
        //                                 </div>
        //                                 <div className="col-9">Início</div>
        //                             </div>
        //                         </Link>
        //                     </ContextAwareToggle>
        //                 </li>



        //                 <AkvoToolToggle />



        //                 {akvoTool === "geeCalculator" && (
        //                     <div className="fadeItem">
        //                         <li>
        //                             <ContextAwareToggle eventKey="1">
        //                                 <div className="d-flex justify-content-start ">
        //                                     <div className="col-1 me-2">
        //                                         <FontAwesomeIcon icon={faClipboardList} className="icon" />
        //                                     </div>
        //                                     <div className="col-9  fw-bold" id="gestaoButton">
        //                                         <div className="row d-flex align-items-center">
        //                                             <div className="col-8">Inventário</div>
        //                                             <div className="col">
        //                                                 {list.length > 0 && (
        //                                                     <div className="align-self-center  fadeItem">
        //                                                         <span
        //                                                             id="listLength"
        //                                                             className="badge badge-pill bg-danger text-light inventoryListLength "
        //                                                         >
        //                                                             <p>{list.length}</p>
        //                                                         </span>
        //                                                     </div>
        //                                                 )}
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                     <div className="col-1 toggleIcon text-end">
        //                                         <FontAwesomeIcon icon={faAngleRight} />
        //                                     </div>
        //                                 </div>
        //                             </ContextAwareToggle>

        //                             <Accordion.Collapse eventKey="1">
        //                                 <ul>
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/inventory">
        //                                                 <a>
        //                                                     Inserir Dados
        //                                                     {list.length > 0 && (
        //                                                         <div className="shoppingCart_sign_Nav fadeItem"></div>
        //                                                     )}
        //                                                 </a>
        //                                             </Link>
        //                                         </li>
        //                                     )}

        //                                     <li>
        //                                         <Link href="/dataRevision">
        //                                             <a>Revisão de Dados</a>
        //                                         </Link>
        //                                     </li>
        //                                 </ul>
        //                             </Accordion.Collapse>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="2">
        //                                 <div className="d-flex justify-content-start ">
        //                                     <div className="col-1 me-2">
        //                                         <FontAwesomeIcon icon={faChartLine} className="icon" />
        //                                     </div>
        //                                     <div className="col-9 fw-bold" id="gestaoButton">
        //                                         Gestão de Emissões
        //                                     </div>
        //                                     <div className="col-1 toggleIcon text-end">
        //                                         <FontAwesomeIcon icon={faAngleRight} />
        //                                     </div>
        //                                 </div>
        //                             </ContextAwareToggle>
        //                             <Accordion.Collapse eventKey="2">
        //                                 <ul>
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/geeEmissions">
        //                                                 <a>Emissões GEE</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/inventoryManagement">
        //                                                 <a>Metas e Planos de Ação</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                 </ul>
        //                             </Accordion.Collapse>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="0" collapse="InicioItem">
        //                                 <Link href="/offsetting">
        //                                     <div className="d-flex justify-content-start ">
        //                                         <div className="col-1 me-2">
        //                                             <FontAwesomeIcon icon={faTree} className="me-2 icon" />
        //                                         </div>
        //                                         <div className="col-9 fw-bold">Compensação</div>
        //                                     </div>
        //                                 </Link>
        //                             </ContextAwareToggle>
        //                         </li>
        //                     </div>
        //                 )}

        //                 {akvoTool === "geeAgro" && (
        //                     <div className="fadeItem">

        //                     </div>
        //                 )}

        //                 {akvoTool === "esgIndicators" && (
        //                     <div className="fadeItem">
        //                         <li>
        //                             <ContextAwareToggle eventKey="15">
        //                                 <Link href="/esgIndicators">
        //                                     <div className="d-flex justify-content-start ">
        //                                         <div className="col-1 me-2">
        //                                             <FontAwesomeIcon icon={faClipboardCheck} className="icon" />
        //                                         </div>
        //                                         <div className="col-9 fw-bold" id="gestaoButton">
        //                                             Formulário
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                             </ContextAwareToggle>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="15">
        //                                 <Link href="/esgResults">
        //                                     <div className="d-flex justify-content-start ">
        //                                         <div className="col-1 me-2">
        //                                             <FontAwesomeIcon icon={faChartSimple} className="icon" />
        //                                         </div>
        //                                         <div className="col-9 fw-bold" id="gestaoButton">
        //                                             Resultados
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                             </ContextAwareToggle>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="15">
        //                                 <Link href="/esgManagement">
        //                                     <div className="d-flex justify-content-start ">
        //                                         <div className="col-1 me-2">
        //                                             <FontAwesomeIcon icon={faListCheck} className="icon" />
        //                                         </div>
        //                                         <div className="col-9 fw-bold" id="gestaoButton">
        //                                             Planos de ação
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                             </ContextAwareToggle>
        //                         </li>
        //                     </div>
        //                 )}

        //                 {akvoTool === "pcaf" && (
        //                     <div className="fadeItem">                                
        //                         <li>
        //                             <ContextAwareToggle eventKey="31">
        //                                 <div className="d-flex justify-content-start ">
        //                                     <div className="col-1 me-2">
        //                                         <FontAwesomeIcon icon={faFileContract} className="icon" />
        //                                     </div>
        //                                     <div className="col-9 fw-bold" id="gestaoButton">
        //                                         Contratos
        //                                     </div>
        //                                     <div className="col-1 toggleIcon text-end">
        //                                         <FontAwesomeIcon icon={faAngleRight} />
        //                                     </div>
        //                                 </div>
        //                             </ContextAwareToggle>
        //                             <Accordion.Collapse eventKey="31">
        //                                 <ul>
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/contractAdd">
        //                                                 <a>Adicionar Contrato</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/contractsManagement">
        //                                                 <a>Gestão de Contratos</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                 </ul>
        //                             </Accordion.Collapse>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="32">
        //                                 <Link href="/pcafResults">
        //                                     <div className="d-flex justify-content-start ">
        //                                         <div className="col-1 me-2">
        //                                             <FontAwesomeIcon icon={faChartColumn} className="icon" />
        //                                         </div>
        //                                         <div className="col-9 fw-bold" id="gestaoButton">
        //                                             Resultados
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                             </ContextAwareToggle>
        //                         </li>
        //                         <li>
        //                             <ContextAwareToggle eventKey="30">
        //                                 <div className="d-flex justify-content-start ">
        //                                     <div className="col-1 me-2">
        //                                         <FontAwesomeIcon icon={faKey} className="icon" />
        //                                     </div>
        //                                     <div className="col-9 fw-bold" id="gestaoButton">
        //                                         API
        //                                     </div>
        //                                     <div className="col-1 toggleIcon text-end">
        //                                         <FontAwesomeIcon icon={faAngleRight} />
        //                                     </div>
        //                                 </div>
        //                             </ContextAwareToggle>
        //                             <Accordion.Collapse eventKey="30">
        //                                 <ul>
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/pcafApiConfig">
        //                                                 <a>Configurações</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                     {userRestriction(["auditor"], token.userStatus) && (
        //                                         <li>
        //                                             <Link href="/apiDocumentation">
        //                                                 <a>Documentação</a>
        //                                             </Link>
        //                                         </li>
        //                                     )}
        //                                 </ul>
        //                             </Accordion.Collapse>
        //                         </li>
        //                     </div>
        //                 )}










        //                 {/* <li>
        //       <ContextAwareToggle eventKey="12">
        //         <div className="d-flex justify-content-start ">
        //           <div className="col-1 me-2">
        //             <FontAwesomeIcon
        //               icon={faFileCircleCheck}
        //               className="icon"
        //             />
        //           </div>
        //           <div className="col-9 fw-bold" id="gestaoButton">
        //             Relatórios
        //           </div>
        //           <div className="col-1 toggleIcon text-end">
        //             <FontAwesomeIcon icon={faAngleRight} />
        //           </div>
        //         </div>
        //       </ContextAwareToggle>
        //       <Accordion.Collapse eventKey="12">
        //         <ul>
        //           {userRestriction(["auditor"], token.userStatus) && (
        //             <li>
        //               <Link href="/reportManagement">
        //                 <a>Gerar relatório</a>
        //               </Link>
        //             </li>
        //           )}
        //           {userRestriction(["auditor"], token.userStatus) && (
        //             <li>
        //               <Link href="/library">
        //                 <a>Biblioteca</a>
        //               </Link>
        //             </li>
        //           )}
        //         </ul>
        //       </Accordion.Collapse>
        //     </li> */}



        //                 {akvoTool && (
        //                     <div className="d-flex">
        //                         <div className="col-12 ps-2">
        //                             <hr className="" />
        //                         </div>
        //                     </div>
        //                 )}

        //                 {userRestriction(["user", "auditor"], token.userStatus) &&
        //                     editCompanyView(token.userStatus, token.userConfig) && (
        //                         <li>
        //                             <ContextAwareToggle eventKey="7">
        //                                 <div className="d-flex justify-content-start ">
        //                                     <div className="col-1 me-2">
        //                                         <FontAwesomeIcon
        //                                             icon={faBuildingUser}
        //                                             className=" icon"
        //                                         />
        //                                     </div>
        //                                     <div className="col-9">Instituição</div>
        //                                     <div className="col-1 toggleIcon text-end">
        //                                         <FontAwesomeIcon icon={faAngleRight} />
        //                                     </div>
        //                                 </div>
        //                             </ContextAwareToggle>
        //                             <Accordion.Collapse eventKey="7">
        //                                 <ul>
        //                                     <li>
        //                                         <Link href="/companyEdit">
        //                                             <a>Editar Instituição</a>
        //                                         </Link>
        //                                     </li>
        //                                     <li>
        //                                         <Link href="/companyStructure">
        //                                             <a>Estrutura da Plataforma</a>
        //                                         </Link>
        //                                     </li>
        //                                 </ul>
        //                             </Accordion.Collapse>
        //                         </li>
        //                     )}


        //                 {userRestriction(["auditor"], token.userStatus) && (
        //                     <li>
        //                         <ContextAwareToggle eventKey="3">
        //                             <div className="d-flex justify-content-start ">
        //                                 <div className="col-1 me-2">
        //                                     <FontAwesomeIcon
        //                                         icon={faDiagramProject}
        //                                         className=" icon"
        //                                     />
        //                                 </div>
        //                                 <div className="col-9">Unidades</div>
        //                                 <div className="col-1 toggleIcon text-end">
        //                                     <FontAwesomeIcon icon={faAngleRight} />
        //                                 </div>
        //                             </div>
        //                         </ContextAwareToggle>
        //                         <Accordion.Collapse eventKey="3">
        //                             <ul>
        //                                 {userRestriction(["user", "auditor"], token.userStatus) && (
        //                                     <li>
        //                                         <Link href="/unityAdd">
        //                                             <a>Adicionar Unidade</a>
        //                                         </Link>
        //                                     </li>
        //                                 )}
        //                                 <li>
        //                                     <Link href="/unitsManagement">
        //                                         <a>Gestão de Unidades</a>
        //                                     </Link>
        //                                 </li>
        //                             </ul>
        //                         </Accordion.Collapse>
        //                     </li>
        //                 )}

        //                 {userRestriction(["auditor"], token.userStatus) && (
        //                     <li>
        //                         <ContextAwareToggle eventKey="4">
        //                             <div className="d-flex ">
        //                                 <div className="col-1 me-2">
        //                                     <FontAwesomeIcon icon={faUsers} className="me-2 icon" />
        //                                 </div>
        //                                 <div className="col-9">Usuários</div>
        //                                 <div className="col-1 toggleIcon text-end">
        //                                     <FontAwesomeIcon icon={faAngleRight} />
        //                                 </div>
        //                             </div>
        //                         </ContextAwareToggle>
        //                         <Accordion.Collapse eventKey="4">
        //                             <ul>
        //                                 {userRestriction(["user", "auditor"], token.userStatus) && (
        //                                     <li>
        //                                         <Link
        //                                             href={freeAccountRedirect(
        //                                                 token.dateLimit,
        //                                                 "/userAdd"
        //                                             )}
        //                                         >
        //                                             <a>Adicionar Usuário</a>
        //                                         </Link>
        //                                     </li>
        //                                 )}
        //                                 <li>
        //                                     <Link href="/usersManagement">
        //                                         <a>Gestão de Usuários</a>
        //                                     </Link>
        //                                 </li>
        //                             </ul>
        //                         </Accordion.Collapse>
        //                     </li>
        //                 )}

        //                 {/* <li>
        //                     <ContextAwareToggle eventKey="20" collapse="fornecedoresCollapse">
        //                         <div className="d-flex">
        //                             <div className="col-1 me-2">
        //                                 <FontAwesomeIcon icon={faTruck} className="me-2 icon" />
        //                             </div>
        //                             <div className="col-9">Fornecedores</div>
        //                             <div className="col-1 toggleIcon text-end">
        //                                 <FontAwesomeIcon icon={faAngleRight} />
        //                             </div>
        //                         </div>
        //                     </ContextAwareToggle>
        //                     <Accordion.Collapse eventKey="20">
        //                         <ul>
        //                             <li>
        //                                 <Link href={`/supplierAdd`}>
        //                                     <a>Adicionar Fornecedor</a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="/supplierManagement">
        //                                     <a>Cadeia de Fornecedores</a>
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </Accordion.Collapse>
        //                 </li> */}
        //                 <li>
        //                     <ContextAwareToggle eventKey="5" collapse="configuracoesCollapse">
        //                         <div className="d-flex">
        //                             <div className="col-1 me-2">
        //                                 <FontAwesomeIcon icon={faGear} className="me-2 icon" />
        //                             </div>
        //                             <div className="col-9">Configurações</div>
        //                             <div className="col-1 toggleIcon text-end">
        //                                 <FontAwesomeIcon icon={faAngleRight} />
        //                             </div>
        //                         </div>
        //                     </ContextAwareToggle>
        //                     <Accordion.Collapse eventKey="5">
        //                         <ul>
        //                             <li>
        //                                 <Link href={`/editProfile/${token.sub}`}>
        //                                     <a>Editar Perfil</a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="/passwordChange">
        //                                     <a>Alterar Senha</a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="/accountSetup">
        //                                     <a>Configuração da Conta</a>
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </Accordion.Collapse>
        //                 </li>

        //                 <li>
        //                     <ContextAwareToggle eventKey="8" collapse="referenciasCollpase">
        //                         <div className="d-flex">
        //                             <div className="col-1 me-2">
        //                                 <FontAwesomeIcon icon={faBookOpen} className="me-2 icon" />
        //                             </div>
        //                             <div className="col-9">Documentação</div>
        //                             <div className="col-1 toggleIcon text-end">
        //                                 <FontAwesomeIcon icon={faAngleRight} />
        //                             </div>
        //                         </div>
        //                     </ContextAwareToggle>
        //                     <Accordion.Collapse eventKey="8">
        //                         <ul>
        //                             <li>
        //                                 <Link href={`/manualAkvo`}>
        //                                     <a>Manual AKVO</a>
        //                                 </Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="/tutorials">
        //                                     <a>Tutoriais</a>
        //                                 </Link>
        //                             </li>
        //                         </ul>
        //                     </Accordion.Collapse>
        //                 </li>

        //                 <li>
        //                     <ContextAwareToggle eventKey="6" collapse="InicioItem">
        //                         <Link href="/sac">
        //                             <div className="d-flex justify-content-start ">
        //                                 <div className="col-1 me-2">
        //                                     <FontAwesomeIcon icon={faMessage} className="me-2 icon" />
        //                                 </div>
        //                                 <div className="col-9">Fale Conosco</div>
        //                             </div>
        //                         </Link>
        //                     </ContextAwareToggle>
        //                 </li>
        //             </Accordion>
        //         </ul>
        //     </Scrollbars>
        // </aside >
    );
}
