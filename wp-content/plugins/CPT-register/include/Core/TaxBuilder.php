<?php

namespace Testapp\Core;

Class TaxBuilder {

  public $posttype;
  public $slug;

    public function __construct($slug,$postype)
    {
      $this->posttype = $postype;
      $this->slug = $slug;
        // Register the post type
       
        // add_action( 'init', 'test', 0 );
        add_action('init', array($this, 'test'));
     }
    


        public function test (){

            // add_action( 'init', 'test' );
            // var_dump($nedasdsdaw);die;
            $labels = array(
                'name' => __( 'Keys' ),
                'singular_name' => __( 'Key' ),
                'search_items' => __( 'Search Keys' ),
                'all_items' => __( 'All Keys' ),
                'parent_item' => __( 'Parent Key' ),
                'parent_item_colon' => __( 'Parent Key:' ),
                'edit_item' => __( 'Edit Key' ), 
                'update_item' => __( 'Update Key' ),
                'add_new_item' => __( 'Add New Key' ),
                'new_item_name' => __( 'New Key Name' ),
                'menu_name' => __( 'Keys' ),
              );
              
              $args = array(
                'hierarchical' => true,
                'labels' => $labels,
                'show_ui' => true,
                'show_admin_column' => true,
                'query_var' => true,
                'rewrite' => array( 'slug' => $this->slug ),
              );
              
              register_taxonomy( $this->slug, array( $this->posttype ), $args );
              

        }
      
    
   

    

}
