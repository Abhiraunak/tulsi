"use client"
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import { useEffect, useState } from "react"

type Booking = {
  id: string
  name: string
  phoneNumber: string
  address : string
  service: string
}

export default function TableShow() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // get the details of the booking from the database
  const fetchBookings = async () => {
  try {
    const res = await fetch("/api/booking", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!res.ok) throw new Error("Failed to fetch bookings");

    const data = await res.json();
    setBookings(data);
  } catch (error) {
    console.error("Error fetching bookings:", error);
  }
}

  // constantly checking the newly enter data in the database

  useEffect(() => {
    fetchBookings()

    const interval = setInterval(() => {
      fetchBookings()
    }, 5000) //refresh it in every 5 seconds

    return () => clearInterval(interval)
  }, [])


  return (
    <Table>
      <TableCaption>A list of our recent booking.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px] font-extrabold text-xl text-green-800">Name</TableHead>
          <TableHead className="w-[200px] font-extrabold text-xl text-green-800">Phone Number</TableHead>
          <TableHead className="w-[500px] font-extrabold text-xl text-green-800">Address</TableHead>
          <TableHead className="w-[200px] font-extrabold text-xl text-green-800">Service</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bookings.map((booking) => (
          <TableRow key={booking.id}>
            <TableCell className="font-medium">{booking.name}</TableCell>
            <TableCell>{booking.phoneNumber}</TableCell>
            <TableCell>{booking.address}</TableCell>
            <TableCell>{booking.service}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
