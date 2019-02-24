import {Prisma} from '../../prisma/generated/prisma-client'

export interface Context {
    db: Prisma
    userUUID: string
}
