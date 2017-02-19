# teste-escale

Teste para a vaga de desenvolvedor front-end na Escale

O teste a seguir utiliza as linguagens SASS, para pré-processar o estilo da aplicação, pug(antigo Jade) para gerar a marcação dos elementos em HTML e javascript com a API do GitHub, para visualizar os repositórios em que o usuário "wilfernandesjr" deu Starr, jQuery e AJAX.

Primeiramente rode o comando "npm install" para instalar todas as dependências necessárias para execução do projeto.

Para testar a aplicação é necessário acessar o diretório da mesma via terminal, alterar a variável proxyLink, com o link do seu ambiente local, que se encontra na linha 22 do Gulpfile.js "var proxyLink = "http://localhost/~andreromario/teste-escale/dist/";" e então dar o comando "gulp" no terminal.

A pasta dist/ é aonde se encontram os arquivos gerados pelo gulp.