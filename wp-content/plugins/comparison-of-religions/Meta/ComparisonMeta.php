<?php

namespace App\Meta;

class ComparisonMeta {

    public static function register() {
        register_post_meta('comparison', 'topics', [
            'type'         => 'array',
            'single'       => true,
            'show_in_rest' => [
                'schema' => [
                    'type'  => 'array',
                    'items' => [
                        'type'       => 'object',
                        'properties' => [
                            'church_name' => [
                                'type' => 'string'
                            ],
                            'details' => [
                                'type'       => 'object',
                                'properties' => [
                                    'description'   => [ 'type' => 'string' ],
                                    'extra_points'  => [
                                        'type'  => 'array',
                                        'items' => [ 'type' => 'string' ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ],
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ]);
    }
}
