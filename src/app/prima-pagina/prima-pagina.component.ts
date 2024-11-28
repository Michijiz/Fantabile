import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AforismiComponent } from './Aforismi.component';

@Component({
  selector: 'app-prima-pagina',
  imports: [AforismiComponent, CommonModule],
  templateUrl: './prima-pagina.component.html',
  styleUrl: './prima-pagina.component.css',
})
export class PrimaPaginaComponent {
  articles = [
    {
      title: 'FC Minchia - Isola City',
      subtitle: 'Qui c’è puzza di fantacalcio scommesse.',
      content:
        'I padroni di casa schierano ben 4 panchinari e lasciano in panchina gol pesanti. All’Isola FC basta dunque il minimo sindacale per portarsi a casa i 3 punti e raggiungere le facce peniche in classifica. Che sia l’inizio della ripresa per la squadra isolana? O si tratta di un U1.5 orchestrato dalla saggia gestione di Cristiano Doni?',
      tag: 'TURNOVER 1.5',
      image: '/assets/images/fantascommesse.jpg',
    },
    {
      title: 'Noi United - RealDobaglio',
      subtitle: 'Incontro a senso unico al “Francesco Valiani” di Carini.',
      content:
        'I NoiUnited, tenendo alto il loro nome e la loro filosofia, si affidano alla coppia Thuram/Lookman per battere agilmente un RealDobaglio che, onestamente, sembrerebbe non ci abbia nemmeno provato. Il francese e il nigeriano insieme possono superare tranquillamente i 40 gol in due. 40 che casualmente è anche la lunghezza dei loro peni in cm.',
      tag: 'ORECCHINI POTARA',
      image: '/assets/images/noiunited.jpg',
    },
    {
      title: 'FC TIRRIMUTATI - Dunder Mifflin',
      subtitle: 'Partita a senso unico al “Paul Codrea” di Balestrate.',
      content:
        'Nonostante una partita ordinata e con poche sbavature, la squadra di casa non può nulla contro la capolista. Retegui ha finalmente trovato la sua dimensione a Scranton e il resto della squadra gioca quasi a memoria. Anche perché sono sempre e solo gli stessi 11.',
      tag: 'SQUADRA CHE VINCE NON SI SCHIERA',
      image: '/assets/images/cri.jpeg',
    },
    {
      title: 'TANI - KOULIBALY FUNICULA',
      subtitle: 'Pareggio pirotecnico al “Lucas Castroman” di Cinisi.',
      content:
        'La squadra di casa si affida ai soliti Zaccagni e Big Rom, ma dall’altra parte ci sono le treccine più in forma del campionato. Pareggio che serve poco alla classifica di entrambe le squadre e che non riesce a rispondere alla domanda: chi è più scarso tra Angelino e Vogliacco.',
      tag: '3-3 GLI ANNI DI KRISTOVIC',
      image: '/assets/images/kristo.jpg',
    },
  ];
}
