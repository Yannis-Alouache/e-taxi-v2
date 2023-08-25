import { PrismaClient, reservation } from '@prisma/client'


const prisma = new PrismaClient()

export async function createReservation(departure_address: string, arrival_address: string, phone_number : string, date : string) {
    const reservation : reservation = await prisma.reservation.create({
        data: {
            departure_address: departure_address,
            arrival_address: arrival_address,
            phone_number: phone_number,    
            date: date             
        }
    })
    
    return reservation
}