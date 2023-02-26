import { PrismaClient, reservation } from '@prisma/client'

const prisma = new PrismaClient()

export async function getReservations() {
    const reservations : reservation[] = await prisma.reservation.findMany()

    return reservations
}