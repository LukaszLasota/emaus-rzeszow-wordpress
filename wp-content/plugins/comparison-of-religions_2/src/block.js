const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl, Button } = wp.components;
const { useBlockProps } = wp.blockEditor;

registerBlockType('comparison-religions/topics-block', {
    title: 'Edytuj Tematy',
    category: 'widgets',
    attributes: {
        topics: {
            type: 'array',
            default: [],
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { topics } = attributes;

        // Dodaje nowy temat (subtopic)
        const addSubtopic = () => {
            const newTopics = [
                ...topics,
                {
                    subtopic: '',
                    churches: [] // Tablica dla wielu kościołów w tym temacie
                }
            ];
            setAttributes({ topics: newTopics });
        };

        // Aktualizuje pole w danym temacie (np. nazwa tematu)
        const updateSubtopicField = (index, field, value) => {
            const newTopics = [...topics];
            newTopics[index][field] = value;
            setAttributes({ topics: newTopics });
        };

        // Usuwa temat
        const removeSubtopic = (index) => {
            const newTopics = [...topics];
            newTopics.splice(index, 1);
            setAttributes({ topics: newTopics });
        };

        // Dodaje nowy kościół w danym temacie
        const addChurch = (subtopicIndex) => {
            const newTopics = [...topics];
            newTopics[subtopicIndex].churches.push({
                church_name: '',
                description: '',
                extra_points: []
            });
            setAttributes({ topics: newTopics });
        };

        // Aktualizuje pole w danym kościele
        const updateChurchField = (subtopicIndex, churchIndex, field, value) => {
            const newTopics = [...topics];
            newTopics[subtopicIndex].churches[churchIndex][field] = value;
            setAttributes({ topics: newTopics });
        };

        // Aktualizuje listę punktów (po przecinku)
        const updateChurchExtraPoints = (subtopicIndex, churchIndex, value) => {
            const newTopics = [...topics];
            newTopics[subtopicIndex].churches[churchIndex].extra_points = value
                .split(',')
                .map((point) => point.trim());
            setAttributes({ topics: newTopics });
        };

        // Usuwa kościół z tematu
        const removeChurch = (subtopicIndex, churchIndex) => {
            const newTopics = [...topics];
            newTopics[subtopicIndex].churches.splice(churchIndex, 1);
            setAttributes({ topics: newTopics });
        };

        return (
            <div {...useBlockProps()}>
                <h3>Edytuj Tematy</h3>

                {/* Iteracja po tematach (subtopics) */}
                {topics.map((item, subtopicIndex) => (
                    <div
                        key={subtopicIndex}
                        style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}
                    >
                        <TextControl
                            label="Nazwa tematu"
                            value={item.subtopic}
                            onChange={(value) => updateSubtopicField(subtopicIndex, 'subtopic', value)}
                        />

                        {/* Dodawanie / edycja kościołów w danym temacie */}
                        <Button
                            isSecondary
                            style={{ marginBottom: '10px' }}
                            onClick={() => addChurch(subtopicIndex)}
                        >
                            Dodaj Kościół
                        </Button>

                        {item.churches.map((church, churchIndex) => (
                            <div
                                key={churchIndex}
                                style={{ border: '1px solid #eee', padding: '10px', marginBottom: '10px' }}
                            >
                                <TextControl
                                    label="Nazwa Kościoła"
                                    value={church.church_name}
                                    onChange={(value) => updateChurchField(subtopicIndex, churchIndex, 'church_name', value)}
                                />

                                <TextareaControl
                                    label="Opis"
                                    value={church.description}
                                    onChange={(value) => updateChurchField(subtopicIndex, churchIndex, 'description', value)}
                                />

                                <TextControl
                                    label="Dodatkowe punkty (rozdzielone przecinkami)"
                                    value={church.extra_points.join(', ')}
                                    onChange={(value) => updateChurchExtraPoints(subtopicIndex, churchIndex, value)}
                                />

                                <Button
                                    isDestructive
                                    onClick={() => removeChurch(subtopicIndex, churchIndex)}
                                >
                                    Usuń kościół
                                </Button>
                            </div>
                        ))}

                        <Button
                            isDestructive
                            onClick={() => removeSubtopic(subtopicIndex)}
                        >
                            Usuń Temat
                        </Button>
                    </div>
                ))}

                <Button
                    isPrimary
                    onClick={addSubtopic}
                >
                    Dodaj Temat
                </Button>
            </div>
        );
    },
    save: () => null, // Serwerowe przetwarzanie danych
});
