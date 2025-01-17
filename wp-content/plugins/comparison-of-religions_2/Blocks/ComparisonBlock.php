<?php

namespace App\Blocks;

class ComparisonBlock {

    public static function register() {
        register_block_type('comparison-religions/topics-block', [
            'editor_script' => 'comparison-block-editor',
            'render_callback' => [self::class, 'render'],
            'attributes' => [
                'topics' => [
                    'type'    => 'array',
                    'default' => [],
                    'source'  => 'meta',
                    'meta'    => 'topics',
                ],
            ]
        ]);

        add_action('enqueue_block_editor_assets', [self::class, 'enqueue_editor_assets']);
    }

    public static function enqueue_editor_assets() {
        wp_enqueue_script(
            'comparison-block-editor',
            plugins_url('/build/block.js', __DIR__),
            ['wp-blocks', 'wp-element', 'wp-editor', 'wp-components'],
            false,
            true
        );
    }

    public static function render($attributes) {
        // Upewnij się, że jesteś na poście typu "comparison" (opcjonalnie):
        if (!is_singular('comparison')) {
            return ''; // Nie pokazuj bloku, jeśli to nie jest pojedyńczy post "comparison"
        }
    
        // Pobierz ID aktualnego posta:
        $post_id = get_the_ID();
    
        // Odczytaj dane z meta:
        $topics = get_post_meta($post_id, 'topics', true);
    
        // Jeśli brak danych, wyświetl komunikat
        if (empty($topics) || !is_array($topics)) {
            return '<div class="topics-block">Brak tematów do wyświetlenia.</div>';
        }
    
        // Buduj HTML
        $output = '<div class="topics-block">';
        
        // Przykładowa prosta struktura (możesz zrobić tabelę, akordeon itd.)
        foreach ($topics as $subtopicObj) {
            // Tytuł tematu
            $subtopic = isset($subtopicObj['subtopic']) ? esc_html($subtopicObj['subtopic']) : '';
            $output .= '<h3>' . $subtopic . '</h3>';
    
            // Lista kościołów w tym temacie
            if (!empty($subtopicObj['churches']) && is_array($subtopicObj['churches'])) {
                $output .= '<ul>';
                foreach ($subtopicObj['churches'] as $church) {
                    $churchName = isset($church['church_name']) ? esc_html($church['church_name']) : '';
                    $description = isset($church['description']) ? esc_html($church['description']) : '';
                    $extraPoints = isset($church['extra_points']) && is_array($church['extra_points'])
                        ? array_map('esc_html', $church['extra_points'])
                        : [];
    
                    $output .= '<li>';
                    $output .= '<strong>' . $churchName . ':</strong> ' . $description;
                    
                    if (!empty($extraPoints)) {
                        $output .= '<ul>';
                        foreach ($extraPoints as $point) {
                            $output .= '<li>' . $point . '</li>';
                        }
                        $output .= '</ul>';
                    }
    
                    $output .= '</li>';
                }
                $output .= '</ul>';
            }
        }
    
        $output .= '</div>'; // .topics-block
    
        return $output;
    }
}
