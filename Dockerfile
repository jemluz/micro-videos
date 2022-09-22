FROM node:14.15.4-slim

# não trabalha com o usuário "root" para evitar vulnerabilidades, usa o "node" ($UID = 1000) no lugar

USER node

WORKDIR /home/node/app

# não lê nada mas mantem rodando
CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]