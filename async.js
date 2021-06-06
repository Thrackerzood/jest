
function sendRequest(method,url,body){
   const headers = {
      'Content-Type': 'application/json'
   }
   return fetch(url,{
      method: method,
      body: JSON.stringify(body),
      headers: headers
   }).then(response => response.json())
}


module.exports = {sendRequest}