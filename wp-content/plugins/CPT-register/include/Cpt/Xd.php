<?php

namespace Testapp\Cpt;

use Testapp\Core\CptBuilder;
use Testapp\Core\TaxBuilder;

class Xd
{
    public function __construct(){
        new CptBuilder('Xd', 'xs', 'post_moviexs');
        new TaxBuilder('tax_posttx','post_moviexs');
    }
}
