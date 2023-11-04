




export default function RecoveryPasswordModal(props) {



    return (
        <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" aria-labelledby="forgotPasswordModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header text-start">
                        <h5 className={`h5_modal modal-title`} id="exampleModalLabel">Esqueceu a senha?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* Alert */}
                        {emailSent && (
                            <div className="alert alert-success fadeItem" role="alert">
                                Verifique seu email!
                            </div>
                        )}
                        <p className="p">
                            Um link para recuperação de senha será enviado para o seu e-mail.
                        </p>
                    </div>
                    <div className="modal-footer">
                        {loadingModal ?
                            <button className="akvo_btn akvo_btn_primary btn-sm" type="button" disabled>
                                <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                                Enviando...
                            </button>
                            :
                            <button type="button" className="akvo_btn akvo_btn_primary btn-sm" onClick={e => handleResetPassword(e)}>Enviar</button>
                        }
                        <button
                            type="button"
                            className="akvo_btn akvo_btn_secondary btn-sm ms-2"
                            data-bs-dismiss="modal"
                            onClick={() => { setEmailSent(false); setLoadingModal(false) }}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}