-- init.sql
CREATE DATABASE aromacafe;

SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_name = 'users';

