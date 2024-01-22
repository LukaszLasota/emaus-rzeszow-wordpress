<?php

Namespace Church\Posts\RegisterPosts;

use Church\Core\CptBuilder;
use Church\Core\TaxBuilder;

class RegisterPosts
{
    public function __construct(){
        new CptBuilder(
            'Spotkanie',    // pojedyncza nazwa dla CPT, np. 'Spotkanie'
            'Spotkania',    // liczba mnoga nazwy, np. 'Spotkania'
            'spotkania',    // slug dla CPT, np. 'spotkania'
            5               // pozycja w menu w panelu administracyjnym
        );
       
    }

    
}
