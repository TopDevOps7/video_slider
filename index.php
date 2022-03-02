<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

get_header();
?>

<?php
	$url = get_template_directory_uri();
?>

<div class="container" id="videocontainer">
    <div class="slider-for">
        <div class="slider__slide">
            <video id='video' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/1.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>

            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause" type="button" data-state="play">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
                <video id="video_id" autoplay loop style="display: none;">
                    <source
                        src='https://shareslides.xyz/wp-content/uploads/2022/01/WATER-SUPPLY-TECHNOLOGY-15.11.2021.mp4'>
                </video>

            </div>
        </div>
        <div class="slider__slide">
            <video id='video1' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/2.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause1" type="button" data-state="play1">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute1" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs1" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video2' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/3.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause2" type="button" data-state="play2">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute2" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs2" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video3' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/4.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause3" type="button" data-state="play3">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute3" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs3" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video4' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/5.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause4" type="button" data-state="play4">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute4" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs4" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video5' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/6.mp4" type="video/mp4">
                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause5" type="button" data-state="play5">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute5" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs5" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video6' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/7.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause6" type="button" data-state="play6">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute6" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs6" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video7' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/8.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause7" type="button" data-state="play7">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute7" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs7" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video8' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/9.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause8" type="button" data-state="play8">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute8" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs8" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video9' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/10.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause9" type="button" data-state="play9">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute9" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs9" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video10' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/11.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause10" type="button" data-state="play10">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute10" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs10" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video11' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/12.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause11" type="button" data-state="play11">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute11" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs11" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video12' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/13.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause12" type="button" data-state="play12">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute12" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs12" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video13' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/14.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause13" type="button" data-state="play13">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute13" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs13" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
        <div class="slider__slide">
            <video id='video14' title="Advertisement" webkit-playsinline="true" playsinline="true" autoplay muted>
                <source id="mp4" src="<?php echo $url ?>/assets/15.mp4" type="video/mp4">

                <object type="application/x-shockwave-flash"
                    data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4"
                    width="1024" height="576">
                    <param name="movie"
                        value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" />
                    <param name="allowfullscreen" value="true" />
                    <param name="wmode" value="transparent" />
                    <param name="flashvars"
                        value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />

                </object>
                <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download
                    MP4</a>
            </video>
            <div id="video-controls" class="controls" data-state="hidden">
                <button id="playpause14" type="button" data-state="play14">Play/Pause</button>
                <button id="stop" style="display: none;" type="button" data-state="stop">Stop</button>
                <div class="progress" style="display: none;">
                    <progress id="progress" value="0" min="0">
                        <span id="progress-bar"></span>
                    </progress>
                </div>
                <button id="mute14" type="button" style="display: block;" data-state="mute">Mute/Unmute</button>
                <button id="fs14" type="button" style="display: block;" data-state="go-fullscreen">Fullscreen</button>
            </div>
        </div>
    </div>
    <div class="slick-carousel">
        <!-- Inside the containing div, add one div for each slide -->
        <div class="image_field">
            <!-- You can put an image or text inside each slide div -->
            <img class="image_s" id="image1" src="https://shareslides.xyz/wp-content/uploads/2022/02/1.jpeg">
            <span class="number1">1/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image2" src="https://shareslides.xyz/wp-content/uploads/2022/02/2.jpeg">
            <span class="number2">2/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image3" src="https://shareslides.xyz/wp-content/uploads/2022/02/3.jpeg">
            <span class="number3">3/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image4" src="https://shareslides.xyz/wp-content/uploads/2022/02/4.jpeg">
            <span class="number4">4/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image5" src="https://shareslides.xyz/wp-content/uploads/2022/02/5.jpeg">
            <span class="number5">5/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image6" src="https://shareslides.xyz/wp-content/uploads/2022/02/6.jpeg">
            <span class="number6">6/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image7" src="https://shareslides.xyz/wp-content/uploads/2022/02/7.jpeg">
            <span class="number7">7/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image8" src="https://shareslides.xyz/wp-content/uploads/2022/02/8.jpeg">
            <span class="number8">8/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image9" src="https://shareslides.xyz/wp-content/uploads/2022/02/9.jpeg">
            <span class="number9">9/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image10" src="https://shareslides.xyz/wp-content/uploads/2022/02/10.jpeg">
            <span class="number10">10/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image11" src="https://shareslides.xyz/wp-content/uploads/2022/02/11.jpeg">
            <span class="number11">11/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image12" src="https://shareslides.xyz/wp-content/uploads/2022/02/12.jpeg">
            <span class="number12">12/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image13" src="https://shareslides.xyz/wp-content/uploads/2022/02/13.jpeg">
            <span class="number13">13/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image14" src="https://shareslides.xyz/wp-content/uploads/2022/02/14.jpeg">
            <span class="number14">14/15</span>
        </div>
        <div class="image_field">
            <img class="image_s" id="image15" src="https://shareslides.xyz/wp-content/uploads/2022/02/15.jpeg">
            <span class="number15">15/15</span>
        </div>
    </div>
</div>
<script src="<?php echo $url?>/js/video-player.js"></script>

<?php get_template_part( 'template-parts/footer-menus-widgets' ); ?>

<?php