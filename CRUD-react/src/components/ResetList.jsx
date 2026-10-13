function ResetList({ onReset }) {
    return (  
        <>
            <div className="container">
                <button 
                    type="button" 
                    className="reset-btn" 
                    onClick={onReset}
                >Reset</button>
            </div>
        </>
    );
}

export default ResetList;