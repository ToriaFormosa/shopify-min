(function () {  
  const playVideo = (slider) => {
    if (!slider.tagName) {
      if (slider.slides[slider.previousIndex]) {
        const videoPrev = slider.slides[slider.previousIndex].querySelector('.media-slideshow__video video');
        if (videoPrev) {
          videoPrev.pause();
        }
  
        const videoUrlPrev = slider.slides[slider.previousIndex].querySelector('.media-slideshow__video iframe');
        if (videoUrlPrev) {
          if (videoUrlPrev.classList.contains('js-youtube')) {
            videoUrlPrev.contentWindow.postMessage(
              '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
              "*",
            );
            videoUrlPrev.classList.add('video-pause');
            videoUrlPrev.classList.remove('video-play');
          }
          else if (videoUrlPrev.classList.contains('js-vimeo')) {
            videoUrlPrev.contentWindow.postMessage('{"method":"pause"}', "*");
            videoUrlPrev.classList.add('video-pause');
            videoUrlPrev.classList.remove('video-play');
          }
        }
      }
  
      if (slider.slides[slider.activeIndex]) {
        const videoActive = slider.slides[slider.activeIndex].querySelector('.media-slideshow__video video');
        if (videoActive) {
          const button = slider.slides[slider.activeIndex].querySelector('.js-play-video');
  
          if (videoActive.parentElement.classList.contains('autoplay')) {
            videoActive.autoplay = true;
            if (button) {
              button.classList.remove('active');
            }
          }
  
          if (videoActive.autoplay && videoActive.paused) {
            videoActive.play();
          }
  
          if (!videoActive.autoplay && button) {
            button.classList.remove('active');
          }
        }
  
        const videoUrlActive = slider.slides[slider.activeIndex].querySelector('.media-slideshow__video iframe');
        if (videoUrlActive) {
          const button = slider.slides[slider.activeIndex].querySelector('.js-play-video');
          if (videoUrlActive.parentElement.classList.contains('autoplay')) {
            if (videoUrlActive.classList.contains('js-youtube')) {
              videoUrlActive.contentWindow.postMessage(
                '{"event":"command","func":"' + "playVideo" + '","args":""}',
                "*",
              );
              if (videoUrlActive.classList.contains('video-muted')) {
                videoUrlActive.contentWindow.postMessage(
                  '{"event":"command","func":"' + "mute" + '","args":""}',
                  "*",
                );
              }
              else {
                videoUrlActive.contentWindow.postMessage(
                  '{"event":"command","func":"' + "unMute" + '","args":""}',
                  "*",
                );
              }
              videoUrlActive.classList.add('video-play');
              videoUrlActive.classList.remove('video-pause');
            }
            else if (videoUrlActive.classList.contains('js-vimeo')) {
              videoUrlActive.contentWindow.postMessage('{"method":"play"}', "*");
              if (videoUrlActive.classList.contains('video-muted')) {
                videoUrlActive.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
              }
              else {
                videoUrlActive.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
              }
              videoUrlActive.classList.add('video-play');
              videoUrlActive.classList.remove('video-pause');
            }
            if (button) {
              button.classList.remove('active');
            }
          }
  
          if (videoUrlActive.parentElement.classList.contains('autoplay') && videoUrlActive.classList.contains('video-pause')) {
            if (videoUrlActive.classList.contains('js-youtube')) {
              videoUrlActive.contentWindow.postMessage(
                '{"event":"command","func":"' + "playVideo" + '","args":""}',
                "*",
              );
              if (videoUrlActive.classList.contains('video-muted')) {
                videoUrlActive.contentWindow.postMessage(
                  '{"event":"command","func":"' + "mute" + '","args":""}',
                  "*",
                );
              }
              else {
                videoUrlActive.contentWindow.postMessage(
                  '{"event":"command","func":"' + "unMute" + '","args":""}',
                  "*",
                );
              }
              videoUrlActive.classList.add('video-play');
              videoUrlActive.classList.remove('video-pause');
            }
            else if (videoUrlActive.classList.contains('js-vimeo')) {
              videoUrlActive.contentWindow.postMessage('{"method":"play"}', "*");
              if (videoUrlActive.classList.contains('video-muted')) {
                videoUrlActive.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
              }
              else {
                videoUrlActive.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
              }
              videoUrlActive.classList.add('video-play');
              videoUrlActive.classList.remove('video-pause');
            }
          }
  
          if (!videoUrlActive.parentElement.classList.contains('autoplay') && button) {
            button.classList.remove('active');
          }
        }
      }
    }
    else {
      //console.log(slider);
      const video = slider.querySelector('.media-slideshow__video video');
        if (video) {
          const button = slider.querySelector('.js-play-video');
  
          if (video.parentElement.classList.contains('autoplay')) {
            video.autoplay = true;
            if (button) {
              button.classList.remove('active');
            }
          }
  
          if (video.autoplay && video.paused) {
            video.play();
          }
  
          if (!video.autoplay && button) {
            button.classList.remove('active');
          }
        }
  
        const videoUrl = slider.querySelector('.media-slideshow__video iframe');
        if (videoUrl) {
          const button = slider.querySelector('.js-play-video');
          if (videoUrl.parentElement.classList.contains('autoplay')) {
            if (videoUrl.classList.contains('js-youtube')) {
              videoUrl.contentWindow.postMessage(
                '{"event":"command","func":"' + "playVideo" + '","args":""}',
                "*",
              );
              if (videoUrl.classList.contains('video-muted')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "mute" + '","args":""}',
                  "*",
                );
              }
              else {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "unMute" + '","args":""}',
                  "*",
                );
              }
              videoUrl.classList.add('video-play');
              videoUrl.classList.remove('video-pause');
            }
            else if (videoUrl.classList.contains('js-vimeo')) {
              videoUrl.contentWindow.postMessage('{"method":"play"}', "*");
              if (videoUrl.classList.contains('video-muted')) {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
              }
              else {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
              }
              videoUrl.classList.add('video-play');
              videoUrl.classList.remove('video-pause');
            }
            if (button) {
              button.classList.remove('active');
            }
          }
  
          if (videoUrl.parentElement.classList.contains('autoplay') && videoUrl.classList.contains('video-pause')) {
            if (videoUrl.classList.contains('js-youtube')) {
              videoUrl.contentWindow.postMessage(
                '{"event":"command","func":"' + "playVideo" + '","args":""}',
                "*",
              );
              if (videoUrl.classList.contains('video-muted')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "mute" + '","args":""}',
                  "*",
                );
              }
              else {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "unMute" + '","args":""}',
                  "*",
                );
              }
              videoUrl.classList.add('video-play');
              videoUrl.classList.remove('video-pause');
            }
            else if (videoUrl.classList.contains('js-vimeo')) {
              videoUrl.contentWindow.postMessage('{"method":"play"}', "*");
              if (videoUrl.classList.contains('video-muted')) {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
              }
              else {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
              }
              videoUrl.classList.add('video-play');
              videoUrl.classList.remove('video-pause');
            }
          }
  
          if (!videoUrl.parentElement.classList.contains('autoplay') && button) {
            button.classList.remove('active');
          }
        }
    }
  }

  const stopVideo = (slider) => {
    if (slider.slides[slider.activeIndex]) {
      const videoActive = slider.slides[slider.activeIndex].querySelector('.media-slideshow__video video');
      if (videoActive) {
        videoActive.pause();
      }

      const videoUrlActive = slider.slides[slider.activeIndex].querySelector('.media-slideshow__video iframe');
      if (videoUrlActive) {
        if (videoUrlActive.classList.contains('js-youtube')) {
          videoUrlActive.contentWindow.postMessage(
            '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
            "*",
          );
          videoUrlActive.classList.add('video-pause');
          videoUrlActive.classList.remove('video-play');
        }
        else if (videoUrlActive.classList.contains('js-vimeo')) {
          videoUrlActive.contentWindow.postMessage('{"method":"pause"}', "*");
          videoUrlActive.classList.add('video-pause');
          videoUrlActive.classList.remove('video-play');
        }
      }
    }
  }

  const controlsVideo = () => {
    const buttonsPlay = document.querySelectorAll('.js-play-video');
    const buttonsSound = document.querySelectorAll('.js-sound-video');

    buttonsPlay.forEach(button => {
      button.onclick = () => {
        if (button.previousElementSibling.classList.contains('media-slideshow__video')) {
          const video = button.previousElementSibling.querySelector('video');
          if (video) {
            if (video.paused) {
              setTimeout(() => {
                video.play();
              }, 10);
            }
            else {
              setTimeout(() => {
                video.pause();
              }, 10);
            }
            button.classList.toggle('active');
          }

          const videoUrl = button.previousElementSibling.querySelector('iframe');
          if (videoUrl) {
            if (videoUrl.classList.contains('video-pause')) {
              if (videoUrl.classList.contains('js-youtube')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "playVideo" + '","args":""}',
                  "*",
                );
                if (videoUrl.classList.contains('video-muted')) {
                  videoUrl.contentWindow.postMessage(
                    '{"event":"command","func":"' + "mute" + '","args":""}',
                    "*",
                  );
                }
                else {
                  videoUrl.contentWindow.postMessage(
                    '{"event":"command","func":"' + "unMute" + '","args":""}',
                    "*",
                  );
                }
                videoUrl.classList.add('video-play');
                videoUrl.classList.remove('video-pause');
              }
              else if (videoUrl.classList.contains('js-vimeo')) {
                videoUrl.contentWindow.postMessage('{"method":"play"}', "*");
                if (videoUrl.classList.contains('video-muted')) {
                  videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
                }
                else {
                  videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
                }
                videoUrl.classList.add('video-play');
                videoUrl.classList.remove('video-pause');
              }
            }
            else {
              if (videoUrl.classList.contains('js-youtube')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
                  "*",
                );
                videoUrl.classList.add('video-pause');
                videoUrl.classList.remove('video-play');
              }
              else if (videoUrl.classList.contains('js-vimeo')) {
                videoUrl.contentWindow.postMessage('{"method":"pause"}', "*");
                videoUrl.classList.add('video-pause');
                videoUrl.classList.remove('video-play');
              }
            }
            button.classList.toggle('active');
          }
        }
      }
    });

    buttonsSound.forEach(button => {
      button.onclick = () => {
        if (button.previousElementSibling.classList.contains('media-slideshow__video') || button.previousElementSibling.previousElementSibling.classList.contains('media-slideshow__video')) {
          const video = button.previousElementSibling.querySelector('video') || button.previousElementSibling.previousElementSibling.querySelector('video');
          if (video) {
            if (video.muted) {
              setTimeout(() => {
                video.muted = false;
              }, 10);
            }
            else {
              setTimeout(() => {
                video.muted = true;
              }, 10);
            }
            button.classList.toggle('active');
          }

          const videoUrl = button.previousElementSibling.querySelector('iframe') || button.previousElementSibling.previousElementSibling.querySelector('iframe');
          if (videoUrl) {
            if (videoUrl.classList.contains('video-muted')) {
              if (videoUrl.classList.contains('js-youtube')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "unMute" + '","args":""}',
                  "*",
                );
                videoUrl.classList.remove('video-muted');
              }
              else if (videoUrl.classList.contains('js-vimeo')) {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":1}', '*');
                videoUrl.classList.remove('video-muted');
              }
            }
            else {
              if (videoUrl.classList.contains('js-youtube')) {
                videoUrl.contentWindow.postMessage(
                  '{"event":"command","func":"' + "mute" + '","args":""}',
                  "*",
                );
                videoUrl.classList.add('video-muted');
              }
              else if (videoUrl.classList.contains('js-vimeo')) {
                videoUrl.contentWindow.postMessage('{"method":"setVolume", "value":0}', '*');
                videoUrl.classList.add('video-muted');
              }
            }
            button.classList.toggle('active');
          }
        }
      }
    })
  }

  const initSliders = () => {
    const sections = document.querySelectorAll('.media-slideshow-section');

    sections.forEach(section => {
      const mediaSliders = section.querySelectorAll('.media-slideshow__slider');
      const pagination = section.querySelector('.media-slideshow__wrapper .swiper-pagination');
      const duration = mediaSliders[0].getAttribute('data-duration');
      let mediaSliderFirst;
      let mediaSliderAll = [];
      const nextBtn = section.querySelector('.swiper-button-next');
      const prevBtn = section.querySelector('.swiper-button-prev');

      mediaSliders.forEach((slider, index) => {
        if (index == 0) {
          mediaSliderFirst = new Swiper(slider, {
            allowTouchMove: false,
            slidesPerView: 'auto',
            /*spaceBetween: -1,
            slidesOffsetBefore: -1,
            slidesOffsetAfter: 0, */
            //watchSlidesProgress: true,
						speed: 1500,
            autoplay: {
              delay: duration*1000,
              disableOnInteraction: false,
              //pauseOnMouseEnter: true
            },
            pagination: {
              el: pagination,
              type: 'bullets',
              clickable: true,
              renderBullet: function(index, className) {
                return '<span class="' + className + '"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle class="circle" style="animation-duration: ' + duration + 's" cx="8" cy="8" r="7" stroke="currentColor"/></svg></span>';
              }
            },
            navigation: {
              nextEl: nextBtn,
              prevEl: prevBtn,
            },
            on: {
              init() {
                this.el.addEventListener('mouseenter', () => {
                  try {
                    this.autoplay.pause();
                    pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "paused";
                  } catch (error) {}
                });
          
                this.el.addEventListener('mouseleave', () => {
                  try {
                    this.autoplay.resume();
                    pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
                  } catch (error) {}
                });
              }
            },
          })
        }
        else {
          const mediaSlider = new Swiper(slider, {
						allowTouchMove: false,
						slidesPerView: "auto",
						speed: 1500,
						/*spaceBetween: -1,
            slidesOffsetBefore: -1,
            slidesOffsetAfter: 0,*/
						on: {
							init() {
								mediaSliderAll.push(this);
								this.el.addEventListener("mouseenter", () => {
									try {
										mediaSliderFirst.autoplay.pause();
										pagination.querySelector(
											".swiper-pagination-bullet-active .circle",
										).style.animationPlayState = "paused";
									} catch (error) {}
								});

								this.el.addEventListener("mouseleave", () => {
									try {
										mediaSliderFirst.autoplay.resume();
										pagination.querySelector(
											".swiper-pagination-bullet-active .circle",
										).style.animationPlayState = "running";
									} catch (error) {}
								});
							},
							slideChange() {
								playVideo(this);
							},
						},
					});
        }
      })

      mediaSliderFirst.autoplay.stop();
      /*mediaSliderFirst.update();
      mediaSliderFirst.pagination.update();*/
      if (pagination) {
        pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "unset";
      }

      mediaSliderFirst.on('slideChange', function() {
        try {
          pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
        } catch (error) {
          
        }

        playVideo(mediaSliderFirst);
        mediaSliderAll.forEach((slider, index) => {
          if (slider.slides[mediaSliderFirst.activeIndex])
            setTimeout(() => {
              slider.slideTo(mediaSliderFirst.activeIndex);
            }, (index+1)*300);
        })
      })
    })
  }

  const initSlidersMobile = () => {
    const sections = document.querySelectorAll('.media-slideshow-section');

    sections.forEach(section => {
      const mediaSliders = section.querySelectorAll('.media-slideshow__slider_mobile:not(.swiper-initialized)');
      
      if (mediaSliders[0]) {
        const duration = mediaSliders[0].getAttribute('data-duration');
        const pagination = section.querySelector('.media-slideshow__wrapper_mobile .swiper-pagination');
      
        mediaSliders.forEach((slider, index) => {
          const mediaSlider = new Swiper(slider, {
            slidesPerView: 1,
            //loop: true,
            allowTouchMove: false,
            autoplay: {
              delay: duration*1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            pagination: {
              el: pagination,
              type: 'bullets',
              clickable: true,
              renderBullet: function(index, className) {
                return '<span class="' + className + '"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle class="circle" style="animation-duration: ' + duration + 's" cx="8" cy="8" r="7" stroke="currentColor"/></svg></span>';
              }
            }
          })
  
          mediaSlider.autoplay.stop();
          /*mediaSlider.update();
          mediaSlider.pagination.update();*/
          if (pagination) {
            pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "unset";
          }
          
          mediaSlider.on('slideChange', function() {
            try {
              pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
            } catch (error) {
              
            }
    
            playVideo(mediaSlider);
          })
        })
      }
    })
  }

  const destroySlidersDesktop = () => {
		const mediaSliders = document.querySelectorAll('.media-slideshow__slider');

		mediaSliders.forEach((slider) => {
			if (slider.swiper) 
        slider.swiper.destroy();
		});
	};

  const destroySlidersMobile = () => {
		const mediaSliders = document.querySelectorAll('.media-slideshow__slider_mobile');

		mediaSliders.forEach((slider) => {
			if (slider.swiper) 
        slider.swiper.destroy();
		});
	};

  const initSection = () => {
    const sections = document.querySelectorAll('.media-slideshow-section');

    const sectionResizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      let mediaSliders = entry.target.querySelectorAll('.media-slideshow__slider');
      let pagination;

      if (entry.contentRect.width < 750 && !mediaSliders[0].classList.contains('media-slideshow__slider_full') && !mediaSliders[0].classList.contains('media-slideshow__slider_split')) {
        mediaSliders = entry.target.querySelectorAll('.media-slideshow__slider_mobile');
        pagination = null;
        destroySlidersDesktop();
        initSlidersMobile();
        
        if (mediaSliders[0].swiper) {
          if (!mediaSliders[0].swiper.autoplay.running) 
            mediaSliders[0].swiper.autoplay.start();
          else 
            mediaSliders[0].swiper.autoplay.resume();
          
          if (pagination) {
            pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
          }
        }
        mediaSliders.forEach((slider) => {
          if (slider.swiper)
            playVideo(slider.swiper);
          else
            playVideo(slider);
        });
      }
      else {
        mediaSliders = entry.target.querySelectorAll('.media-slideshow__slider');
        pagination = entry.target.querySelector('.media-slideshow__wrapper .swiper-pagination');
        if (!mediaSliders[0].classList.contains('media-slideshow__slider_full') && !mediaSliders[0].classList.contains('media-slideshow__slider_split')) {
          destroySlidersMobile();
        }
        initSliders();
        
        if (mediaSliders[0].swiper) {
          if (!mediaSliders[0].swiper.autoplay.running) 
            mediaSliders[0].swiper.autoplay.start();
          else 
            mediaSliders[0].swiper.autoplay.resume();
          
          if (pagination) {
            pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
          }
        }

        if (mediaSliders) {
          mediaSliders.forEach((slider) => {
            if (slider.swiper)
              playVideo(slider.swiper);
            else
              playVideo(slider);
          });
        }
      }
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let mediaSliders = entry.target.querySelectorAll('.media-slideshow__slider');
          let pagination = entry.target.querySelector('.media-slideshow__wrapper .swiper-pagination');
          if (entry.boundingClientRect.width < 750 && entry.target.querySelectorAll('.media-slideshow__slider_mobile').length > 0) {
            mediaSliders = entry.target.querySelectorAll('.media-slideshow__slider_mobile');
            pagination = entry.target.querySelector('.media-slideshow__wrapper_mobile .swiper-pagination');
          }

          if (entry.isIntersecting) {
            if (mediaSliders[0]) {
              if (mediaSliders[0].swiper) {
                if (!mediaSliders[0].swiper.autoplay.running) 
                  mediaSliders[0].swiper.autoplay.start();
                else 
                  mediaSliders[0].swiper.autoplay.resume();
                
                if (pagination) {
                  pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "running";
                }
              }
            }
            mediaSliders.forEach((slider) => {
              if (slider.swiper)
                playVideo(slider.swiper);
              else
                playVideo(slider);
            });
          }
          else {
            if (mediaSliders[0]) {
              if (mediaSliders[0].swiper) {
                if (!mediaSliders[0].swiper.autoplay.running)
                  mediaSliders[0].swiper.autoplay.stop()
                else
                  mediaSliders[0].swiper.autoplay.pause();
                if (pagination) {
                  pagination.querySelector('.swiper-pagination-bullet-active .circle').style.animationPlayState = "paused";
                }
              }
            }
            mediaSliders.forEach((slider) => {
              if (slider.swiper) 
                stopVideo(slider.swiper);
            })
          }
        });
      },
    );

    sections.forEach(section => {
      sectionResizeObserver.observe(section);
      sectionObserver.observe(section);
    });
  }

  initSection();
  controlsVideo();

  document.addEventListener("shopify:section:load", function () {
    initSection();
    controlsVideo();
  })

  window.addEventListener("focus", (event) => {
    const sections = document.querySelectorAll('.media-slideshow-section');
    sections.forEach(section => {
      let mediaSliders = section.querySelectorAll('.media-slideshow__slider');
      let pagination = section.querySelector('.media-slideshow__wrapper .swiper-pagination');
      if (document.documentElement.clientWidth < 750 && section.querySelectorAll('.media-slideshow__slider_mobile').length > 0) {
        mediaSliders = section.querySelectorAll('.media-slideshow__slider_mobile');
        pagination = section.querySelector('.media-slideshow__wrapper_mobile .swiper-pagination');
      }
    
      mediaSliders.forEach(slider => {
        if (slider.swiper)
          playVideo(slider.swiper);
        else
          playVideo(slider);  
      });
    })
  });
  
  window.addEventListener("blur", (event) => {
    const sections = document.querySelectorAll('.media-slideshow-section');
    sections.forEach(section => {
      let mediaSliders = section.querySelectorAll('.media-slideshow__slider');
      let pagination = section.querySelector('.media-slideshow__wrapper .swiper-pagination');
      if (document.documentElement.clientWidth < 750 && section.querySelectorAll('.media-slideshow__slider_mobile').length > 0) {
        mediaSliders = section.querySelectorAll('.media-slideshow__slider_mobile');
        pagination = section.querySelector('.media-slideshow__wrapper_mobile .swiper-pagination');
      }
    
      mediaSliders.forEach(slider => {
        if (slider.swiper) {
          stopVideo(slider.swiper);
        }
      });
    })
  });
})()