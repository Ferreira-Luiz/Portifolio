import { Component, OnInit } from '@angular/core';
import { slideFromTop, slideInAnimation } from 'src/app/shared/animations/modules/angularAnimations.module';
import { ScrollReavealService } from 'src/app/shared/animations/services/scroll-reaveal.service';

import { FaqModel } from './model/faq-model';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css'],
  animations: [slideInAnimation, slideFromTop],
})
export class DuvidasComponent implements OnInit {

  constructor(private scrollReavealService : ScrollReavealService) {}


  ngOnInit(): void {
    this.scrollReavealService.init();
  }

  perguntas : FaqModel[]=  [
    { titulo: 'O que é SEO?', resposta: 'SEO é como fazer o seu site ser amigo dos motores de busca, como o Google. É como fazer com que o Google goste do seu site e o coloque no topo da lista quando as pessoas pesquisarem por coisas relacionadas ao que você faz. Você faz isso otimizando o conteúdo e a estrutura do seu site para que ele seja fácil de ler pelos motores de busca e, assim, eles recomendem seu site para mais pessoas.', expandida: false, numero: "01"},
    { titulo: 'O que é um design responsivo?', resposta: 'O design responsivo é a prática de criar sites que se adaptam a diferentes tamanhos de tela, como em dispositivos móveis e desktops, para garantir uma experiência de usuário consistente.'  , expandida: false, numero: "02"},
    { titulo: 'O que esperar de mim?', resposta: 'Estou sempre disposto a aprender, colaborar e me esforçar ao máximo para contribuir com o sucesso da equipe e do projeto. Além disso, estou aberto a feedback construtivo e estou constantemente buscando maneiras de melhorar minhas habilidades e desempenho. Estou comprometido em ser um membro valioso da equipe e fazer a minha parte para atingir nossas metas.', expandida: false, numero: "03"},
    { titulo: 'Precisa de um Desenvolvedor Front-End?', resposta: 'Me mande uma Mensagem pelo Linkedin', expandida: false, numero: "04"},
  ];

  toggleResposta(pergunta: FaqModel ): void {
    pergunta.expandida = !pergunta.expandida;
  }



}
