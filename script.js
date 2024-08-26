// Your code here.
// Variables to track dragging state
let isDragging = false;
let startX;
let scrollLeft;

const container = document.getElementById('container');

// Mouse down event to start dragging
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    container.classList.add('active');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

// Mouse up event to stop dragging
container.addEventListener('mouseup', () => {
    isDragging = false;
    container.classList.remove('active');
    container.style.cursor = 'grab';
});

// Mouse leave event to stop dragging if the cursor leaves the container
container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.classList.remove('active');
    container.style.cursor = 'grab';
});

// Mouse move event to handle the dragging
container.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // If not dragging, exit
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Multiply by 3 for faster scrolling
    container.scrollLeft = scrollLeft - walk;
});
