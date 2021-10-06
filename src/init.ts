import * as dotenv from 'dotenv'

dotenv.config({
  path: './.env.development'
})

console.log(`starting ${process.env.STAGE} environment`)