# Youtube Loop

## Bookmarklet

You can run the bookmarklet by using the following: <a href="javascript:v=document.getElementsByTagName(%22video%22)[0],v.loop=!0,v.addEventListener(%22ended%22,v.play),a=document.createAttribute(%22loop%22),a.value=%22true%22,v.setAttributeNode(a),alert(%22Done!%22);">Youtube Loop</a>  

## Description

This bookmarklet enables Youtube's video loop function.  

## How to use

1. Add the above bookmarklet to your bookmark.
2. Find a Youtube video to loop.
3. **Play the video** and run the bookmarklet.
    - In some environments, the bookmarklet will fail when executed before playing the video.
4. Done! A popup will appear when the bookmarklet is executed.