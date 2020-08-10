v = document.getElementsByTagName('video')[0];

// Method 1
v.loop = true;

// Method 2
v.addEventListener('ended',v.play);

// Method 3
a = document.createAttribute('loop');
a.value = 'true';
v.setAttributeNode(a);

alert('Done!');