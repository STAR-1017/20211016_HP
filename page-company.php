<?php get_header("post"); ?>

        <main id="main" class="l-main">

            <div class="l-page_head l-page_head-s">
                <div class="l-page_head_contents head_profile">
                    <div class="l-page_head_box">
                        <div>
                            <h2 class=" typesquare_option">会社概要</h2>
                            <p class=" typesquare_option">Company overview</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="page_wrap">
                <div class="page_contents contents_profile">

                    <div class="page_pankuzu pankuzu_profile">
                        <p><a href="<?php echo home_url();?>">TOP</a> /会社情報 / 会社概要</p>
                    </div>

                    <section class="sec sec_profile">
                        <h3 class=" typesquare_option">会社概要</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th class=" typesquare_option">社名</th>
                                    <td>有限会社マルワ住設</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">所在地</th>
                                    <td>〒392-0016　長野県諏訪市大字豊田3962番地1号</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">設立</th>
                                    <td>平成２年4月</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">業務内容</th>
                                    <td>建築設備全般<br>給排水衛生設備工事・空気調和設備工事・冷暖房設備工事・浄化槽設備工事<br>換気設備工事・諏訪市水道局本管工事・各種リフォーム工事</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">建設業許可</th>
                                    <td>長野県知事許可(般―２)第19620号　管・土木・水道施設工事業</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">加入団体</th>
                                    <td>諏訪市水道温泉事業協同組合・諏訪市下水道協会</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">給水工事指定</th>
                                    <td>諏訪市・茅野市・岡谷市・塩尻市・下諏訪町・富士見町・辰野町・原村</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">排水工事指定</th>
                                    <td>諏訪市・茅野市・岡谷市・塩尻市・下諏訪町・富士見町・辰野町・原村</td>
                                </tr>
                                <tr>
                                    <th class=" typesquare_option">技術資格者</th>
                                    <td>１級管工事施工管理技士　1名<br>２級管工事施工管理技士　1名<br>１級土木施工管理技士　1名<br>２級土木施工管理技士　1名<br>給水装置主任技術者　3名<br>2級配管技能士　2名<br>その他各種資格</td>
                                </tr>
                            </tbody>
                        </table>
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