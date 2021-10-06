import { createConnection, getConnection, ConnectionNotFoundError } from 'typeorm';
import { Request, Response, NextFunction } from 'express';
import defaultOrmConfig from '../db/ormconfig';

export const connect = async (_req: Request, _res: Response, _next: NextFunction): Promise<void> => {
  try {
    await getConnection();
  } catch (e) {
    if ( e instanceof ConnectionNotFoundError){
      console.log('creating an mysql connection!!!')
      await createConnection(defaultOrmConfig);
    }
    else{
      console.log(e)
    }
  }

  _next();
};

export const close = async (req, res, next): Promise<void> => {
  try {
    const connection = await getConnection();
    await connection.close();
    console.log('closing connection')
  } catch (e) {
    throw new Error(e);
  }

  next();
};
