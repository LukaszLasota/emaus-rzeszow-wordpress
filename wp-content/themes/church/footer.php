<footer class="footer">
    <div class="footer__container container">

        <div class="footer__menu footer__menu--1">
            <?php if (is_active_sidebar('footer-header-1')) : ?>
                <?php dynamic_sidebar('footer-header-1'); ?>
            <?php else: ?>
                <h4>MENU</h4>
                <?php wp_nav_menu(array('theme_location' => 'footer-one')); ?>
            <?php endif; ?>
        </div>

        <div class="footer__menu footer__menu--2">
            <?php if (is_active_sidebar('footer-header-2')) : ?>
                <?php dynamic_sidebar('footer-header-2'); ?>
            <?php else: ?>
                <h4>NA SKRÓTY</h4>
                <?php wp_nav_menu(array('theme_location' => 'footer-two')); ?>
            <?php endif; ?>
        </div>

        <div class="footer__contact">
            <?php if (is_active_sidebar('footer-header-3')) : ?>
                <?php dynamic_sidebar('footer-header-3'); ?>
            <?php else: ?>
                <h4>KONTAKT</h4>
                <?php wp_nav_menu(array('theme_location' => 'footer-three')); ?>
            <?php endif; ?>
        </div>

    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>