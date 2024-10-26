<?php

namespace CustomPostsPlugin\Posts;

use CustomPostsPlugin\Core\CptBuilder;
use CustomPostsPlugin\Core\TaxBuilder;

class RegisterPosts
{
    public function __construct() {
       
        new CptBuilder(
            'Spotkanie',   
            'Spotkania',    
            'meetings',     
            5               
        );
    }
}


