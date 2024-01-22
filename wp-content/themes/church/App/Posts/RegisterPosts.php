<?php

Namespace Church\Posts;

use Church\Core\CptBuilder;
use Church\Core\TaxBuilder;

class RegisterPosts
{
    public function __construct(){
        new CptBuilder(
            'Spotkanie',    
            'Spotkania',    
            'meetings',   
            5              
        );
       
    }

    
}
