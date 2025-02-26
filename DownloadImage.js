const canvas = document.querySelector('canvas');
if (canvas) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas-image.png';
    link.click();
} else {
    console.log('No canvas found on this page.');
}
