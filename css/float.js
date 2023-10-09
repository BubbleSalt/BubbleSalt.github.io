const floatingImage = document.getElementById('floating-img');
const image1Path = '/img/alice_s1.gif';
const image2Path = '/img/alice_s2.gif';

floatingImage.addEventListener('mouseover', () => {
    floatingImage.src = image2Path;
});

floatingImage.addEventListener('mouseout', () => {
    floatingImage.src = image1Path;
});