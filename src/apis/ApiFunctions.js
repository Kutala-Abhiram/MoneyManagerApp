import ConstantsList from './config';
export default class ApiFunctions {
  function getAccessToken() {
    return fetch(ConstantsList.BASE_URL + "/oauth/token")
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getToken() {
    try {
      response = getAccessToken();

      if(response.access_token) {

      } else {

      }
    }
    catch(error) {
      console.error(error);
    }
  }
}