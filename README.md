# SafraNet — Rastreabilidade no agronegócio

**SafraNet** é um protótipo de interface web que simula uma experiência de rastreabilidade de produtos agropecuários, com foco em transparência de origem, conformidade regulatória e uso de blockchain como narrativa técnica. O projeto foi desenvolvido como trabalho acadêmico e apresenta um fluxo completo: do lote do produto à jornada “da terra à mesa”, com certificado digital em PDF.

## Objetivo

Demonstrar, de forma didática e visual, como um consumidor ou auditor poderia consultar informações sobre um corte de carne (neste caso, picanha): lote, origem geográfica, etapas da cadeia produtiva e metadados de verificação inspirados em práticas reais de rastreio, saneamento e sustentabilidade (incluindo referências a órgãos e normas brasileiras no contexto do protótipo).

## Principais funcionalidades

- **Página principal (`index.html`)**: cabeçalho com identidade SafraNet, selo de autenticidade, card de conformidade (EUDR, MAPA/SIF, IBAMA, INDEA-MT), imagem do produto, selo de origem com bandeira de Mato Grosso, linha do tempo interativa com acordeão (detalhes expandidos ao toque), bloco de certificação blockchain (hash e protocolo fictícios para demonstração), botões de download do certificado em PDF e link para mapa.
- **Certificado em PDF**: geração no navegador (jsPDF) com layout formal, hash de transação de exemplo e bloco de assinatura digital qualificada fictícia (demonstração visual).
- **Páginas institucionais**: `lgpd.html` (política de privacidade alinhada à LGPD), `blockchain.html` (explicação educativa sobre blockchain no contexto do agronegócio), `carreiras.html` (vagas e contato de RH fictícios).
- **Rodapé** com links para essas páginas e dados de contato fictícios, layout responsivo pensado para celular.

## Stack e recursos

- HTML5, CSS utilitário via [Tailwind CSS](https://tailwindcss.com/) (CDN).
- JavaScript para PDF ([jsPDF](https://github.com/parallax/jsPDF)) e interação do acordeão da timeline.
- Fonte [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts).
- Ativos locais: logo SVG (`safranet.svg`), imagens do produto e da bandeira, favicon baseado na logo.

## Estrutura do repositório

| Arquivo / pasta | Descrição |
|-----------------|-----------|
| `index.html` | Página principal do rastreio do lote |
| `lgpd.html`, `blockchain.html`, `carreiras.html` | Conteúdo institucional e educativo |
| `safranet.svg` | Marca e favicon |
| `picanha.png`, `Bandeira_de_Mato_Grosso.svg.png` | Imagens de apoio |

## Como executar localmente

Trata-se de um site estático: abra `index.html` no navegador ou sirva a pasta com qualquer servidor HTTP local (por exemplo, extensão “Live Server” no VS Code/Cursor). Não é necessário build nem backend.

## Observação

Textos, hashes, protocolos, empresas e contatos são **fictícios ou ilustrativos**, criados para o cenário acadêmico. Não constituem certificação legal nem integração real com blockchain ou órgãos públicos.

---

Licença e uso: projeto acadêmico; adapte créditos e conteúdo conforme as regras da sua instituição.
