<script setup></script>

<template>
	<span class="rehub_scroll" id="topcontrol" data-scrollto="#top_ankor"
		><i class="rhicon rhi-chevron-up"></i
	></span>
	<div id="logo_mobile_wrapper">
		<a href="https://softwaregiveaway.co.uk" class="logo_image_mobile"
			><img
				src="https://softwaregiveaway.co.uk/wp-content/uploads/2024/05/Logo.svg"
				alt="Software Giveaway"
				width="160"
				height="50"
		/></a>
	</div>

	<div id="rhmobpnlcustom" class="rhhidden">
		<div
			id="rhmobtoppnl"
			style="background-color: #7ad14e"
			class="pr15 pl15 pb15 pt15"
		>
			<div class="text-center">
				<a href="https://softwaregiveaway.co.uk"
					><img
						id="mobpanelimg"
						src="https://softwaregiveaway.co.uk/wp-content/uploads/2024/05/Logo.svg"
						alt="Logo"
						width="150"
						height="45"
				/></a>
			</div>
		</div>
	</div>

	<div id="rhslidingMenu">
		<div id="slide-menu-mobile"></div>
	</div>
	<div id="rhSplashSearch">
		<div class="search-header-contents">
			<div
				id="close-src-splash"
				class="rh-close-btn rh-hovered-scale position-relative text-center cursorpointer rh-circular-hover abdposright rtlposleft mt15 mr20 ml30"
				style="z-index: 999"
			>
				<span
					><i
						class="rhicon rhi-times whitebg roundborder50p rh-shadow4"
						aria-hidden="true"
					></i
				></span>
			</div>
			<form
				role="search"
				method="get"
				class="search-form product-search-form"
				action="https://softwaregiveaway.co.uk/"
			>
				<label
					class="screen-reader-text"
					for="woocommerce-product-search-field-1"
					>Search for:</label
				>
				<input
					type="text"
					id="woocommerce-product-search-field-1"
					name="s"
					placeholder="Search"
					value=""
					data-enable_compare="1"
					data-posttype="product"
				/>
				<input type="hidden" name="post_type" value="product" />
				<select
					name="product_cat"
					id="1347409965"
					class="rh_woo_drop_cat rhhidden rhniceselect hideonmobile"
				>
					<option value="" selected="selected">All categories</option>
					<option class="level-0" value="audio-video">
						Audio &amp; Video
					</option>
					<option class="level-0" value="business-management">
						Business Management
					</option>
					<option class="level-0" value="cd-dvd-blu-ray">
						CD/DVD/Blu-ray
					</option>
					<option class="level-0" value="data-recovery-file-repair">
						Data Recovery &amp; File Repair
					</option>
					<option class="level-0" value="digital-photo-image">
						Digital Photo/Image
					</option>
					<option class="level-0" value="e-book">e-Book</option>
					<option class="level-0" value="file-disk-management">
						File &amp; Disk Management
					</option>
					<option class="level-0" value="graphic-design-2d-3d">
						Graphic Design &amp; 2D/3D
					</option>
					<option class="level-0" value="home-hobby">
						Home &amp; Hobby
					</option>
					<option class="level-0" value="internet">Internet</option>
					<option class="level-0" value="mobile-phone-tools">
						Mobile Phone Tools
					</option>
					<option class="level-0" value="password-tools">
						Password Tools
					</option>
					<option class="level-0" value="pdf-tools">PDF Tools</option>
					<option class="level-0" value="security-software">
						Security Software
					</option>
					<option class="level-0" value="social-communication">
						Social &amp; Communication
					</option>
					<option class="level-0" value="system-utilities">
						System Utilities
					</option>
					<option class="level-0" value="text-document-editors">
						Text &amp; Document Editors
					</option>
					<option
						class="level-0"
						value="website-development-promotion"
					>
						Website Development &amp; Promotion
					</option>
				</select>
				<button
					type="submit"
					class="btnsearch hideonmobile"
					aria-label="Search"
				>
					<i class="rhicon rhi-search"></i>
				</button>
			</form>
		</div>
	</div>

	<div id="rehub-login-popup-block" class="rhhidden">
		<!-- Login form -->
		<div id="rehub-login-popup">
			<div class="rehub-login-popup">
				<div class="re_title_inmodal">Log In</div>

				<form
					id="rehub_login_form_modal"
					action="https://softwaregiveaway.co.uk/"
					method="post"
				>
					<div class="re-form-group mb20">
						<label>Username</label>
						<input
							class="re-form-input required"
							name="rehub_user_login"
							type="text"
						/>
					</div>
					<div class="re-form-group mb20">
						<label for="rehub_user_pass">Password</label>
						<input
							class="re-form-input required"
							name="rehub_user_pass"
							id="rehub_user_pass"
							type="password"
							autocomplete="on"
						/>
						<a
							href="https://softwaregiveaway.co.uk/my-account/lost-password/"
							class="alignright"
							>Lost Password?</a
						>
					</div>
					<div class="re-form-group mb20">
						<label for="rehub_remember"
							><input
								name="rehub_remember"
								id="rehub_remember"
								type="checkbox"
								value="forever"
							/>
							Remember me</label
						>
					</div>
					<div class="re-form-group mb20">
						<input
							type="hidden"
							name="action"
							value="rehub_login_member_popup_function"
						/>
						<button
							class="wpsm-button rehub_main_btn"
							type="submit"
						>
							Login
						</button>
					</div>
					<input
						type="hidden"
						id="loginsecurity"
						name="loginsecurity"
						value="5cae01868c"
					/><input type="hidden" name="_wp_http_referer" value="/" />
				</form>
				<div class="rehub-errors"></div>
				<div class="rehub-login-popup-footer">
					Don&#039;t have an account?
					<span
						class="act-rehub-login-popup color_link"
						data-type="url"
						data-customurl="/my-account"
						>Sign Up</span
					>
				</div>
			</div>
		</div>
	</div>
	<div id="re-compare-bar" class="from-right rh-sslide-panel">
		<div id="re-compare-bar-wrap" class="rh-sslide-panel-wrap">
			<div id="re-compare-bar-heading" class="rh-sslide-panel-heading">
				<h5
					class="rehub-main-color pt15 pb15 pr15 pl20 mt0 mb0 font120"
				>
					Compare items<i
						class="blackcolor closecomparepanel rh-sslide-close-btn cursorpointer floatright font130 rhi-times-circle rhicon"
						aria-hidden="true"
					></i>
				</h5>
			</div>
			<div
				id="re-compare-bar-tabs"
				class="rh-sslide-panel-tabs abdfullwidth mt30 pb30 pt30 width-100p"
			>
				<ul class="rhhidden">
					<li
						class="re-compare-tab-492 no-multicats"
						data-page="492"
						data-url="https://softwaregiveaway.co.uk/compare-products/"
					>
						Total (<span>0</span>)
					</li>
				</ul>
				<div>
					<div
						class="rh-sslide-panel-inner mt10 re-compare-wrap pr20 pl20 re-compare-wrap-492"
					></div>
				</div>
				<span
					class="re-compare-destin wpsm-button rehub_main_btn"
					data-compareurl=""
					>Compare<i
						class="rhi-arrow-circle-right rhicon"
						aria-hidden="true"
					></i
				></span>
			</div>
		</div>
	</div>
	<div id="re-compare-icon-fixed" class="rhhidden">
		<span class="re-compare-icon-toggle position-relative"
			><i class="rhicon rhi-shuffle"></i
			><span class="re-compare-notice rehub-main-color-bg">0</span></span
		>
	</div>

	<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="pswp__bg"></div>
		<div class="pswp__scroll-wrap">
			<div class="pswp__container">
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
				<div class="pswp__item"></div>
			</div>
			<div class="pswp__ui pswp__ui--hidden">
				<div class="pswp__top-bar">
					<div class="pswp__counter"></div>
					<button
						class="pswp__button pswp__button--close"
						aria-label="Close (Esc)"
					></button>
					<button
						class="pswp__button pswp__button--share"
						aria-label="Share"
					></button>
					<button
						class="pswp__button pswp__button--fs"
						aria-label="Toggle fullscreen"
					></button>
					<button
						class="pswp__button pswp__button--zoom"
						aria-label="Zoom in/out"
					></button>
					<div class="pswp__preloader">
						<div class="pswp__preloader__icn">
							<div class="pswp__preloader__cut">
								<div class="pswp__preloader__donut"></div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
				>
					<div class="pswp__share-tooltip"></div>
				</div>
				<button
					class="pswp__button pswp__button--arrow--left"
					aria-label="Previous (arrow left)"
				></button>
				<button
					class="pswp__button pswp__button--arrow--right"
					aria-label="Next (arrow right)"
				></button>
				<div class="pswp__caption">
					<div class="pswp__caption__center"></div>
				</div>
			</div>
		</div>
	</div>
</template>
