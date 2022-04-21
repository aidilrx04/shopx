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

if (typeof window === 'undefined' && getApps.length === 0) {
    app = admin.initializeApp({
        credential: cert({
            "type": "service_account",
            "project_id": "shopx-6969",
            "private_key_id": "19cfc6da4e88944858a7daf9f5bc75ac52d47043",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCufXYIrg+fExz1\nICU93eNKVhyi7roso5iMQc80oVLw/OO782DvD7hqv/GBSn+zc5L5Q5CL5MjVZ540\np35dDZrsDNBzZRjtkvdWSutNsX2MSLwKQGAW92vVPgvFWq407oimwJcLewnBc5lr\n/7Lw4yq66c+a3LZTt/zpKDduVqMewQZ0el20yc6OOIaMgx24Ry9LSBlRTBH/DG8W\n5usqajlYFC3V5n7Zf5GSmG5OmXU4ayzljU84bw0w/CvE336nyRZg7liILyG0gDDB\n7cX+ZZ6tZ67enNSThpuG0DwgeB/W1ioZ+0qqdLnm9keH0aDCgbukxl9RFA869NoO\nLOGEyKLXAgMBAAECggEAU8wRzupUuzbxHbFx4Su5952yQ/c09rIcVSNXsLVXAT/Z\n2I3xu+1HShDjGQ3flR1IdKfjd6OIZaBNBIl5sJOTlpAy3XAsUA/X85uoNFgsbJ4T\nnDK9UtpA8ZhKC93YMrhpbPepskxE66AqCokydOgLwdb+qicb8sm1zn1PXZCC5wXN\nwplBAZRRdYJ0KxrhRN8Yvb5zv1M802+hbQZWJw8gRu/uyllct7Ae3kX8FZUndpQR\nDRD8J0tgEXEPyu3sHfhiDlcGR22H8eyc/5nekmMZnUxgdDxSL+W9575qneVk7Age\nCGa3beFXKjQbuYQ6ax/qy0ePyg2b+DsBkXVj1S58zQKBgQDgv2AUvNgc9a5XnM91\nb2W/eOyQUQeh5uD2xahf9UlYEhkttPgwK/l1YoreI3mmL2pFAG84ouFAcyQnlnB5\nCqwQOXsCCK7DoCY8KqHng4jlTfotNmRUc0rY98nPcy3fEoZ8XaAw/bSD37G5oNtc\n9b4tn8GmcVQiFaOfg+THmf62uwKBgQDGwQGki2lta2XS3XDiPHUQmazn8eg9Xcu0\nFFLp249/ThJpcGa1MCNfhTgrV0sF/EQGbq9Fa6oaQBPYy63cA56zkMM6NHXV0WOh\nmY34pPUZ5tsl/fYRbk56P8Q3X5dxyj6a8DcRnhI2PEYSZKFGZ2Sx1dbgEvYLab0/\nXi0inqhYlQKBgCEl2MP2PmG3Eqm1ZRvK/FTLPwjiCqAkb1W2PWk5wkGNGc2V/W0N\nb1OS3yx4Sv7py2C1+bF+xH4+/TwhgiE4I7yY3b2lDjGoMzt4hjyhN9WqNJXqic2y\n2304vrksIb3e+5roLDJNmQxCN/JK+U+ypwQPpf4ohOIqEuH6EAooelr1AoGBAJh4\nCW2T8Q2afONVMrqrDFbuvOC2B6XD5XfAu5Zg82UCnEc8jd3jDs/BH8TH02rFCd4x\nXM2ReU1n6JHANiB4um8f11Q4WEjtt1OJu4qJ6Oi021r6xqC6kQNhFYIxF7mYH4y2\nSFiAfZITjOGhRsL+oBV4aL0+bnd051PMSC2trpE9AoGBAMFu0FhDvB1VXFDhA43a\npYNn3nt+Ddy3ENT4bIVQeinw09cSRot0OHkdXorPSiz6RvZ5lWPpJLczYvo7datp\nycDVr0oluzedIrBXZe52D7FAbs4FxpAYWE1GhTa8mlYe7bA4I94mzVJ6TAmaxI7n\n2D22V7dV8lO2ad+bApKLck19\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-czi33@shopx-6969.iam.gserviceaccount.com",
            "client_id": "118170225939497604822",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-czi33%40shopx-6969.iam.gserviceaccount.com"
        } as ServiceAccount),
        databaseURL: "https://shopx-6969.firebaseio.com",

    }, 'shopx')
}
else {
    app = admin.app('shopx')
}

const db = getFirestore(app)

export {
    db
}