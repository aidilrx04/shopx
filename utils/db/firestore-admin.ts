import admin from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"
import { cert, getApp, getApps, ServiceAccount } from "firebase-admin/app"



const serviceAccount = {
    type: process.env.TYPE as string,
    project_id: process.env.PROJECT_ID as string,
    private_key_id: process.env.PRIVATE_KEY_ID as string,
    private_key: process.env.PRIVATE_KEY as string,
    client_email: process.env.CLIENT_EMAIL as string,
    client_id: process.env.CLIENT_ID as string,
    auth_uri: process.env.AUTH_URI as string,
    token_uri: process.env.TOKEN_URI as string,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL as string,
    client_x509_cert_url: process.env.CLIENT_X509_CERT_URL as string,
}

let app

if (typeof window === 'undefined' && getApps().length === 0) {
    app = admin.initializeApp({
        credential: cert(serviceAccount as ServiceAccount),
        databaseURL: "https://shopx-6969.firebaseio.com",

    })
}
else {
    app = admin.app('[DEFAULT]')
}

const db = getFirestore(app)

export {
    db
}