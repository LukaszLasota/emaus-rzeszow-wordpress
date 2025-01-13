const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl, Button } = wp.components;
const { useBlockProps } = wp.blockEditor;

registerBlockType('comparison-religions/topics-block', {
    title: 'Edytor Tematów',
    category: 'widgets',
    attributes: {
        topics: {
            type: 'array',
            default: [],
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { topics } = attributes;

        const addTopic = () => {
            const newTopics = [...topics, { church_name: '', description: '', extra_points: [] }];
            setAttributes({ topics: newTopics });
        };

        const updateTopic = (index, field, value) => {
            const newTopics = [...topics];
            newTopics[index][field] = value;
            setAttributes({ topics: newTopics });
        };

        const removeTopic = (index) => {
            const newTopics = [...topics];
            newTopics.splice(index, 1);
            setAttributes({ topics: newTopics });
        };

        return (
            <div {...useBlockProps()}>
                <h4>Edytuj Tematy</h4>
                {topics.map((topic, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                        <TextControl
                            label="Nazwa Kościoła"
                            value={topic.church_name}
                            onChange={(value) => updateTopic(index, 'church_name', value)}
                        />
                        <TextareaControl
                            label="Opis"
                            value={topic.description}
                            onChange={(value) => updateTopic(index, 'description', value)}
                        />
                        <TextareaControl
                            label="Dodatkowe punkty (rozdzielone przecinkami)"
                            value={topic.extra_points.join(', ')}
                            onChange={(value) =>
                                updateTopic(index, 'extra_points', value.split(',').map((point) => point.trim()))
                            }
                        />
                        <Button
                            isDestructive
                            onClick={() => removeTopic(index)}
                            style={{ marginTop: '10px' }}
                        >
                            Usuń
                        </Button>
                    </div>
                ))}
                <Button isPrimary onClick={addTopic}>
                    Dodaj Temat
                </Button>
            </div>
        );
    },
    save: () => {
        return null; // Dane są renderowane dynamicznie.
    },
});
