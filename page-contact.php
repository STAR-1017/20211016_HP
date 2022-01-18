<?php get_header("post"); ?>

        <main id="main" class="l-main">

            <div class="l-page_head l-page_head-s">
                <div class="l-page_head_contents head_contact-waterworks">
                    <div class="l-page_head_box">
                        <h2 class=" typesquare_option">お問い合わせ</h2>
                    </div>
                </div>
            </div>

            <div class="page_wrap">
                <div class="page_contents contents_contact-waterworks">

                    <div class="page_pankuzu pankuzu_contact-waterworks">
                        <p><a href="<?php echo home_url();?>">TOP</a> / <a href="<?php echo home_url();?>/contact">お問い合わせ</a></p>
                    </div>

                    <section class="sec sec_contact-waterworks">
                        <h3 class="form-title typesquare_option">お問い合わせ</h3>
                      
                        <div class="form-main">

                                <form method="post" action="contact.php" onsubmit="return false;" enctype="multipart/form-data">
                                    <input type="hidden" name="page" value="confirm">
                                    <input type="hidden" name="token" value="221mihcwsrwgwko8gcw00o0s0">

                                   <?php echo do_shortcode( '[contact-form-7 id="20" title="contact-form"]' ); ?>

                               </form>

                        </div>

                    </section>

                </div>
            </div>

            <!-- foot-contact -->
            <section class="foot_contact">
                <div class="wrap">
                    <h3 class="contact_ttl">Contact us</h3>
                    <div class="contact_ttl_en">お問い合わせ</div>
                    <p class="contact_txt">お見積りやご相談などまずは<br class="cmn-for-sp">お気軽にお問い合わせください。</p>
                    <div class="contact_list">
                        <a href="<?php echo home_url();?>/contact" class="contact_btn typesquare_option">
                            <div class="txt typesquare_option"><span style="margin-right:20px;"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/contact.png"></span>お問い合わせ</div>
                        </a>
                    </div>
                </div>
            </section>
            <!-- /foot-contaxt -->

        </main>


        <?php get_footer(); ?>