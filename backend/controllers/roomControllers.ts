import { NextRequest, NextResponse } from "next/server";
import Room from "../models/room";
import { IRoom } from "../models/room";
import ErrorHandler from "../utils/errorHandler";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors";
import APIFilters from "../utils/apiFilters";


// Get all rooms => /api/rooms
export const allRooms = catchAsyncErrors(async (req: NextRequest) => {

  const resPerPage: number = 8;

  // const rooms = await Room.find();

  const { searchParams } = new URL(req.url);
  console.log(searchParams);

  const queryStr: any = {}

  searchParams.forEach((value, key) => {
    queryStr[key] = value;
  })

  const roomsCount: number = await Room.countDocuments()

  const apiFilters = new APIFilters(Room, queryStr).search().filter();

  const rooms:IRoom[] = await apiFilters.query
  const filteredRoomsCount: number = rooms.length

  apiFilters.pagination(resPerPage);
  rooms = await apiFilters.query;

  return NextResponse.json({
    success: true,
    filteredRoomsCount,
    resPerPage,
    rooms,
  })
});
// Create new rooms => /api/rooms
export const newRoom = catchAsyncErrors(async (req: NextRequest) => {

  const body = await req.json()
  const room = await Room.create(body);

  return NextResponse.json(
    {
      success: true,
      room,

    }
  );
});
// Get room details => api/rooms/:id
export const getRoomDetails = catchAsyncErrors(async (req: NextRequest, { params }: { params: { id: string } }

) => {

  const room = await Room.findById(params.id);

  if (!room) {
    throw new ErrorHandler('Room not found', 404)
  }

  return NextResponse.json({
    success: true,
    room,
  });

})



// Update room details => /api/rooms/:id
export const updateRoom = catchAsyncErrors(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  let room = await Room.findById(params.id);
  const body = await req.json()

  if (!room) {
    return NextResponse.json({
      message: "Room not found",
    },
      { status: 404 });
  }

  room = await Room.findByIdAndUpdate(params.id, body, {
    new: true
  });

  return NextResponse.json({
    success: true,
    room,
  })
})

// Delete room details => /api/rooms/:id
export const deleteRoom = catchAsyncErrors(async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {

  const room = await Room.findById(params.id);

  if (!room) {
    throw new ErrorHandler('Room not found', 404)
  }
  // TODO -Delete images assosiated with the room
  await room.deleteOne();

  return NextResponse.json({
    success: true,
  });
});
