FROM node:17-buster-slim
RUN useradd -ms /bin/bash volgactf
COPY dist /home/volgactf/
WORKDIR /home/volgactf/dist

RUN npm install --production=false && npm run build

RUN chown -R volgactf:volgactf /home/volgactf/dist
USER volgactf
EXPOSE 3000
CMD npm start
