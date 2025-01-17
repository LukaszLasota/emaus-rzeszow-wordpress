import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function CorOptionsApp() {
    const [comparisons, setComparisons] = useState([]); // lista istniejących postów
    const [newTitle, setNewTitle] = useState('');       // tytuł nowego posta
    const [rows, setRows] = useState([
        // Przykładowy wiersz na start (możesz zacząć od pustej tablicy)
        {
            topic: "",
            catholic: [""],
            protestant: [""]
        }
    ]);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetchComparisonList();
    }, []);

    /** Pobiera listę wszystkich 'comparison' */
    function fetchComparisonList() {
        fetch(`${ComparisonData.restUrl}comparison`, {
            method: 'GET',
            headers: { 'X-WP-Nonce': ComparisonData.nonce }
        })
            .then((resp) => {
                if (!resp.ok) throw new Error(`Błąd GET: ${resp.status}`);
                return resp.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) throw new Error(`Otrzymano nie-tablicę`);
                setComparisons(data);
            })
            .catch((err) => {
                setError(err.message);
                setComparisons([]);
            });
    }

    /** Tworzy nowy post 'comparison' z tytułem i JSON-em w content */
    function createComparison() {
        // Konwertujemy 'rows' na JSON – to będzie zawartość postu
        const jsonContent = JSON.stringify(rows);

        fetch(`${ComparisonData.restUrl}comparison`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': ComparisonData.nonce
            },
            body: JSON.stringify({
                title: newTitle || "Porównanie",
                content: jsonContent
            })
        })
            .then((resp) => {
                if (!resp.ok) throw new Error(`Błąd POST: ${resp.status}`);
                return resp.json();
            })
            .then(() => {
                setNewTitle('');
                setRows([]); // wyzeruj formularz, jeśli chcesz
                fetchComparisonList();
            })
            .catch((err) => setError(err.message));
    }

    /** Dodaje nowy wiersz-temat */
    function addRow() {
        setRows([
            ...rows,
            { topic: "", catholic: [""], protestant: [""] }
        ]);
    }

    /** Obsługa zmiany w polu 'topic' */
    function handleTopicChange(index, value) {
        const newRows = [...rows];
        newRows[index].topic = value;
        setRows(newRows);
    }

    /** Obsługa zmiany w polu Catholic lub Protestant */
    function handleChurchChange(index, churchType, subIndex, value) {
        const newRows = [...rows];
        newRows[index][churchType][subIndex] = value;
        setRows(newRows);
    }

    /** Dodaje linię w Kościele Rzymskokatolickim / Zielonoświątkowym */
    function addChurchLine(index, churchType) {
        const newRows = [...rows];
        newRows[index][churchType].push("");
        setRows(newRows);
    }

    return (
        <div style={{ background: '#fff', padding: '1rem' }}>
            <h2>Comparisons - Panel React (rozbudowany)</h2>

            {error && (
                <div style={{ background: 'pink', marginBottom: '1rem' }}>
                    <strong>Błąd: </strong> {error}
                </div>
            )}

            {/* Formularz do tworzenia nowego postu */}
            <div style={{ marginBottom: '1rem' }}>
                <label>Nowy tytuł:</label> <br />
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    style={{ width: '200px' }}
                />
            </div>

            <h3>Wiersze / tematy:</h3>
            {rows.map((row, rIndex) => (
                <div key={rIndex} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
                    <label>Temat:</label>
                    <input
                        type="text"
                        value={row.topic}
                        onChange={(e) => handleTopicChange(rIndex, e.target.value)}
                        style={{ marginLeft: '8px', width: '200px' }}
                    />

                    {/* Kościół Rzymskokatolicki */}
                    <div style={{ marginTop: '1rem' }}>
                        <strong>Kościół Rzymskokatolicki:</strong>
                        {row.catholic.map((line, cIdx) => (
                            <div key={cIdx} style={{ marginLeft: '20px' }}>
                                <textarea
                                    style={{ width: '80%' }}
                                    rows={2}
                                    value={line}
                                    onChange={(e) => handleChurchChange(rIndex, 'catholic', cIdx, e.target.value)}
                                />
                            </div>
                        ))}
                        <button onClick={() => addChurchLine(rIndex, 'catholic')}>Dodaj linię w Rzymskokatolickim</button>
                    </div>

                    {/* Kościół Zielonoświątkowy */}
                    <div style={{ marginTop: '1rem' }}>
                        <strong>Kościół Zielonoświątkowy:</strong>
                        {row.protestant.map((line, pIdx) => (
                            <div key={pIdx} style={{ marginLeft: '20px' }}>
                                <textarea
                                    style={{ width: '80%' }}
                                    rows={2}
                                    value={line}
                                    onChange={(e) => handleChurchChange(rIndex, 'protestant', pIdx, e.target.value)}
                                />
                            </div>
                        ))}
                        <button onClick={() => addChurchLine(rIndex, 'protestant')}>Dodaj linię w Zielonoświątkowym</button>
                    </div>
                </div>
            ))}

            <button onClick={addRow}>Dodaj kolejny wiersz (temat)</button>

            <hr />

            <button onClick={createComparison}>Zapisz jako nowy post (comparison)</button>

            <hr />

            {/* Lista istniejących wpisów (z bazy) */}
            <h3>Istniejące comparison:</h3>
            <ul>
                {comparisons.map((item) => (
                    <li key={item.ID}>
                        #{item.ID} – <strong>{item.title}</strong>
                        {/* item.content to JSON – można je rozkodować i wyświetlić */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('cor-react-root');
    if (rootEl) {
        const root = createRoot(rootEl);
        root.render(<CorOptionsApp />);
    }
});
