

function PageInsert() {

    const [name, setName] = useAState('');
    const [data, setData] =useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEvent = {
            name: name,
            data: data,
            price: price,
            description: description
        };

        try {
            await axios.post('https://eventmasterapi-v3zw.onrender.com/api/events', newEvent);
            alert('Event inserted successfully!');
            setName('');
            setData('');
            setPrice('');
            setDescription('');
        } catch (error) {
            console.error('Error inserting event:', error);
            alert('Error inserting event. Please try again.');

        }
    };
    return (
        <form onSumbmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Data" value={data} onChange={(e) => setData(e.target.value)} />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Insert Event</button>
        </form>
    );
}

export default PageInsert;