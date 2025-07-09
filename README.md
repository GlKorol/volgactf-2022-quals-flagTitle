## Описание
Приложение написано на React JS. Флаг находится в поле title, и выводится посимвольно. 

### Запуск
В директории, рядом с Dockerfile:
```bash
docker build -t flag_title .

docker run -p 30001:3000 -ti flag_title
```   