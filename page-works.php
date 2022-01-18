<?php get_header("post"); ?>

        <main id="main" class="l-main">

            <div class="c-title">
                <div class="pankuzu"><a href="<?php echo home_url();?>">Top</a>　＞事業内容</div>
                <h2 class="main-title typesquare_option">事業内容<span>WORKS</span></h2>
            </div>
            <div class="c-job">
                <div class="job-info">
                    <h3 class="job-info_name typesquare_option">有限会社マルワ住設</h3>
                    <div class="job-info_catchcopy">人々が生活していくためにとても大切な水道の仕事を 中心に、飲食店舗や販売店舗、工場、学校などの建築 設備工事、道路内の水道本管の入替工事などをさせて いただいております。
                    </div>
                </div>
                <div class="job-img"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_02.png" alt="事業内容"></div>
            </div>
            <div class="job-description">日常生活に欠かせない大切な仕事をさせていただいてることに誇りを持ち、技術及び品質の向上に努めております。</div>
            <section class="job-detail_outer">
                <div class="job-detail">
                    <div class="job-detail_item">
                        <div class="job-detail_num">01<span>DETAIL</span></div>
                        <h4 class="job-detail_title typesquare_option">給排水衛生設備工事</h4>
                        <p class="job-detail_img-sp"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_03.png" alt="給排水衛生設備工事"></p>
                        <p class="job-detail_text">トイレ・キッチン・バスなど水道やお湯、給水管を水道本管か ら建物へ、建物から排水設備へ配管接続をしていきます。
                        </p>
                    </div>
                    <div class="job-detail_img"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_03.png" alt="給排水衛生設備工事"></div>
                </div>
            </section>
            <section class="job-detail_outer">
                <div class="job-detail reverse">
                    <div class="job-detail_item">
                        <div class="job-detail_num">02<span>DETAIL</span></div>
                        <h4 class="job-detail_title typesquare_option">空気調和設備工事</h4>
                        <p class="job-detail_img-sp"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_04.png" alt="空気調和設備工事"></p>
                        <p class="job-detail_text">住居や室内空間を快適にするためのエアコンなどの冷暖房工事 や換気工事を手がけております。
                        </p>
                    </div>
                    <div class="job-detail_img"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_04.png" alt="空気調和設備工事"></div>
                </div>
            </section>
            <section class="job-detail_outer">
                <div class="job-detail">
                    <div class="job-detail_item">
                        <div class="job-detail_num">03<span>DETAIL</span></div>
                        <h4 class="job-detail_title typesquare_option">各種配管工事</h4>
                        <p class="job-detail_img-sp"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_05.jpg" alt="各種配管工事"></p>
                        <p class="job-detail_text">建物内の消火栓設備の配管や、工場の機械配管を手がけており ます。
                        </p>
                    </div>
                    <div class="job-detail_img"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_05.jpg" alt="各種配管工事"></div>
                </div>
            </section>
            <section class="job-detail_outer">
                <div class="job-detail reverse">
                    <div class="job-detail_item">
                        <div class="job-detail_num">04<span>DETAIL</span></div>
                        <h4 class="job-detail_title typesquare_option">水道施設工事</h4>
                        <p class="job-detail_img-sp"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_06.png" alt="水道施設工事"></p>
                        <p class="job-detail_text">道路を掘削して、古くなった水道本管の入替や耐震配管工事を 手がけております。
                        </p>
                    </div>
                    <div class="job-detail_img"><img src="<?php echo get_template_directory_uri(); ?>/assets/img/works_06.png" alt="水道施設工事"></div>
                </div>
            </section>
            <!-- main -->

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