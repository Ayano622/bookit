import { IRoom } from '@/backend/models/room';
import React from 'react'


interface Props {
  room: IRoom;
}

const RoomFeatures = ({room}: Props) => {
  return (
    <div className="features mt-5">
            <h3 className="mb-4">Features:</h3>
            <div className="room-feature">
              <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
              <p>{room?.guestCapacity} Guests</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
              <p>{room?.numOfBeds} Beds</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-check text-success" aria-hidden="true"></i>
              <p>{room?.isBreakfast} Breakfast</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-check text-success" aria-hidden="true"></i>
              <p>{room?.isInternet} Internet</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-check text-success" aria-hidden="true"></i>
              <p>{room?.isAirConditioned} Air Conditioned</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-check text-success" aria-hidden="true"></i>
              <p>{room?.isPetsAllowed} Pets Allowed</p>
            </div>
            <div className="room-feature">
              <i className="fa fa-check text-success" aria-hidden="true"></i>
              <p>{room?.isRoomCleaning} Room Cleaning</p>
            </div>
          </div>
  )
}

export default RoomFeatures