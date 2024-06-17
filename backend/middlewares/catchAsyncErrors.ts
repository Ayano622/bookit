import { errorMonitor } from "events";
import {NextRequest,NextResponse} from "next/server";

type HandlerFunction = (req: NextRequest, params: any) => Promise<NextResponse>;

interface IvalidationError {
    message: string
}

export const catchAsyncErrors =
(handler: HandlerFunction) => async (
    req: NextRequest, params: any) => {
        try {
            return await handler(req, params);
        } catch (error: any) {

            console.log(error);
            if (error?.name === 'CastError') {
                error.message = `Resource not found. Invalid ${error?.path}`
                error.statusCode = 400
            }

            if (error?.name === 'ValidationError') {
                error.message = Object.values<IvalidationError>(error.errors).map((value) => value.message);
                error.statusCode = 400
            }



            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: error.statusCode || 500
                }
            );
        }
    }
