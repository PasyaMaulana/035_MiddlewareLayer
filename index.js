import express from 'express';
import pg from 'pg';
import Joi from 'joi'

const app = express()
const port = 3000
const { Pool } = pg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Arfan040707',
    port: 5432,
})

app,use(express.json())
app.user(express.urlencoded({ extended: true}))