import mongoose, { Schema, Document } from "mongoose";

export enum TripStatus {
  Booked = "Booked",
  InTransit = "In Transit",
  ReachedDestination = "Reached Destination",
  Delivered = "Delivered",
}

export enum TripStatusCode {
  Booked = "BKD",
  InTransit = "INT",
  ReachedDestination = "RD",
  Delivered = "DEL",
}

export interface Trip extends Document {
  tripId: string;
  transporter: string;
  tripStartTime: Date;
  currentStatusCode: TripStatusCode;
  currenStatus: TripStatus;
  phoneNumber: number;
  etaDays?: number;
  distanceRemaining?: number;
  tripEndTime?: Date;
  source: string;
  sourceLatitude: number;
  sourceLongitude: number;
  dest: string;
  destLatitude: number;
  destLongitude: number;
  lastPingTime: Date;
  createdAt: Date;
}

const TripSchema: Schema<Trip> = new Schema({
  tripId: { type: String, required: true },
  transporter: {
    type: String,
    required: true,
  },
  tripStartTime: { type: Date, required: true },
  currentStatusCode: {
    type: String,
    enum: Object.values(TripStatusCode),
    required: true,
  },
  currenStatus: {
    type: String,
    enum: Object.values(TripStatus),
    required: true,
  },
  phoneNumber: { type: Number, required: true },
  etaDays: { type: Number },
  distanceRemaining: { type: Number },
  tripEndTime: { type: Date },
  source: { type: String, required: true },
  sourceLatitude: { type: Number, required: true },
  sourceLongitude: { type: Number, required: true },
  dest: { type: String, required: true },
  destLatitude: { type: Number, required: true },
  destLongitude: { type: Number, required: true },
  lastPingTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

export const TripModel =
  (mongoose.models.Trip as mongoose.Model<Trip>) ||
  mongoose.model<Trip>("Trip", TripSchema);
