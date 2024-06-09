
document.addEventListener('DOMContentLoaded', function() {
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function(callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }

    var thumbnails = document.querySelectorAll('.Img');
    var lightbox = document.querySelector('.lightbox');
    var lightboxContent = document.querySelector('.lightbox-content');
    var caption = document.querySelector('.caption');
    var close = document.querySelector('.close');

    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            var fullSrc = thumbnail.getAttribute('data-full');
            var details = thumbnail.querySelector('.details').textContent;
            lightboxContent.src = fullSrc;
            caption.textContent = details;
            lightbox.style.display = 'flex';
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxContent && e.target !== caption) {
            lightbox.style.display = 'none';
        }
    });
});
