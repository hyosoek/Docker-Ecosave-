
FROM postgis/postgis:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=ecosave
ENV POSTGRES_PORT=5433

EXPOSE 5433

VOLUME ["/var/lib/postgresql/data"]

COPY migration.sql /docker-entrypoint-initdb.d/migration.sql

# 실행 명령
CMD ["postgres", "-p", "5433"]