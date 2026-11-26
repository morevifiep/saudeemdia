SAÚDE EM DIA - Pré-Projeto

Objetivo:
Plataforma que reúne busca, agendamento, preparo, resultados e histórico de exames médicos em um só lugar.

Dupla: Mariane Goch e Carlos Morevi

Páginas criadas:
- index.html        : página inicial (destaque, o que o app oferece e como funciona)
- sobre.html        : sobre nós, para pacientes e para clínicas
- contato.html      : formulário de contato e pré-cadastro (acessível)
- exames.html       : exames laboratoriais, de imagem e cardiologia e check-ups prontos
- agendamento.html  : formulário de agendamento com filtro de exames (acessível)
- parceiros.html    : hospitais, clínicas e consultórios parceiros
- emconstrucao.html : aviso de site em construção (destino do botão ENTRAR)

Outros arquivos:
- estilo.css          : estilos de todas as páginas
- menu.js             : menu recolhível para celular
- app-exames.svg      : imagem ilustrativa do app
- images/fundo_1.png  : imagem do destaque da home page

O que já foi feito:
- Estrutura semântica (header, nav, main, section, footer) em todas as páginas
- Menu com 8 links em caixa alta e indicação da página atual
- Menu recolhível no celular (botão MENU; tecla Esc fecha; funciona sem JavaScript)
- Botão ENTRAR direcionado para a página Em construção
- Destaque da home com imagem inteira e responsiva, sem cortes
- Texto do destaque sobre a imagem no desktop e abaixo dela em tablet e celular
- Serviços com títulos em caixa alta na cor #ffff66 e ícones SVG de 80 px
- Como funciona com imagem à esquerda e passos numerados em destaque à direita
- Página de exames com ícones SVG de 80 px em cada categoria
- Agendamento com filtro de exames que mantém os itens já selecionados
- Agendamento com resumo dos exames escolhidos, data mínima e período
- Parceiros em lista simples, organizada em três colunas
- Rodapé com links das redes sociais e novo texto de créditos
- Um título h1 por página, sem pular níveis de título
- Foco visível ao navegar pelo teclado (:focus-visible)
- Ícones decorativos ocultos do leitor de tela; imagens com texto alternativo
- Resultado do filtro de exames anunciado ao leitor de tela
- Fonte mínima de 18 px e animações que respeitam a opção de reduzir movimento
- Auditoria automática WCAG 2.2 AA (axe-core): nenhuma violação nas 7 páginas
- Repositório no GitHub limpo e atualizado com a versão final

Pendente:
- Conferir o site publicado no GitHub Pages (OK)
- Testar com teclado (Tab, Setas, Enter) e NVDA (H, D, K, F) (Pedir ajuda da Terezinha ou Bruna)
- Validar o código HTML e CSS (validador W3C)
- Ligar os formulários de contato e agendamento a um envio real (Não vai rolar =/...)
- Criar a página de login (ENTRAR ainda leva à página Em construção)
- Trocar os links das redes sociais pelos perfis oficiais do Saúde em Dia

Caso eu morra e não consiga editar as cores pós-túmulo:
- Página	--cor-fundo, --cor-texto, --cor-titulo, --cor-texto-destaque, --cor-linha
- Cabeçalho	--cor-header-fundo, --cor-header-texto
- Botões	--cor-botao-fundo, --cor-botao-texto
- Caixas de destaque	--cor-caixa-fundo, --cor-caixa-borda, --cor-caixa-texto, --cor-caixa-titulo
- Destaque da home	--cor-hero-texto, --cor-hero-destaque
- Formulários	--cor-campo-fundo, --cor-campo-texto, --cor-campo-borda, --cor-marcacao
- Rodapé	--cor-footer-fundo, --cor-footer-texto
- Foco do teclado	--cor-foco, --cor-foco-escuro
