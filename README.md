# Curso Git e Github
Repositório feito usando o Github por linha de comando

```
bash
# inicializa um repositório
git init

# descreve os detalhes do repositório
git status

# adiciona um arquivo para ser comitado
git add [nome do arquivo]/[.(para todos os arquivos)]

# commit com a mensagem entre aspas
git commit -m '[mensagem]'

# github para de monitorar o arquivo
git rm --cached [nome do arquivo]

# visualiza as modificações feitas
git log

# mostra os commits em apenas uma linha
git log --oneline

# mostra os commits com as modificações dos arquivos
git log -p

# mostra as ações como linhas seguidas
git log --graph

# configura o usuario e o email respectivamente
git config --local user.name "nome"
git config --local user.email "email"

# Trabalhando com branchs

- Criando uma branch
git branch [nome_da_branch]

- Navegando entre branchs
git checkout [nome_da_branch]

- Navegando e criando uma branch
git checkout -b [nome_Da_branch]

- Fazendo merge de branchs
git merge [nome_da_branch]

- Caso tenha uma branch master e uma branch teste, este comando escreverá as mudanças da master após os commits da branch teste
git rebase [nome_da_abranch]

# Revertendo as mudanças feitas

- Discarta as mudanças feitas em um arquivo
git restore [nome_do_arquivo]

- Remove o(s) arquivo(s) do 'stage'(após ter colocado 'git add [nome_do_arquivo]')
git restore --staged [nome_do_arquivo]

- Reverte as mudanças de um commit
-- o hash do commit é amostrado ao ser digitado git log
git revert [hash_do_commit]

# Guardando alterações para fazer depois

- Comando para guardar as alterações
git stash

- mostra os stashes feitos
git stash list

- retorna para a stash feita anteriormente
git stash apply [numero_da_stash]

- apos o comando anterior a stash continuaria na lista por isso se faz o comando
git stash drop

- por isso há o comando para fazer ambos os comandos anteriores
git stash pop
```	