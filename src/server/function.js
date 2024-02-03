import axios from "axios";

export class Function {

    #baseUrl = process.env.VUE_APP_DEKRUP
    constructor(){
        
    }

    async GetFunction() {
        let data;
        const config = {
            method:'get',
            url:`${this.#baseUrl}/more/function_more`
        }

        await axios(config).then(result => {
            if(result){
                data = result.data
            }
        })
        .catch(error => {
            data = error;
        })

        return data;
    }
}