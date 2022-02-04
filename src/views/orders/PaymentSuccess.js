import React from 'react'
import App from '../../layouts/App'

export default function PaymentSuccess() {
    return (
        <App>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div className="alert alert-success">
                            Thanks for buying.
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
