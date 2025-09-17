<?php
/**
 * Dynamic Images Block Render Template
 * Dynamiczny blok – funkcja generująca element <picture> z rozbudowanym srcset.
 * 
 * @var array $attributes Block attributes
 */

$imgDesktopID = isset($attributes['imgDesktopID']) ? (int) $attributes['imgDesktopID'] : 0;
$imgTabletID  = isset($attributes['imgTabletID'])  ? (int) $attributes['imgTabletID']  : 0;
$imgMobileID  = isset($attributes['imgMobileID'])  ? (int) $attributes['imgMobileID']  : 0;

// ----- Dla Desktop -----
$desktop_data    = $imgDesktopID ? wp_get_attachment_image_src( $imgDesktopID, 'full' )       : null;
$desktop_srcset  = $imgDesktopID ? wp_get_attachment_image_srcset( $imgDesktopID, 'full' )   : '';
$desktop_sizes   = $imgDesktopID ? wp_get_attachment_image_sizes( $imgDesktopID, 'full' )    : '';

$desktop_alt = '';
if ( $imgDesktopID ) {
    $desktop_alt = get_post_meta( $imgDesktopID, '_wp_attachment_image_alt', true );
    $desktop_alt = esc_attr( $desktop_alt );
}

// ----- Dla Tablet -----
$tablet_data     = $imgTabletID ? wp_get_attachment_image_src( $imgTabletID, 'full' )       : null;
$tablet_srcset   = $imgTabletID ? wp_get_attachment_image_srcset( $imgTabletID, 'full' )    : '';
$tablet_sizes    = $imgTabletID ? wp_get_attachment_image_sizes( $imgTabletID, 'full' )     : '';

// ----- Dla Mobile -----
$mobile_data     = $imgMobileID ? wp_get_attachment_image_src( $imgMobileID, 'full' )       : null;
$mobile_srcset   = $imgMobileID ? wp_get_attachment_image_srcset( $imgMobileID, 'full' )    : '';
$mobile_sizes    = $imgMobileID ? wp_get_attachment_image_sizes( $imgMobileID, 'full' )     : '';

if ( !$desktop_data && !$tablet_data && !$mobile_data ) {
    return;
}
?>

<div class="wp-block-custom-block-package-dynamic-images">
    <picture>
        <?php if ( $mobile_data ) : ?>
            <source
                srcset="<?php echo esc_attr( $mobile_srcset ); ?>"
                sizes="<?php echo esc_attr( $mobile_sizes ); ?>"
                media="(max-width: 480px)"
            />
        <?php endif; ?>

        <?php if ( $tablet_data ) : ?>
            <source
                srcset="<?php echo esc_attr( $tablet_srcset ); ?>"
                sizes="<?php echo esc_attr( $tablet_sizes ); ?>"
                media="(max-width: 768px)"
            />
        <?php endif; ?>

        <img
            src="<?php 
                if ( $desktop_data ) {
                    echo esc_url( $desktop_data[0] );
                } elseif ( $tablet_data ) {
                    echo esc_url( $tablet_data[0] );
                } elseif ( $mobile_data ) {
                    echo esc_url( $mobile_data[0] );
                }
            ?>"
            alt="<?php echo $desktop_alt; ?>"

            <?php
            if ( $desktop_data ) {
                echo 'width="' . intval( $desktop_data[1] ) . '" height="' . intval( $desktop_data[2] ) . '"';
            }

            if ( $desktop_srcset ) {
                echo ' srcset="' . esc_attr( $desktop_srcset ) . '"';
            }
            if ( $desktop_sizes ) {
                echo ' sizes="' . esc_attr( $desktop_sizes ) . '"';
            }
            ?>
        />
    </picture>
</div>