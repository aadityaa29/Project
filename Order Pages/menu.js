let currentIndex = 0;
    const items = document.querySelector('.items');
    const itemWidth = 220; // Adjust based on item width and margin

    function slideRight() {
        if (currentIndex < items.children.length - 1) {
            currentIndex++;
            items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }

    function slideLeft() {
        if (currentIndex > 0) {
            currentIndex--;
            items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }