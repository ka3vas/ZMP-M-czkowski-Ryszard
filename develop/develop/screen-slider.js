document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 1023) {
        let wrapper = document.getElementById('wraper');
        let topLayer = wrapper.querySelector('.top');
        let handle = wrapper.querySelector('.handle');
        let skew = 0;
        let delta = 0;
        
        if ( wrapper.className.indexOf('skew') != -1 ) {
            skew = window.innerWidth + 980;
        }

        wrapper.addEventListener('mousemove', function (e) {
            delta = ( e.clientX - window.innerWidth / 2 ) * 0.5;
            handle.style.right = e.clientX + delta + 'px';
            topLayer.style.width = skew - e.clientX - delta + 'px';
        });
        wrapper.addEventListener('mouseout', function (e) {
            handle.style.right = '50%';
            topLayer.style.width = (window.innerWidth / 100) * 50 + 985 + 'px';
        })
    }
});