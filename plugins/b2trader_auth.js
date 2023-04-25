import * as base64 from 'base64-js';
const hasCrypto = typeof window !== 'undefined' && !!window.crypto;
const hasSubtleCrypto = hasCrypto && !!window.crypto.subtle;
const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * Makes string from Uint8Array.
 *
 * @param buffer - Uint8Array with random char codes.
 * @returns String from symbols of given array.
 */
function bufferToString(buffer) {
    const state = [];
    for (let i = 0; i < buffer.byteLength; i += 1) {
        const index = buffer[i] % CHARSET.length;
        state.push(CHARSET[index]);
    }
    return state.join('');
}
/**
 * Makes Base64 encoded string from Uint8Array of char codes.
 *
 * @param buffer - Hash as Uint8Array.
 * @returns Base64 encoded string without symbols which can affect url.
 */
function urlSafe(buffer) {
    const encoded = base64.fromByteArray(new Uint8Array(buffer));
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
/**
 * Makes Uint8Array from given string.
 *
 * @param str - Generated string of random symbols.
 * @returns Uint8Array of symbols codes in string.
 */
function textEncodeLite(str) {
    const buf = new ArrayBuffer(str.length);
    const bufView = new Uint8Array(buf);
    for (let i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return bufView;
}
/**
 * This method generates fixed-length string with random symbols.
 *
 * @param size - Initial empty Uint8Array.
 * @returns String filled with random symbols.
 */
function generateRandomString(size) {
    const buffer = new Uint8Array(size);
    if (hasCrypto) {
        window.crypto.getRandomValues(buffer);
    }
    else {
        // fall back to Math.random() if the global crypto object is not available
        for (let i = 0; i < size; i += 1) {
            buffer[i] = (Math.random() * CHARSET.length) | 0;
        }
    }
    return bufferToString(buffer);
}
/**
 * This function generates SHA-256 hash from some random code.
 *
 * @param code - Random code string.
 * @returns Url safe string, or error if code length is incorrect.
 */
function deriveChallenge(code) {
    if (code.length < 43 || code.length > 128) {
        return Promise.reject('Invalid code length.');
    }
    if (!hasSubtleCrypto) {
        return Promise.reject('window.crypto.subtle is unavailable.');
    }
    return new Promise((resolve, reject) => {
        crypto.subtle.digest('SHA-256', textEncodeLite(code)).then(buffer => {
            return resolve(urlSafe(new Uint8Array(buffer)));
        }, error => reject(error));
    });
}































import {IdentityAuth} from 'b2trader.identity.auth'
import axios from 'axios'


const b2TraderApiUrl = "https://b2t-api-cmc-staging-5.flexprotect.org"

let email = "test+1@galaz.de"
let password = "CapHold123!"


async function signin(){
  let point = b2TraderApiUrl + '/identity/sign-in'
  const resp = fetch(point, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': "application/json"
    },
  })
  // .then((res) => {console.log(res)})
  .then(response => response.json())
  .then(data => console.log("signin naked", data))
  .then(() => connectAuthorize())
}


// signin()


// async function signin(){
//   var point = 'https://b2t-api-cmc-staging-5.flexprotect.org/sign-in'
//   const resp = await axios.post(point, {
  //     email: 'test+1@galaz.de',
//     password: 'CapHold123!'
//   })
//   .then(async (res) => {
  //     console.log(res)
  //   })
//   .catch((error) => { console.error(error) })
//   return resp
// }




async function connectAuthorize(){
  var verifier = generateRandomString(128)
  var challenge = await deriveChallenge(verifier)
  console.log("verifier", verifier)
  console.log("challenge", challenge)
  var point = b2TraderApiUrl + '/identity/connect/authorize'
  console.log("point", point)
  const urlParams = new URLSearchParams({
    client_id: "spa",
    response_type: "code",
    redirect_uri: "https://b2t-api-cmc-staging-5.flexprotect.org/identity/sign-in-done",
    code_challenge: challenge,
    code_challenge_method: "S256",
    scope: "openid offline_access FrontOffice",
    state: generateRandomString(10),
    nonce: generateRandomString(10),
  });
  console.log(`${point}?${urlParams}`)
  const response = await fetch(`${point}?${urlParams}`, {
    method: 'GET',
    credentials: 'include'
  })
  console.log('Atencion', response)
  const ret = new URLSearchParams(new URL(response.url).search).get('code');
  // console.log("ret", ret)
  // return ret
  return new URLSearchParams(new URL(response.url).search).get('code');
}





























async function test() {
    // signin()

    console.log('Primera llamada')
    const identityAuth = new IdentityAuth(b2TraderApiUrl, 'spa');
    console.log('identityAuth', identityAuth)
    
    console.log('Segunda llamada')
    const signInResponse = await identityAuth.signIn('test+1@galaz.de', 'CapHold123!');
    // signInResponse = signInResponse.json()
    console.log('signInResponse', signInResponse)
    
    // console.log(3)
    // const authorizeCode = await identityAuth.authorize();
    // console.log(authorizeCode)
    
    // console.log(4)
    // const tokenData = await identityAuth.retrieveToken(authorizeCode)
    // console.log(tokenData)

    // // console.log(tokenData.id_token)
    // // signin()
    // const hasCrypto = typeof window !== 'undefined' && !!window.crypto;

    // console.log(identityAuth)

    // console.log(hasCrypto);
    // getUserList(tokenData.refresh_token)
};

test()


async function getUserList(token){
    var furl = "https://b2t-api-cmc-staging-5.flexprotect.org/back-api/backoffice/users"
    const resp = await axios.get(furl, {
      headers: {
        Autorization: `Bearer  ${token}`
      }
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error(error.response)
    })
    return resp
  }
  
  