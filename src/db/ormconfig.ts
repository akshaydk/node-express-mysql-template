import '../init'
import path from 'path'

type configType = {
  name: 'default'
  type: 'mysql'
  host: string
  port: number
  username: string
  password: string
  database: string
  synchronize: boolean
  entities: Array<string>
  migrationsTableName: string
  migrations: Array<string>
  cli: {
    migrationsDir: string
  }
}

const ENTITIES_PATH = path.resolve(__dirname, '..', 'entity', '**.*')
const MIGRATIONS_PATH = path.resolve(__dirname, 'migrate', '**.*')

const {
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME
} = process.env

const config: configType = {
  name: 'default',
  type: 'mysql',
  host: DB_HOST || 'localhost',
  port: parseInt(DB_PORT) || 3306,
  username: DB_USERNAME || 'root',
  password: DB_PASSWORD || 'root',
  database: DB_NAME || 'ultimate_development',
  synchronize: false,
  entities: [ENTITIES_PATH],
  migrationsTableName: 'schema_migrations',
  migrations: [MIGRATIONS_PATH],
  cli: {
    migrationsDir: path.resolve(__dirname, 'migrate')
  }
}

export default config