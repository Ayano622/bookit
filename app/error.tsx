'use client' 

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset?: () => void;
}) {
    console.log(error);
    
    return (
        <div>
            <div className="d-flex js justify-content-center align-items-center vh-100">
                
                <div className="text-center">
                    <h2 className='display-4 fw-bold'>{error?.message}</h2>
                    <p className="fs-3">
                        <span className="text-danger">
                            Opps!
                        </span>Something went wrong!
                    </p>
                    <p className="lead">Sorry for inconvenience</p>
                    <button className="btn btn-primary" onClick={() => reset?.()}>Try again</button>
                </div>
            </div>
            
        </div>
    )
}