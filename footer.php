    <!-- foot-menu -->
    <footer id="footer" class="l-footer">
            <div href="#top" class="btnPageTop" style="display: none;">
                <a href="#/#"></a>
            </div>
            <div class="top_foot">
                <div class="wrap">
                    <div class="foot_logo">
                        <a href="<?php echo home_url();?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.svg" width="120px" height="autopx" alt="有限会社マルワ住設"></a>
                    </div>
                    <div class="fl-box">
                        <ul class="foot_nav">
                            <li><a href="<?php echo home_url();?>" class=" typesquare_option">TOP</a></li>
                        </ul>
                        <ul class="foot_nav">
                            <li><a href="<?php echo home_url();?>/example" class=" typesquare_option">施工実績</a>
                            </li>
                        </ul>
                        <ul class="foot_nav">
                            <li><a href="<?php echo home_url();?>/works" class=" typesquare_option">事業内容</a>
                            </li>
                        </ul>
                        <ul class="foot_nav">
                            <li><a href="<?php echo home_url();?>/company" class=" typesquare_option">会社情報</a>
                                <ul class="foot_nav_sub">
                                    <li><a href="<?php echo home_url();?>/SEO">代表挨拶</a></li>
                                    <li><a href="<?php echo home_url();?>/company">会社概要</a></li>
                                    <li><a href="<?php echo home_url();?>/philosophy">企業理念</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="top_foot_sp">
                <ul class="sp_nav">
                    <li class="toggle_contents">
                        <dl>
                            <dt class="toggle_title">TOP</dt>
                        </dl>
                    </li>
                    <li class="sp_nav_main"><a href="<?php echo home_url();?>/example">施工実績</a></li>
                    <li class="toggle_contents">
                        <dl>
                            <dt class="toggle_title">事業内容</dt>
                        </dl>
                    </li>
                    <li class="toggle_contents">
                        <dl>
                            <dt class="toggle_title">会社情報<span class="toggle_btn"></span></dt>
                            <dd>
                                <ul>
                                    <li><a href="<?php echo home_url();?>/seo">代表挨拶</a></li>
                                    <li><a href="<?php echo home_url();?>/company">会社概要</a></li>
                                    <li><a href="<?php echo home_url();?>/philosophy">企業理念</a></li>
                                </ul>
                            </dd>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="bottom_foot">
                <div class="wrap" style="text-align: center;">
                    <div class="copy"><small style="text-align: center;">Copyright©  Ryomo Business Support Co.,LTD. All Rights Reserved.</small></div>
                </div>
            </div>
        </footer>
        <!-- /foot-menu -->
    </div>





    <!--footer -->
    <?php wp_footer(); ?>
</body>

</html>