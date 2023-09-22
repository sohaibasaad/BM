import './CustomModal.css'

function CustomModal() {
    return (
        <div class="modal modal-bytesMaster" id="thankyouModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <i class="fa-duotone fa-badge-check"></i>
                        <h3 class="modal_head">Thankyou</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fa-regular fa-times"></i>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p class="text-center">We can already envision a bright future ahead for you. Our customer support team will be in contact
                            with you shortly. Now that you have sown the seeds of your success, we’ll ripen your fruit of
                            prosperity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomModal
