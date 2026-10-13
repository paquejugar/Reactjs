function ShowItems({data, onUpdate}) {
    return ( 
        <> 
            <section className="container">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Text</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.text}</td>
                                <td><button type="button" className="update-btn" onClick={() => onUpdate(item)}>Update</button></td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
            </section>
        </>
    );
}

export default ShowItems;