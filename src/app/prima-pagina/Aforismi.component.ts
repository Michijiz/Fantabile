import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aforismi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="aforismi-container">
      <button (click)="generaAforisma()" class="btn-aforisma">Genera</button>
      <p *ngIf="aforismaCorrente" class="aforisma">"{{ aforismaCorrente }}"</p>
    </div>
  `,
  styles: [
    `
      /* Container degli aforismi */
      .aforismi-container {
        text-align: center;
        margin: 20px;
      }

      /* Bottone degli aforismi */
      .btn-aforisma {
        background-color: #111;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      /* Hover del bottone */
      .btn-aforisma:hover {
        background-color: #00bf72;
      }

      /* Stile dell'aforisma */
      .aforisma {
        font-style: italic;
        color: #333;
        margin-top: 15px;
        font-size: 1.2em;
      }

      /* Media query per schermi più piccoli */
      @media (max-width: 768px) {
        .aforismi-container {
          margin: 15px; /* Riduce il margine per schermi più piccoli */
        }

        .btn-aforisma {
          padding: 8px 16px; /* Riduce la dimensione del padding del bottone */
        }

        .aforisma {
          font-size: 1em; /* Riduce la dimensione del font per dispositivi più piccoli */
        }
      }

      @media (max-width: 480px) {
        .aforismi-container {
          margin: 10px; /* Ulteriormente ridotto il margine per schermi molto piccoli */
        }

        .btn-aforisma {
          padding: 6px 12px; /* Ulteriormente ridotto il padding del bottone */
        }

        .aforisma {
          font-size: 0.9em; /* Ancora più piccolo per schermi molto piccoli */
        }
      }
    `,
  ],
})
export class AforismiComponent {
  private aforismi = [
    "Il calcio è facile: una palla, due porte e un po' di muso corto. Se non segni, te ne vai a casa e speri che la pizza arrivi prima della partita! - Giovanni Trapattoni",
    'Il calcio è come la pizza e fichi: basta che funzioni. Se non segni, tanto vale stare a mangiare una pizza e aspettare che il destino ti faccia un favore - Carlo Ancelotti',
    ' Se non corri, te lo danno in faccia! Se non corri fino al 15’, sei già fuori. E se il destino è debole, ciao! - Arrigo Sacchi',
    'A me non interessa che giocano bene. Fino al 15’ vincevamo, poi sono arrivati gli uomini deboli con il destino che non ha retto. Il calcio non è un problema mio! - Massimiliano Allegri',
    'Il calcio è calcio totale. Non è un problema mio se la palla non entra, ma se il destino è debole, la partita finisce lì! - Jose Mourinho',
    'Il calcio è come la pizza: se non segni, te la mangi fredda. E a me piacciono gli uomini forti che lottano fino alla fine. Muso corto? Non ci interessa! - Luciano Spalletti',
    'Se non ci credi, vai a casa. Qui, se il destino è forte, segni. Se non te ne intendi di ippica, magari ti diverti con un altro sport! - Roberto Mancini',
    'Il calcio è una guerra. Se non metti gli uomini forti, il destino te lo rimanda in faccia. La pizza? Meglio che arrivi dopo il gol - Ezino Capuano',
    'Il calcio è fatica, ragazzi! Se non corri, il destino ti manda a casa. Se giochi con il muso corto, puoi anche dire addio alla panchina. - Antonio Conte',
    'Il calcio è spettacolo! Se non segni, ti tocca fare il riscaldamento. E se non sei pronto, orsato dove sei? - Paulo Fonseca',
  ];

  aforismaCorrente: string | null = null;

  generaAforisma() {
    const indice = Math.floor(Math.random() * this.aforismi.length);
    this.aforismaCorrente = this.aforismi[indice];
  }
}
