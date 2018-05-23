import { Component } from '@angular/core';
import { Entity } from './models/entity.model';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Euro/Dolar';
    banks=['Caixa','Etc'];
    model=new Entity('Caixa');
    elementHTML;
    url:string='http://www3.caixabank.es/apl/divisas/index_es.html';


    constructor(private currencyService: CurrencyService) {

      currencyService.getPrice(this.url)
            .subscribe(
              data => {
                var el = document.createElement('div');
                el.innerHTML=data;
                this.elementHTML=el.getElementsByClassName("table-responsive n-table")[0];
                console.log("Porcion HTML", this.elementHTML);
              },
              err=> console.log("error ",err)
            );

    }
}
