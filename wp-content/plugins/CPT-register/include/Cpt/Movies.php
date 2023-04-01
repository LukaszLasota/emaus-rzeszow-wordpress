<?php

namespace Testapp\Cpt;

use Testapp\Core\CptBuilder;
use Testapp\Core\TaxBuilder;

class Movies
{
    public function __construct(){
        new CptBuilder('Movie', 'Movies', 'post_movie');
        new TaxBuilder('xssx','post_movie');
    }

    
}
