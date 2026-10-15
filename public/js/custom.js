/* Main Menu Item Click Active This Tab JS Start */
// jQuery(function ($) {
// 	var path = window.location.href;
// 	$('.custom-nav li a').each(function () {
// 		if (this.href === path) {
// 			$(this).addClass('active');
// 		}
// 	});
// });
/* Main Menu Item Click Active This Tab JS Start */

// Govnt - Bottom Gray bg Slider  Start 
jQuery(document).ready(function () {
	var owl = jQuery('#target-audience-slider');
	owl.owlCarousel({
		items: 4,
		loop: true,
		margin: 20,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 3000,
		autoplayHoverPause: true,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1199: {
				items: 4
			}
		}
	});
	$('.prev').click(function () {
		owl.trigger('owl.prev')
	})
	$('.next').click(function () {
		owl.trigger('owl.next')
	})
})

// Govnt - Bottom Gray bg Slider  Start 

$(function () {
	new WOW().init();
});


/* Add Class window Scroll UP and Down JS Start */
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll('.observe-element');
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});
/* Add Class window Scroll UP and Down JS End */


// Adding Active Class to li of Tabs Head Start 
document.addEventListener('DOMContentLoaded', function () {
    // set initial active li
    const activeBtn = document.querySelector('#pills-tab .nav-link.active');
    if (activeBtn) {
        activeBtn.closest('.nav-item').classList.add('active');
    }

    // tab change listener
    const tabs = document.querySelectorAll('#pills-tab button[data-bs-toggle="pill"]');

    tabs.forEach(button => {
        button.addEventListener('shown.bs.tab', function (e) {

            document.querySelectorAll('#pills-tab .nav-item').forEach(li => {
                li.classList.remove('active');
            });

            e.target.closest('.nav-item').classList.add('active');
        });
    });
});
// Adding Active Class to li of Tabs Head End 
