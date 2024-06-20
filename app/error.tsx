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
            <div className="d-flex js justify-content-center align-item-center vh-100">
                <h2>Something went wrong!</h2>
                <div className="text-center">
                    <h2 className='display-4 fw-bold'>{error?.message}</h2>
                    <p className="fs-3">
                        <span className="text-danger">
                            Opps!
                        </span>Something went wrong!
                    </p>
                    <div className="lead">Sorry for inconvenience</div>
                    <button onClick={() => reset?.()}>Try again</button>
                </div>
            </div>
            
        </div>
    )
}