import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class CurrencyService {

    constructor(private http: Http){

    }

    getPrice(url: string): Observable<any>{
        //var url="https://www3.caixabank.es/apl/divisas/index_es.html#cotizaciones_de_billetes_para_operaciones_de_compra/venta_entre_0,00_y_3000,00%C2%A0euros";

        let head=new Headers({  'Access-Control-Allow-Origin':'*',
                                'Content-Type':'application/x-www-form-urlencoded;charset=utf8'
                             });
        let options= new RequestOptions({headers: head});
        return this.http.get(url,options)
                    .map(this.extractData)
                    .catch(this.handleError);
        

    }

   private extractData(res: Response) {
        // let parser = new DOMParser();
        // var el = parser.parseFromString(res.text(), "text/xml");
        //console.log("retorno URL ", el);
        console.log("retorno URL ", res.text());
        return res.text();
    }
    handleError(error: any): any {
        console.log("post error", error);
        return Observable.throw(error.statusText);
    }

}