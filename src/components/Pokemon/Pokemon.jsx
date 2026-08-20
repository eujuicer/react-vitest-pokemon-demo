
export default function Pokemon({ data }) {
    return (
        <div>
            <p>Nom du Pokemon : {data.name}</p>
            <p>Type du Pokemon : {data.types.join(' - ')}</p>
            <p>Statistiques :</p>
            <ul>
                {data.stats.map(s => (
                    <li key={s.name}>{s.name} : {s.value}</li>
                ))}
            </ul>
            <img src={data.sprites} alt={`Image de ${data.name}`} />
        </div>
    );
}