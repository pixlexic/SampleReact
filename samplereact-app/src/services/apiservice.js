import GlobalService from "./globalservice";
import DataReturn from "../models/datareturn";

class ApiService{


    constructor() {
     
    }
 


static GetItems = () => {

   return  fetch( GlobalService.parentURL + '/api/example/getitems')
      .then(response => response.json())
      .then(json => {
        return Object.assign(new DataReturn(), json);
      })
      .catch(error => {
        console.error(error);
      });
  };


}


export default ApiService;