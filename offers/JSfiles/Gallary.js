const galleryImages = {
    galleryBlock1: [
        "../Resource/Gallary/image (7).jpg",
        "../Resource/Gallary/image (8).jpg",
        "../Resource/Gallary/image (9).jpg",
        "../Resource/Gallary/image (10).jpg",
        "../Resource/Gallary/image (11).jpg",
        "../Resource/Gallary/image (33).jpg",
    ],
    galleryBlock2: [
        "../Resource/Gallary/image (12).jpg",
        "../Resource/Gallary/image (13).jpg",
        "../Resource/Gallary/image (14).jpg",
        "../Resource/Gallary/image (15).jpg",
        "../Resource/Gallary/image (16).jpg",
        "../Resource/Gallary/image (34).jpg",
    ],
    galleryBlock3: [
        "../Resource/Gallary/image (17).jpg",
        "../Resource/Gallary/image (18).jpg",
        "../Resource/Gallary/image (19).jpg",
        "../Resource/Gallary/image (20).jpg",
        "../Resource/Gallary/image (21).jpg",
        "../Resource/Gallary/image (35).jpg",
    ],
    galleryBlock4: [
        "../Resource/Gallary/image (22).jpg",
        "../Resource/Gallary/image (23).jpg",
        "../Resource/Gallary/image (24).jpg",
        "../Resource/Gallary/image (25).jpg",
        "../Resource/Gallary/image (26).jpg",
        "../Resource/Gallary/image (36).jpg",
    ],
    galleryBlock5: [
        "../Resource/Gallary/image (27).jpg",
        "../Resource/Gallary/image (28).jpg",
        "../Resource/Gallary/image (29).jpg",
        "../Resource/Gallary/image (1).jpg",
        "../Resource/Gallary/image (30).jpg",
        "../Resource/Gallary/image (37).jpg",
    ],
    galleryBlock6: [
        "../Resource/Gallary/image (2).jpg",
        "../Resource/Gallary/image (3).jpg",
        "../Resource/Gallary/image (4).jpg",
        "../Resource/Gallary/image (5).jpg",
        "../Resource/Gallary/image (31).jpg",
        "../Resource/Gallary/image (32).jpg",
    ],
};

// Function to preload images
function preloadImage(src) {
    const image = new Image();
    image.src = src;
}

// Function to rotate images
function startGalleryRotation(blockId, images, interval) {
    const block = document.getElementById(blockId);
    let index = 0;

    const transitionTime = 1000; // Time for smooth transition

    // Set the initial image
    block.src = images[index];
    preloadImage(images[(index + 1) % images.length]);

    setInterval(() => {
        const nextIndex = (index + 1) % images.length;
        const nextImage = images[nextIndex];

        // Preload the next image
        preloadImage(nextImage);

        // Smooth transition
        block.style.transition = `opacity ${transitionTime / 800}s ease-in-out`;
        block.style.opacity = "0"; // Start fade-out

        setTimeout(() => {
            // Change image source and fade back in
            block.src = nextImage;
            block.style.opacity = "1";
            index = nextIndex;
        }, transitionTime); // Wait for fade-out to complete
    }, interval);
}

// Lazy loading with Intersection Observer
const lazyLoadGalleryBlocks = () => {
    const blocksToObserve = [
        { id: "gallery-block-1", images: galleryImages.galleryBlock1, interval: 5000 },
        { id: "gallery-block-2", images: galleryImages.galleryBlock2, interval: 9000 },
        { id: "gallery-block-3", images: galleryImages.galleryBlock3, interval: 10500 },
        { id: "gallery-block-4", images: galleryImages.galleryBlock4, interval: 11000 },
        { id: "gallery-block-5", images: galleryImages.galleryBlock5, interval: 13000 },
        { id: "gallery-block-6", images: galleryImages.galleryBlock6, interval: 12000 },
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const blockInfo = blocksToObserve.find((block) => block.id === entry.target.id);
                if (blockInfo) {
                    startGalleryRotation(blockInfo.id, blockInfo.images, blockInfo.interval);
                    observer.unobserve(entry.target); // Stop observing after starting the rotation
                }
            }
        });
    });

    blocksToObserve.forEach((blockInfo) => {
        const block = document.getElementById(blockInfo.id);
        if (block) {
            observer.observe(block);
        }
    });
};

// Initialize lazy loading
lazyLoadGalleryBlocks();
