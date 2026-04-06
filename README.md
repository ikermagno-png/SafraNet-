# Projeto SafraNet - Documentação

Este é o repositório do projeto **SafraNet**, criado para o seu trabalho de escola! Abaixo você encontra o passo a passo de como rodar, editar, salvar (comitar) e hospedar o seu site de graça no GitHub.

---

## 🚀 1. Como rodar o site e continuar editando

Como o site é feito apenas com HTML, CSS (Tailwind) e JavaScript básico, você não precisa instalar servidores complexos.

1. **Abrir o código:** Abra a pasta do projeto (`Site Top`) no seu editor de código favorito (como o **Cursor** ou **VS Code**).
2. **Visualizar o site:** 
   - Você pode simplesmente dar um clique duplo no arquivo `site.html` na sua pasta para abri-lo no navegador (Chrome, Edge, etc).
   - **Dica Pro:** No Cursor/VS Code, instale a extensão **"Live Server"**. Depois de instalada, clique com o botão direito no arquivo `site.html` e selecione **"Open with Live Server"**. Isso fará com que o site atualize sozinho toda vez que você salvar o código!
3. **Editando:** Sempre que quiser mudar algo, edite o `site.html`, aperte `Ctrl + S` para salvar e veja a mágica acontecer no navegador.

---

## 💾 2. Como salvar (fazer o Commit) para o GitHub

Para guardar o seu projeto na nuvem e não perder nada, usamos o Git e o GitHub.

### Passo a passo inicial (se ainda não tiver um repositório):
1. Crie uma conta no [GitHub](https://github.com/).
2. No GitHub, clique no botão **"New"** (Novo repositório).
3. Dê um nome ao repositório (ex: `projeto-safranet-escola`), deixe como **Public** (Público) e clique em **Create repository**.

### Enviando o código pelo Terminal (no Cursor ou VS Code):
Abra o terminal no seu editor (`Ctrl + '` ou vá em *Terminal > New Terminal*) e digite os comandos abaixo, apertando `Enter` após cada um:

```bash
# 1. Inicia o git na sua pasta (só precisa fazer na primeira vez)
git init

# 2. Adiciona todos os seus arquivos (o ponto é importante!)
git add .

# 3. Cria um "pacote" com as suas mudanças e uma mensagem
git commit -m "Meu primeiro commit do site SafraNet"

# 4. Conecta sua pasta local com o GitHub (copie o link do seu repositório criado no passo 2)
# Exemplo: git remote add origin https://github.com/SEU_USUARIO/projeto-safranet-escola.git
git remote add origin URL_DO_SEU_REPOSITORIO

# 5. Envia o código para o GitHub
git push -u origin main
```

*(Nota: Se a sua branch principal se chamar `master` em vez de `main`, use `git push -u origin master`)*

### Para atualizações futuras:
Sempre que você alterar o código e quiser salvar no GitHub, basta rodar:
```bash
git add .
git commit -m "Atualizei a imagem da picanha"
git push
```

---

## 🌍 3. Como hospedar o site (GitHub Pages)
O GitHub oferece uma forma gratuita de colocar o seu site no ar para que os professores e colegas possam acessar pelo celular ou computador!

1. Vá até a página do seu repositório no GitHub.
2. Clique na aba **"Settings"** (Configurações) com o ícone de engrenagem.
3. No menu lateral esquerdo, desça até a seção "Code and automation" e clique em **"Pages"**.
4. Na seção **"Build and deployment"**, procure por **"Source"** e selecione **"Deploy from a branch"**.
5. Logo abaixo, em **"Branch"**, mude de `None` para `main` (ou `master`) e clique em **"Save"**.
6. Aguarde cerca de 1 a 2 minutos. Atualize a página e o GitHub mostrará um link no topo dizendo: *"Your site is live at https://seu-usuario.github.io/projeto-safranet-escola"*.

**Importante:** Para que o GitHub Pages encontre seu site automaticamente, é recomendado renomear o arquivo `site.html` para `index.html`. Se você mantiver como `site.html`, o link do seu site será: `https://seu-usuario.github.io/projeto-safranet-escola/site.html`.

Pronto! Agora você tem um site profissional, flutuante e online para o seu projeto! 🎉